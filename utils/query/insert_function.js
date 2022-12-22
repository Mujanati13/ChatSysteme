const { use } = require('../../routes');
const {conn} = require('../db');


function insertIntoUser(username , password){
    var query = `insert into person(user_name , user_gmail , user_password , 
        user_join_date) values('${username}' , '${username}@chat.com' , 
        '${password}' , current_date)`;
    conn.query(query , (err , docs)=>{
        if(err) return err
        else return true 
    })
}

function select(username , password){
    let query1 = `select * from chatdb_v1 where 
    user_name = '${username}' and password = '${password}'`;
    conn.query(query1 , (err , docs)=>{
        if(err) throw err 
        else return docs
    })
}

module.exports = {insertIntoUser , select}