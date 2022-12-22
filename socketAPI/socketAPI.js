let socketIo = require('socket.io');

let io = socketIo();
let socketApi = {};
socketApi.io = io;
var {addUser} = require('../utils/users')
module.exports = socketApi;