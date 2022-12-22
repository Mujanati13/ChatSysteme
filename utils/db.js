var mysql = require('mysql');
const { connect } = require('pm2');

var config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chatdb_v1',
    connectionLimit : 10,
    charset: 'utf8mb4'
}
var conn = mysql.createPool(config);


module.exports = { conn }
