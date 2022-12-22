var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var socket = require('socket.io');
var {conn} = require('./utils/db');
var sessions = require('express-session');
const ipfilter = require('express-ipfilter').IpFilter
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var jQuery = require('jquery')(window);
const liveReloadServer = livereload.createServer();

/* 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
}); */

process.on('uncaughtException', function (err) {
  console.error(err);
  window.location.reload();
  //liveReloadServer.refresh("/");
  console.log("Node NOT Exiting...");
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { log } = require('console');
const socketApi = require('./socketAPI/socketAPI');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(connectLiveReload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'AJAX')));

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    resave: true 
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  res.redirect('/');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  res.redirect('/');
});

conn.query('select * from block', (err, docs) => {
  if (err) console.log(err);
  if (docs) {
    var list = []
   for(var i = 0 ; i<docs.length ; i++){
    list.push(docs[i].blocklist);
   }
   app.use(ipfilter(list));
  }
});

module.exports = {app , socket};
