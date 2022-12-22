
const users = [

];
var PerrJs = [];

var storeUsername = []

const RoomLength = [{ name: "default", length: 0 }]

const Room = [
    { name: "الغرفة العامة رقم 1" }
]

const Privateid = [
    { id: "" }
];

const ExixteRoom = [
    {name : 'default' , username : 'mohammed'}
]

function ExiteRoomAddoOne(room , username){
    const objs = {name : room , username : username};
    for(var i = 0 ; i<ExixteRoom.length ; i++){
        if(ExixteRoom[i].username == username){
            return -1;
        }
    }
    ExixteRoom.push(objs);
    return 1;
}

function removeExiteByUsername(user){
    for(var i = 0 ; ExiteRoomAddoOne.length ; i++){
        if(ExixteRoom[i].username == user){
            ExixteRoom.slice(i , i);
            return 1;
        }
    }return -1;
}

function retunExiteRoom(){
    var room = ''
    ExixteRoom.forEach(itms =>{
        room += itms.name +"" + itms.username +"    "
    });return room;
}


function getLength() {
    return users.length;
}

function addUser(id, name) {
    // return user who added
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id)
            return false;
    }
    const user = { id: id, name: name }
    users.push(user);
    return true;
}

function removeUser(id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            users.splice(i, 1);
            break;
        }
    }
}

function getUse() {
    // return array 
    return users;
}

function getUsersById(id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            return users[i].name;
        }
    }
}

function addRoom(room) {
    Room.splice(0, Room.length)
    var ro = { name: room };
    Room.push(ro);
}

function getPid() {
    return Privateid[0].id;
}

function addPid(id) {
    Privateid.splice(0, Privateid.length)
    var ro = { id: id };
    Privateid.push(ro);
}

function getRoom() {
    return Room[0].name;
}

function getUser(id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            return true;
        }
    } return false;
}

const Name = [{ name: "uni" }];

function addNmae(name) {
    const n = { name: name };
    Name.push(n);
}

function getNameByid(id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id)
            return users[i].name;
    } return "false";
}

function updateNmae(id, name) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id)
            users[i].name = name;
    } return false;
}

function addRommlength(name) {
    for (var i = 0; i < RoomLength.length; i++) {
        if (RoomLength[i].name == name) {
            RoomLength[i].length += 1;
            return;
        } else {
            var room = { name: name, length: 1 };
            RoomLength.push(room);
            return;
        }
    }
}

function getRommlength(name) {
    for (var i = 0; i < RoomLength.length; i++) {
        if (name == RoomLength[i].name)
            return RoomLength[i].length;
        else {
            return 0;
        }
    }
}

const AdminMsg = [{ msg: 'welcome' }]

function AddadminMsg(msg) {
    var msg = { msg: msg };
    AdminMsg.push(msg);
}

function getAdminMsg() {
    return AdminMsg;
}

const UserStyle = [{ fontColor: "", bkColor: "" }];

function addusersStyle(fontcolor, bkColor) {
    UserStyle.splice(0, UserStyle.length - 1)
    var style = { fontColor: fontcolor, bkColor: bkColor };
    UserStyle.push(style);
}

function getUserStyle() {
    return [UserStyle[0].fontColor, UserStyle[0].bkColor];
}


function addPeerJs(id) {
    for (var i = 0; i < PerrJs.length; i++) {
        if (PerrJs[i].id == id)
            return;
    }
    PerrJs.push(id)
}

function getPeerId() {
    return PerrJs;
}

function storeUsernameFun(user) {
    for (var i = 0; i < storeUsername.length; i++) {
        if (storeUsername[i].user == user)
            return;
    }
    storeUsername.push(user);
}

function getStoreUser() {
    return storeUsername[0];
}

const usersRoom = []

function insertIntoRoom(id , room){
    const obj = {id , room}
    usersRoom.push(obj)
}

function updateRoom(id , newRoom){
    usersRoom.forEach(e=>{
        if(e.id == id){
            e.room = newRoom;
        }
    })
}

function getCurrentRoomById(id){
    usersRoom.forEach(e=>{
        if(e.id == id)
            return e.room
    })
}

module.exports = {insertIntoRoom , updateRoom , getCurrentRoomById , getStoreUser , retunExiteRoom , ExiteRoomAddoOne , removeExiteByUsername , storeUsernameFun , getPeerId, addPeerJs, addusersStyle, getUsersById, getUserStyle, updateNmae, AddadminMsg, getAdminMsg, getNameByid, addNmae, getUser, addPid, getPid, addRoom, getRoom, getLength, addUser, removeUser };