var express = require('express');
var router = express.Router();
var socketApi = require('../socketAPI/socketAPI');
var { insertIntoRoom, updateRoom, getCurrentRoomById, storeUsernameFun, ExiteRoomAddoOne, retunExiteRoom, removeExiteByUsername, getStoreUser, addusersStyle, addPeerJs, getPeerId, getUsersById, AddadminMsg, getAdminMsg, getNameByid, getUser, addNmae, updateNmae, getPid, addPid, getLength, addUser, removeUser, addRoom, getRoom, getUserStyle, getRoom } = require('../utils/users');
var { conn } = require('../utils/db');
const fs = require('fs');
require('events').EventEmitter.prototype._maxListeners = 100;
var jwt = require('jsonwebtoken');
var jwtdecode = require('jwt-decode');
var storeinBrowser = require('local-storage');


var ip = require('ip'); // id.address
const DeviceDetector = require('node-device-detector');
const detector = new DeviceDetector({
  clientIndexes: true,
  deviceIndexes: true,
  deviceAliasCode: false,
});
const userAgent = 'Mozilla/5.0 (Linux; Android 5.0; NX505J Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36';
const result = detector.detect(userAgent);

var { io } = socketApi
/* GET home page. */
var roomid = "الغرفة0";
var sendMsgTime = 0;
const socketsStatus = {};

const ipBlock = require('express-ip-block');
const ips = [];
const options = { allowForwarded: true };

conn.query('select * from block', (err, docs) => {
  if (err) console.log(err);
  if (docs) {
    for (var i = 0; i < docs.length; i++) {
      var dataJoson = { ip: docs[0].blocklist }
      let data = JSON.stringify(dataJoson);
      fs.writeFileSync('./utils/block.json', data);
    }
  }
})

router.get('/', async function (req, res, next) {

  res.render('./index.ejs', {
    titile: 'شات بنوتة قلبي شات عراقي',
  })

  socketApi.io.on("connect", (socket) => {


    // voive cum start 
    const socketId = socket.id;
    socketsStatus[socket.id] = {};
    console.log("connect");

    socket.on("userInformation", function (data) {
      socketsStatus[socketId] = data;

      socketApi.io.emit("usersUpdate", socketsStatus);
    });

    socket.on('voiceHtml', ({ data, room, id }) => {
      console.log("click");
      socket.broadcast.to(room).emit("voiceChatChannel", { data, id });
    });

    socket.on('voiceHtmldd', (img) => {
      console.log(img);
    });



    // voice cum end 

    if (addUser(socket.id, getNameByid(socket.id))) {
      const transport = socket.conn.transport.name; // in most cases, "polling"

      socket.conn.on("upgrade", () => {
        const upgradedTransport = socket.conn.transport.name; // in most cases, "websocket"
      });

      var userRemove = [false]
      socket.on('isJoined', () => {
        userRemove[0] = true;
        socketApi.io.to(socket.id).emit("isJoin", true)
      })
      /* setInterval(() => {
        if (socket.connected == false) {
          console.log("connection is loooooooose")
          socketApi.io.on("connect", (socket) => {
            // socketApi.io.to(anotehr.id).emit('ejections', 'bay');
          });
        }
      }, 20000) */
      // update time in Private chat
      setInterval(() => {
        var query = `update chat set timen = timen + 1 `;
        conn.query(query)
      }, 5000);

      console.log(socket.id + " is connected");
      socket.on("connect_error", (err) => {
        socketApi.io.to(socket.id).emit("refrechpage", "");
      });
      socket.on('getImojey', () => {
        fs.readdir('./public/emojey', (err, result) => {
          if (err) console.log(err);
          if (result) {
            socketApi.io.to(socket.id).emit('backEmojey', { img: result })
          }
        });
      })
      socket.on('ejection', (id) => {
        var query = `delete from onlinetable where name='${getNameByid(id)}'`;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          if (docs) {
            socketApi.io.to(id).emit('ejections', 'bay');
          }
        })
      });

      socket.on('typing', (id) => {
        socketApi.io.to(id).emit('typingOn', '')
      });


      /*  var colorstats = true;
 
       setInterval(() => {
         var query = `update onlinetable set Statstime  = Statstime +4 `;
         var query1 = 'update onlinetable set statscolor = "yellow" where Statstime > 300 and statscolor != "yellow" and statscolor != "red" ';
         conn.query(query, (err, docs) => {
           if (docs.affectedRows > 0) {
 
           }
         }) */
      /*  conn.query(query1, (err, docs) => {
         if (docs.affectedRows > 0) {
           console.log(docs.affectedRows);
           socketApi.io.emit("updateCard1")
         }
       })
     }, 8000) */

      /*   setInterval(() => {
          var queryprime = `update exitero set Statstime  = Statstime +4 `;
          var query1prime = 'update exitero set statscolor = "yellow" where Statstime > 300 and statscolor != "yellow" and statscolor != "red" ';
          conn.query(queryprime, (err, docs) => {
            if (docs.affectedRows > 0) {
  
            }
          })
          conn.query(query1prime, (err, docs) => {
            if (docs.affectedRows > 0) {
              console.log(docs.affectedRows);
              socketApi.io.emit("updateCard1")
            }
          })
        }, 8000) */

      conn.query('select * from block', (err, docs) => {
        if (err) console.log(err);
        if (docs) {
          var docs1 = []
          for (var i = 0; i < docs.length; i++) {
            docs1.push(docs[i].blocklist)
          }
          req.session.blockip = docs1;
        }
      });

      socket.on('getUsername', () => {
        socketApi.io.to(socket.id).emit("usernameget", getNameByid(socket.id));
      });

      var queryAdminMsg = "select * from messages";

      var query7 = "select * from room order by length desc";
      conn.query(query7, (err, docs) => {
        if (err) console.log(err);
        else if (docs) {
          socketApi.io.to(socket.id).emit("rooms", ({ docs: docs }))
        }
      })

      socket.on('refrechRooms', () => {
        var query7 = "select * from room order by length desc";
        conn.query(query7, (err, docs) => {
          if (err) console.log(err);
          else if (docs) {
            socketApi.io.emit("rooms", ({ docs: docs }))
          }
        })
      })

      socket.on("roomHasCreated", (s) => {
        var query7 = "select * from room order by length desc";
        conn.query(query7, (err, docs) => {
          if (err) console.log(err);
          else if (docs) {
            console.log("rooom created");
            socketApi.io.emit("rooms", ({ docs: docs }))
          }
        })
      })



      socket.on("sendmeusers", (query) => {
        var check = `select * from exitero where user_name = '${getNameByid(socket.id)}'`;
        conn.query(check, (err1, docs2) => {
          if (err1) throw new Error("shit")
          if (docs2 != "") {
            if (docs2[0].room_name !== undefined) {
              var query4 = `select * from onlinetable where room_name = '${(docs2[0].room_name ? docs2[0].room_name : '')}' order by time desc`;
              conn.query(query4, (err, docs1) => {
                if (err) console.log(err);
                else if (docs1) {
                  socketApi.io.to(socket.id).emit("adduser", ({ docs: docs1, id: socket.id, sendMsgTime: sendMsgTime }));
                }
              });
            }
          }
        })
      });

      socket.on("sendmeusersNo", (query) => {
        var check = `select * from exitero where user_name = '${getNameByid(socket.id)}'`;
        conn.query(check, (err1, docs2) => {
          if (err1) throw new Error("shit")
          if (docs2 != "") {
            if (docs2[0].room_name !== undefined) {
              var query4 = `select * from onlinetable where room_name = '${(docs2[0].room_name ? docs2[0].room_name : '')}' order by time desc`;
              conn.query(query4, (err, docs1) => {
                if (err) console.log(err);
                else if (docs1) {
                  socketApi.io.to(socket.id).emit("adduserNo", ({ docs: docs1, id: socket.id, sendMsgTime: sendMsgTime }));
                }
              });
            }
          }
        })
      });

      socket.on('updateInfos', ({ nikename, username, namecolor, auth, bcs, cs }) => {
        var query = `update person set nikname = '${nikename}' , auth = '${auth}' , nameColor = '${namecolor}' , nameBc = '${bcs}' , fontColor = '${cs}'  where user_name = '${username}'`;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          if (docs) {
            var query1 = `update onlinetable set namecolor = '${namecolor}', namebg = '${bcs}' , fontcolor='${cs}', namkename = '${nikename}', stats = '${auth}' where name = '${username}'`;
            conn.query(query1, (err, docs1) => {
              if (err) console.log(err);
              if (docs1) {
                var roomexi = `update exitero set namecolor='${namecolor}' , nameg='${bcs}' , nikename = '${nikename}' , stats = '${auth}' where user_name = '${username}'`;
                conn.query(roomexi, (err, docs13) => {
                  if (err) console.log(err);
                  if (docs13) {
                    var querySelect = `select * from onlinetable where user_id = '${socket.id}'`;
                    conn.query(querySelect, (errs, docss) => {
                      if (errs) console.log(errs);
                      if (docss != "") {
                        socketApi.io.emit("changeInfos", { docss, id: socket.id })
                      }
                    })
                  }
                })
              }
            })
          }
        })
      })

      socket.on('leaveOne', (id) => {
        console.log("id leave" + id);
        socketApi.io.to(id).emit("leaveOne", "ll")
      })

      socket.on("sendmeusersSearch", (query) => {
        var query4 = `select * from onlinetable where name like '%${query}%'`;
        if (query == "" || query == null || query == undefined || query.length == 0)
          query4 = `select * from onlinetable order by time desc`;
        conn.query(query4, (err, docs1) => {
          if (err) console.log(err);
          else if (docs1) {
            socketApi.io.to(socket.id).emit("adduserSearch", ({ docs: docs1, id: socket.id, sendMsgTime: sendMsgTime }));
          }
        });
      });


      socket.on("addname", ({ name }) => {
        storeUsernameFun(name);
        console.log("usernamedas " + getStoreUser());
        var queryPerson = `select * from person where user_name = '${getStoreUser()}'`;
        conn.query(queryPerson, (err, docss) => {
          if (err) console.log(err);
          if (docss) {
            console.log(docss);
            addusersStyle(docss.fontColor, docss.nameBC);
            console.log(getUserStyle())
          }
        });



        console.log("add name " + name);
        if (addUser(socket.id, name)) {

        } else {
          updateNmae(socket.id, name)
        }
      });


      socket.on("hanitmsg", ({ text }) => {
        /*  var query1 = `update onlinetable set statscolor = "green" ,Statstime = 0  where name = "${getNameByid(socket.id)}" and statscolor != "red" `;
         conn.query(query1, (err, docs) => {
           if (err) console.log(err);
           socketApi.io.emit("updateCard1")
         })
         var query1prime = `update exitero set statscolor = "green" , Statstime = 0   where user_name = "${getNameByid(socket.id)}" and statscolor != "red" `;
         conn.query(query1prime, (err, docs) => {
           console.log(err);
         }) */
        var query = `select * from onlinetable where user_id = '${socket.id}'`;
        conn.query(query, (err, docs) => {
          if (docs != "") {
            socketApi.io.emit("hanitMsgBack", { text: text, name: getNameByid(socket.id), id: socket.id, img: docs[0].img })
          }
        })
      });

      socket.on('sendhanitpost', ({ name, id, text, img }) => {
        var querys = `select * from person where user_name ='${getNameByid(socket.id)}'`;
        conn.query(querys, (err, docs1) => {
          if (err) console.log(err);
          var query = `insert into hanitmsg values('${id}','${text}','${name}',0 , 0 , '${docs1[0].img}' , 0)`;
          conn.query(query, (err, docs) => {
            if (err) console.log(err);
            if (docs) {
              console.log(docs);
              socketApi.io.emit('sendHanimsgViaBrowser', {
                name: getNameByid(socket.id),
                msg: text,
                socket: socket.id,
                img: docs1[0].img,
                id: id,
              })
            }
          });
        })
      });

      socket.on('getusername', () => {
        socketApi.io.to(socket.id).emit("username0", { username: getNameByid(socket.id), id: Math.floor(Math.random() * 6000) });
      });

      var Array = [false]
      socket.on('displeC', () => {
        var query = `update onlinetable set comm = 'yes' where name = '${getNameByid(socket.id)}'`;
        conn.query(query)
        Array[0] = true;
      });
      socket.on('enbileC', () => {
        var query = `update onlinetable set comm = 'no' where name ='${getNameByid(socket.id)}'`;
        conn.query(query)
        Array[0] = false;
      })

      socket.on('displeN', () => {
        var query = `update onlinetable set notification  = 'yes' where name = '${getNameByid(socket.id)}'`;
        conn.query(query)
        var query1 = `update onlinetable set  statscolor   = 'red' where name ='${getNameByid(socket.id)}'`;
        conn.query(query1)
        var query10 = `update exitero set  statscolor   = 'red' where user_name ='${getNameByid(socket.id)}'`;
        conn.query(query10)
        socketApi.io.emit("updateCard1")
      });
      socket.on('enbileN', () => {
        var query = `update onlinetable set notification  = 'no' where name ='${getNameByid(socket.id)}'`;
        conn.query(query)
        var query1 = `update onlinetable set  statscolor   = 'green' where name ='${getNameByid(socket.id)}'`;
        conn.query(query1, (err, docs) => {
          if (err) console.log(err);
        });
        var query10 = `update exitero set  statscolor  = 'green' where user_name ='${getNameByid(socket.id)}'`;
        conn.query(query10)
        socketApi.io.emit("updateCard1")
      })

      socket.on("sendPmsg", ({ text, id }) => {

        console.log("finder id = " + id);
        var query2 = `select * from onlinetable where user_id ='${id}'`;
        var query3 = `select * from onlinetable where user_id ='${socket.id}'`;
        conn.query(query3, (errq, docsq) => {
          if (errq) console.log(errq);
          if (docsq != "") {
            conn.query(query2, (err, docs) => {
              if (err) console.log(err);
              if (docs != '') {
                console.log(docs);
                if (docs[0].comm == "no" || getPeerId() == id) {
                  socketApi.io.to([id]).emit("reponsePmsg",
                    ({
                      text: (typeof text == 'object' ? '...' : text),
                      name: getNameByid(socket.id),
                      source: socket.id,
                      dist: id,
                      img: docsq[0].img
                    })
                  );
                } else {
                  socketApi.io.to(socket.id).emit("closePrivatemsg", { msg: "هدا المستخدم لا يقبل المحداث الخاصة" })
                }
              }
            })
          }
        })
      });

      socket.on('sendAlertTo', ({ id, msg }) => {
        var query = `select * from onlinetable where user_id = '${id}'`;
        var query1 = `select * from onlinetable where user_id = '${socket.id}'`;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          if (docs != "") {
            if (docs[0].notification == "no") {
              conn.query(query1, (err1, docs1) => {
                if (err1) console.log(err1);
                if (docs1 != '') {
                  socketApi.io.to(id).emit('backAlert', { msg: msg, name: getNameByid(socket.id), img: docs1[0].img });
                }
              })
            } else {
              socketApi.io.to(socket.id).emit('backAlert', 'هدا المستخدم غالق التنبيهات');
            }
          }
        })
      })

      /*    socket.on('storeFile', (data) => {
           var dictstring = JSON.stringify(data);
           console.log(dictstring);
           fs.writeFile('/utils/firebase/img.json' , dictstring)
         }) */

      socket.on("sendPfile", ({ name, id, type, photo }) => {
        var query2 = `select * from onlinetable where user_id ='${id}'`;
        conn.query(query2, (err, docs) => {
          if (err) console.log(err);
          if (docs) {
            if (docs[0].comm == "no" || getPeerId() == id) {
              socketApi.io.to(id).emit("reponseFile",
                ({
                  text: name,
                  name: getNameByid(socket.id),
                  source: socket.id,
                  dist: id,
                  type: type,
                  photo: photo
                })
              );
            } else {
              socketApi.io.to(id).emit('testMssagerDisplay', socket.id)
            }
          }
        })
      });


      console.log("add room name " + ExiteRoomAddoOne(roomid, getStoreUser(socket.id)));
      console.log(" room find " + retunExiteRoom());

      socket.on('sendToRVB', ({ name, img, text, id }) => {
        socketApi.io.to(id).emit('sendToRVBs', { name, text, img, id: socket.id })
      })

      socket.on('getChatP', (name) => {
        /*  var query1 = `update onlinetable set statscolor = "green" ,Statstime = 0  where name = "${getNameByid(socket.id)}" and statscolor != "red" `;
         conn.query(query1, (err, docs) => {
           if (err) console.log(err);
         })
         var query1prime = `update exitero set statscolor = "green" , Statstime = 0   where user_name = "${getNameByid(socket.id)}" and statscolor != "red" `;
         conn.query(query1prime, (err, docs) => {
           console.log(err);
           socketApi.io.emit("updateCard1")
         }) */
        console.log(`user1 ${name} user2 ${socket.id}`);
        var query = `select * from chat where source = '${name}' and dis = '${socket.id}' or source = '${socket.id}' and dis = '${name}'`;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          if (docs) {
            console.log(docs);
            var hetimg = `select * from onlinetable where user_id = '${name}'`;
            conn.query(hetimg, (err1, docs1) => {
              if (err) console.log(err1);
              if (docs1 != "") {
                socketApi.io.to(socket.id).emit('resChatP', ({ docs: docs, name: getNameByid(name), socket: socket.id, img: docs1[0].img, id: name }));
                //socketApi.io.to(name).emit('chekcMessanger', ({ docs: docs, name: getNameByid(name), socket: socket.id, img: docs1[0].img, id: socket.id }));
              } else {
                setTimeout(() => {
                  //socketApi.io.to(name).emit('chekcMessanger', ({ docs: docs, name: getNameByid(name), socket: socket.id, img: docs1[0].img, id: socket.id }));
                }, 500)
              }
            })
          }
        });
      });


      socket.on('getChat', (name) => {
        /*  var query1 = `update onlinetable set statscolor = "green" ,Statstime = 0  where name = "${getNameByid(socket.id)}" and statscolor != "red" `;
         conn.query(query1, (err, docs) => {
           if (err) console.log(err);
         })
         var query1prime = `update exitero set statscolor = "green" , Statstime = 0   where user_name = "${getNameByid(socket.id)}" and statscolor != "red" `;
         conn.query(query1prime, (err, docs) => {
           console.log(err);
           socketApi.io.emit("updateCard1")
         }) */
        console.log(`user1 ${name} user2 ${socket.id}`);
        var query = `select * from chat where source = '${name}' and dis = '${socket.id}' or source = '${socket.id}' and dis = '${name}'`;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          if (docs) {
            console.log(docs);
            var hetimg = `select * from onlinetable where user_id = '${name}'`;
            conn.query(hetimg, (err1, docs1) => {
              if (err) console.log(err1);
              if (docs1 != "" && docs1[0] != undefined) {
                socketApi.io.to(socket.id).emit('resChat', ({ docs: docs, name: getNameByid(name), socket: socket.id, img: docs1[0].img, id: name }));
                socketApi.io.to(name).emit('chekcMessanger', ({ docs: docs, name: getNameByid(name), socket: socket.id, img: docs1[0].img, id: socket.id }));
              } else {
                setTimeout(() => {
                  if (docs1 != "" && docs1[0] != undefined) {
                    socketApi.io.to(name).emit('chekcMessanger', ({ docs: docs, name: getNameByid(name), socket: socket.id, img: docs1[0].img, id: socket.id }));
                  }
                }, 1000)
              }
            })
          }
        });
      });

      socket.on('getPrvInfos', () => {
        var query = `select * from onlinetable where user_id = '${socket.id}'`;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          if (docs != "") {
            socketApi.io.to(socket.id).emit('getPrvinfos', { name: docs[0].name, img: docs[0].img });
          }
        })
      })

      socket.on('addLikes', (id) => {
        var query = `update person set likes = likes + 1 where user_id = '${id}'`;
        var query1 = `select * from person where user_id = '${id}'`;
        conn.query(query, (err, docs) => {
          if (docs) {
            conn.query(query1, (err1, docs1) => {
              if (err) console.log(err);
              if (docs1 != '') {
                var query0 = `select * from onlinetable where user_id = '${socket.id}'`;
                conn.query(query0, (err, docs0) => {
                  if (err) console.log(err);
                  if (docs != "") {
                    var query2 = `select * from onlinetable where name ='${docs1[0].user_name}'`
                    conn.query(query2, (err2, docs2) => {
                      if (err2) console.log(err2);
                      if (docs2 != "") {
                        socketApi.io.to(socket.id).emit('updateLikeslive', { likes: docs1[0].likes, id: id, name: docs0[0].name, img: docs0[0].img })
                        socketApi.io.to(docs2[0].user_id).emit('updateLikesliveNo', { likes: docs1[0].likes, id: id, name: docs0[0].name, img: docs0[0].img })
                      }
                    })
                  }
                })
              }
            })
          }
        })
      })

      socket.on('UpdateChat', (name) => {
        console.log(`user1 ${name} user2 ${socket.id}`);
        var query = `select * from chat where source = '${name}' and dis = '${socket.id}' or source = '${socket.id}' and dis = '${name}'`;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          if (docs) {
            console.log(docs);
            var hetimg = `select * from onlinetable where user_id = '${name}'`;
            conn.query(hetimg, (err1, docs1) => {
              if (err) console.log(err1);
              if (docs1 != "") {
                socketApi.io.to([socket.id, name]).emit('resChatUP', ({ docs: docs, name: getNameByid(name), socket: socket.id, img: docs1[0].img, id: name }));
                // socketApi.io.to([name]).emit('resChat', ({ docs: docs, name: getNameByid(name), socket: socket.id }));
              }
            })
            // if same thing wron add name [name , socket.ids]
          }
        });
      });



      socket.on('sendChat', ({ msg, user1, source, dist, img }) => {
        var query1 = `select * from onlinetable where user_id = '${dist}'`;
        var query2 = `select * from onlinetable where user_id = '${source}'`;
        conn.query(query2, (errs, docss) => {
          if (errs) console.log(errs);
          if (docss) {
            conn.query(query1, (err, docs) => {
              if (err) console.log(err);
              else if (docs) {
                var user2 = docs[0].name;
                var query2 = `insert into chat(user1 , user2 , source , dis, msg , timen , img) values(
                  '${user1}' , '${user2}' , '${source}' , '${dist}' , '${msg}' , 0 , '${docss[0].img}'
                ) `;
                conn.query(query2, (err1, docs1) => {
                  if (err1) console.log(err1);
                  if (docs1) {
                    // refresh the msgs

                    console.log("message done!");
                  }
                })
              }
            });
          }
        })
      })
      socket.on('getLiks', (name) => {
        var query = `select * from person where user_name = '${name}' `;
        var query3 = `select * from onlinetable where name = '${name}' `;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          if (docs) {
            /*  var query2 = `select * from clasment`;
             conn.query(query2, (err, docs1) => {
               if (err) console.log(err);
               if (docs1) { */
            conn.query(query3, (err1, id) => {
              if (err1) console.log(err);
              if (id != "") {
                socketApi.io.to(socket.id).emit("sendLiks",
                  {
                    likes: 20,
                    // clasment: docs1,
                    docs: docs[0],
                    room: id[0].room_name,
                    username: getNameByid(socket.id),
                    socketid: (id[0].user_id ? id[0].user_id : res.redirect('/')),
                    roomImg: id[0].img
                  }
                );
                /* var queryroom = `select * from room where room_name = '${getRoom()}'`;
                conn.query(queryroom, (errr, docsr) => {
                  if (errr) console.log(errr);
                  if (docsr) {
                   
                  }
                }) */
              }
            })
          }
          /* }); */
          /*  } */
        });
      });
      socket.on("leaveRoom", ({ name, idSocket }) => {
        var query = `update room set length = length -1 where room_name = '${getRoom()}'`;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          else if (docs) {
            socket.leave(getRoom(), idSocket);
            socketApi.io.emit('leaveRoomAdmin', name);
            var query7 = "select * from room order by length desc";
            conn.query(query7, (err, docs) => {
              if (err) console.log(err);
              else if (docs) {
                socketApi.io.emit("rooms", ({ docs: docs }))
              }
            })
          }
        })
      })

      socket.on('getemojey', (d) => {
        fs.readFile('./public/Gift', (err, docs) => {
          if (err) console.log(err);
          else if (docs) {
            socketApi.io.to(socket.id).emit("sendemojeyback", docs)
          }
        });
      });



      socket.on('leaveroomitsellf', () => {
        var room = `select * from onlinetable where user_id = '${socket.id}'`;
        conn.query(room, (errRom, docsRom) => {
          if (docsRom != "") {
            var query = `update room set length = length -1 where room_name = '${docsRom[0].room_name}'`;
            conn.query(query, (err, docs) => {
              if (err) console.log(err);
              else if (docs) {
                var query7 = "select * from room order by length desc";
                conn.query(query7, (err, docs) => {
                  if (err) console.log(err);
                  else if (docs) {
                    socketApi.io.emit("rooms", ({ docs: docs }))
                  }
                })
                socket.leave(docsRom[0].room_name)
                var query1 = `select * from onlinetable where name = '${getNameByid(socket.id)}'`;
                conn.query(query1, (err, docs) => {
                  if (err) console.log(err);
                  if (docs) {
                    socketApi.io.emit('leaveRoomIt', { name: getNameByid(socket.id), socket: socket.id, img: docs[0].img });
                    var deletev = `delete from voice where user_id = '${getNameByid(socket.id)}'`;
                    conn.query(deletev, (errv, docsv) => {
                      var getv = 'select * from voice order by channel asc';
                      if (docsv) {
                        conn.query(getv, (errg, docsg) => {
                          if (docsg) {
                            socketApi.io.to(socket.id).emit('updateVoiceLine', []);
                            socketApi.io.to(docs[0].room_name).emit('updateVoiceLine', docsg);
                            var updaterom = `update onlinetable set room_name = '' where user_id = '${socket.id}'`;
                            conn.query(updaterom)
                          }
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        })
      });

      socket.on('getgift', (d) => {
        fs.readFile('./public/Gift', (err, docs) => {
          if (err) console.log(err);
          else if (docs) {
            socketApi.io.to(socket.id).emit("sendgiftback", docs)
          }
        });
      });

      // console.log(`${socket.id} is connected`);
      socket.on("peerJsID", (id) => {
        addPeerJs(id);
        console.log("add id");
        socket.on('sendPeerId', () => {
          console.log("it's fine lol");
          console.log("send peerid");
          socketApi.io.emit('PeerIds', { docs: getPeerId(), id: id });
          console.log("get all");
          console.log(getPeerId());
        })

      });



      socket.on("roomid", ({ id }) => {
        console.log(id);
        var qu = `select * from onlinetable where name = '${getNameByid(socket.id)}'`;
        conn.query(qu, (qurr, qudocs) => {
          if (qurr) console.log(qurr);
          if (true) {
            var query1 = `update room set length = length -1 where room_name = '${qudocs[0].room_name}' and length != 0 `;
            conn.query(query1, (err, docs) => {
              var query2 = `update room set length = length +1 where room_name = '${id}'`;
              conn.query(query2, (err, docs) => {
                console.log(id + " ");
                var query7 = "select * from room order by length desc";
                conn.query(query7, (err, docs) => {
                  if (err) console.log(err);
                  else if (docs) {
                    socket.leave(qudocs[0].room_name)
                    socket.join(id);
                    updateRoom(socket.id, id);
                    socketApi.io.emit("rooms", ({ docs: docs }));
                    socketApi.io.emit("userOrder", ({ id: socket.id, newRoom: id }))
                    socketApi.io.to(socket.id).emit("userOrderN", '')
                    conn.query(`delete from voice where user_id = '${getNameByid(socket.id)}'`, (errde, docsde) => {
                      if (docsde) {
                        var queryro = `select * from voice where room = '${id}' order by channel asc`;
                        conn.query(`update onlinetable set room_name = '${id}' where user_id = '${socket.id}'`);
                        conn.query(queryro, (errRo, docsRo) => {
                          if (errRo) console.log(errRo);
                          if (docsRo) {
                            console.log("send change");
                            setTimeout(() => {
                              socketApi.io.to(id).emit('updateVoiceLine', docsRo);
                            }, 1000)
                          }
                        })
                      }
                    })

                  }
                })
              })
            })
          }
        })
        /*  var deleteroom = `delete from exitero where user_name = '${getNameByid(socket.id)}'`;;
         conn.query(deleteroom, (err, docs) => {
           if (err) console.log(err);
         }); */

        var query0 = `select * from onlinetable where name = '${getNameByid(socket.id)}'`;
        conn.query(query0, (err, docs1) => {
          if (err) console.log(err);
          if (docs1) {
            var addroom = `insert into exitero values('${getNameByid(socket.id)}' , '${id}' , '${socket.id}' , '${docs1[0].country}' , '${docs1[0].namecolor}' , '${docs1[0].namebg}' , '${docs1[0].img}')`;
            var addromUpdate = `update exitero set room_name = '${id}' , country = '${docs1[0].country}' , namecolor = '${docs1[0].namecolor}' , nameg = '${docs1[0].namebg}' , img = '${docs1[0].img}' where user_name = '${getNameByid(socket.id)}'; `
            conn.query(addromUpdate, (err, docs) => {
              if (err) console.log(err);
              var updateon = `update onlinetable set room_name = '${id}' where name = '${getNameByid(socket.id)}'`;
              conn.query(updateon, (errs, docsa) => {
                if (errs) {
                  console.log(errs);
                }
                if (docsa) {

                  socket.join(id);
                }
              })
            });
          }
        })


        addRoom(id);
        var querys = `select * from person where user_name = '${getNameByid(socket.id)}'`;
        conn.query(querys, (err, docs) => {
          if (err) console.log(err);
          if (docs) {
            socketApi.io.emit("leaveRoom", { msg: getRoom(), name: getNameByid(socket.id), socket: socket.id, img: docs[0].img })
          }
        })
      });



      socket.on('getRoom', (s) => {
        var query = 'select * from room';
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          if (docs) {
            socketApi.io.to(socket.id).emit('backRoom', (docs))
          }
        })
      })

      socket.on("changeRoom", ({ room }) => {

        addRoom(room);
        var query = `update room set length = length -1 where room_name = '${getRoom()}'`;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          else if (docs) {
            var query2 = `update room set length = length +1 where room_name = '${room}'`;
            conn.query(query2, (err, docs) => {
              if (err) console.log(err);
              if (docs) {
                console.log(getRoom() + "transfer into");
                socketApi.io.emit("changeRoom", { msg: `تم نقله الى غرفة أخرى`, name: getStoreUser() })
                socket.join([getRoom(), socket.id]);
                var query7 = "select * from room order by length desc";
                conn.query(query7, (err, docs) => {
                  if (err) console.log(err);
                  else if (docs) {
                    socketApi.io.emit("rooms", ({ docs: docs }))
                  }
                })
              }
            })
          }
        })
      });



      var queryAdminMsg = "select * from messages";

      var query4 = "select divtag from onlinetable order by time desc";
      conn.query(query4, (err, docs1) => {
        if (err) console.log(err);
        else if (docs1) {
          socketApi.io.to(socket.id).emit("adduser", ({ docs: docs1, id: socket.id, sendMsgTime: sendMsgTime }));
        }
      });
      var newone = true
      if (newone) {
        socket.on('get-hanit-msg', () => {
          var query = `select * from hanitmsg order by time asc limit 30`;
          conn.query(query, (err, docs) => {
            if (err) console.log(err);
            if (docs) {
              socketApi.io.to(socket.id).emit('back-hanit-msg', { docs: docs, socket: socket.id })
            }
          })
        });
        newone = false;
      }

      socket.on('getCuurentUserRoom', () => {
        var ha = `select * from onlinetable where name = '${getNameByid(socket.id)}'`;
        conn.query(ha, (err1, docs1) => {
          if (err1) throw new Error("shit")

          if (docs1 != "") {
            var query = `select * from exitero where room_name != '${docs1[0].room_name}'`;
            conn.query(query, (err, docs) => {
              if (err) console.log(err);
              if (docs) {
                socketApi.io.to(socket.id).emit("backcurrentRoomUsers", docs)
              }
            })
          }
        })
      })

      var query1 = "select number from online";
      conn.query(query1, (err, docs) => {
        if (err) console.log(err);
        if (docs) {
          socketApi.io.emit("users", docs[0].number);
        }
      })

      socket.on("sendmsg", ({ text, nikename, name, img, room, fontcolor, namebg, namecolor }) => {
        sendMsgTime = 0;
        var word = []
        var send = true;
        var ing = ''
        /*  conn.query('select * from world', (err, docs) => {
           if (docs) {
             for (var i = 0; i < docs.length; i++) {
               word.push(docs[i].word)
             }
             for (var j = 0; i < word.length; j++) {
               if (word[i] == text) {
                 send = false;
               }
             }
           }
         }) */
        if (true) {
          console.log(room);
          req.session.name = name;
          socket.broadcast.to(room).emit("msgback",
            {
              idsocket: socket.id,
              text: text,
              name: name,
              id: Math.floor(Math.random() * 1000000000000000),
              imgs: img,
              namecolor: namecolor,
              fontbg: namebg,
              fontcolor: fontcolor,
              nikename: nikename
            })
          /*           console.log(socket.id);
                    var query1 = `select * from person where user_name = '${getNameByid(socket.id)}'`;
                    var query2 = `select * from onlinetable where name = '${getNameByid(socket.id)}'`;
                    conn.query(query1, (err, docs) => {
                      if (err) console.log(err);
                      if (docs) {
                        conn.query(query2, (err1, docs1) => {
                          if (err1) console.log(err1);
                          if (docs1 != '') {
                            socketApi.io.to((docs1[0].room_name ? docs1[0].room_name : 'الغرفة العامة رقم 1')).emit("msgback",
                              {
                                idsocket: socket.id,
                                text: text, 
                                name: getNameByid(socket.id),
                                id: Math.floor(Math.random() * 1000000000000000),
                                imgs: (docs[0].img ? docs[0].img : res.redirect('/')),
                                namecolor: docs[0].nameColor,
                                fontbg: docs[0].nameBC,
                                fontcolor: docs[0].fontColor,
                                nikename: docs[0].nikname
                              }
                            )
                          } else {
                            socketApi.io.to(socket.id).emit('socketInternetProblemsUnind', '')
                          }
                        })
                      }
                    }); */
        }
      });

      socket.on('updatePersonalImg', (img) => {
        var query = `update person set img = '${img}' where user_name = '${getNameByid(socket.id)}'`;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          if (docs) {
            var query1 = `update onlinetable set img = '${img}' where name = '${getNameByid(socket.id)}'`;
            conn.query(query1, (err, docs1) => {
              if (err) console.log(err);
              if (docs1) {
                var queryexi = `update exitero set img = '${img}' where user_name = '${getNameByid(socket.id)}'`;
                conn.query(queryexi, (err, docs) => {
                  if (err) console.log(err);
                  if (docs) {
                    socketApi.io.emit('changeImgB', { id: socket.id, name: img })
                  }
                })
              }
            })
            console.log(docs);
          }
        })
      })

      /*  socket.on('updateStatscolor', () => {
         var query1 = `update onlinetable set statscolor = "green" ,Statstime = 0  where name = "${getNameByid(socket.id)}" and statscolor != "red" `;
         conn.query(query1, (err, docs) => {
           if (err) console.log(err);
         })
         var query1prime = `update exitero set statscolor = "green" , Statstime = 0   where user_name = "${getNameByid(socket.id)}" and  statscolor != "red" `;
         conn.query(query1prime, (err, docs) => {
           console.log(err);
           socketApi.io.emit("updateCard1")
         })
       }) */

      socket.on('getHanitComment', (id) => {
        var query = 'select * from mag_hanit_feedback where msg_id =' + id;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          if (docs) {
            var query2 = `select * from hanitmsg where msg_id = ${id}`;
            conn.query(query2, (err, docs1) => {
              if (err) console.log(err);
              if (docs1) {
                /*   var query1 = `update onlinetable set statscolor = "green" ,Statstime = 0  where name = "${getNameByid(socket.id)}" and statscolor != "red" `;
                  conn.query(query1, (err, docs) => {
                    if (err) console.log(err);
                  })
                  var query1prime = `update exitero set statscolor = "green" , Statstime = 0   where user_name = "${getNameByid(socket.id)}" and statscolor != "red" `;
                  conn.query(query1prime, (err, docs) => {
                    console.log(err);
                    socketApi.io.emit("updateCard1")
                  }) */
                console.log(docs);
                socket.emit('reComment', { docs, docs1 })
              }
            })
          }
        });
      });

      socket.on('addComment', ({ val, id }) => {
        var qu = `select * from onlinetable where name = '${getNameByid(socket.id)}'`;
        conn.query(qu, (err1, docs1) => {
          if (err1) console.log(err1);
          var query = `insert into mag_hanit_feedback(msg_id , comment  , name , likes , img ) 
          values(${id} , '${val}' , '${getNameByid(socket.id)}' , 0 , '${docs1[0].img}')`;
          conn.query(query, (err, docs) => {
            if (err) console.log(err);
            if (docs) {
              var qq = `select count(msg_id) as len , name as name from mag_hanit_feedback where msg_id = ${id} GROUP by msg_id`;
              conn.query(qq, (erq, docsq) => {
                if (erq) console.log(erq);
                if (docsq) {
                  var length;
                  if (docsq.length == 0)
                    length = 0
                  else
                    length = docsq[0].len;
                  var update = `update hanitmsg set comments = ${length} where msg_id = ${id}`;
                  conn.query(update, (erru, docsu) => {
                    if (erru) console.log(erru);
                    if (docsu) {
                      socketApi.io.emit("updateComments", { id, length });
                    }
                  })
                }
              })
            }
          });
        })
      });

      socket.on('getIdUsers', () => {
        socketApi.io.emit('backIdusers', socket.id)
      })

      socket.on('deleteCooment', (id) => {
        var query = `delete from mag_hanit_feedback where feed_back_id = ${id}`;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          if (docs) {

          }
        });
      });

      socket.on('getNotifactionahnit', () => {
        socket.emit('notifayHnait',)
      })

      socket.on('addLikesRep', (id) => {
        var query = `update mag_hanit_feedback set likes = likes+1 where feed_back_id = ${id}`;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          if (docs) {

          }
        });
      });

      socket.on('addHanitLikes', (id) => {
        var query = `update hanitmsg set likes = likes+1 where msg_id = ${id}`;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          if (docs) {
            var query1 = `select likes from hanitmsg where msg_id = ${id}`;
            conn.query(query1, (err, docs1) => {
              socketApi.io.emit("updateHanitLike", { likes: docs1[0].likes, id: id })
            })
          }
        });
      })


      /* socket.on('updateHanit', () => {
        var query = `select * from hanitmsg order by time asc limit 30`;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          if (docs) {
            socketApi.io.to(socket.id).emit('back-hanit-msg', { docs })
          }
        })
      }); */



      socket.on('getliks', (id) => {
        var query = `select * from mag_hanit_feedback where msg_id = ${id}`;
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          if (docs) {
            if (docs.length > 0) {
              console.log(docs);
              socketApi.io.emit('backlike', { like: docs[0].likes });
            }
          }
        });
      })

      socket.on('changeStats', (color) => {
        socketApi.io.emit('changeStats', { id: socket.id, color })
      })
      socket.on('changeStatsRed', (color) => {
        socketApi.io.emit('changeStatsRed', { id: socket.id, color })
      })

      socket.on("join", ({ name }) => {
        conn.query('select count(*) as length from room', (err, docs) => {
          if (err) console.log(err);
          else
            socketApi.io.to(socket.id).emit('roomLength', docs[0].length)
        })
        socket.join("الغرفة العامة رقم 1");
        socket.emit('generateIcons')
        newone = true;
        req.session.name = name;
        insertIntoRoom(socket.id, 'الغرفة العامة رقم 1');
        var allow = false;
        conn.query(`select * from person where user_name = '${name}'`, (err, docs) => {
          if (err) console.log(err);
          if (docs != "") {
            if (docs.length == 1) {
              if (docs[0].classment == 'admin') {
                allow = true;
                const token = jwt.sign(
                  { socket_id: socket.id, name: name },
                  "SimoJanati@674992%^&*$@$%^&*-eergMohpaey8girmf34guGSJvuVCVVVhshqieuh",
                  {
                    expiresIn: "5h",
                  }
                );

                storeinBrowser.set('token', token)
              }
            }
          }
        });

        socket.on('vToken', () => {
          if (allow) {
            socketApi.io.to(socket.id).emit('sendToken', storeinBrowser.get('token'));
          }
        })

        socket.on('confirmeCall', ({ id, div }) => {
          var query = `select * from onlinetable where user_id = '${id}'`;
          conn.query(query, (err, docs) => {
            if (err) console.log(err);
            if (docs) {
              socketApi.io.to(id).emit("confirmeCall", div);
              socketApi.io.to(socket.id).emit("confirmeCallUser", { name: docs[0].name, img: docs[0].img });
            }
          })
        })

        socket.on('deleteCall', (id) => {
          console.log("delllllllllllllllll");
          var deletea = `delete from chat where type = 'call' and source = '${socket.id}' or dis = '${socket.id}'`;
          conn.query(deletea, (err, docs) => {
            // send update users
            console.log(err);
            if (docs) {
              socketApi.io.to(id).emit('UpdateCallStats', '');
            }
          })
        })

        socket.on('makeCall', ({ id, name, img, div }) => {
          var query = `select * from onlinetable where user_id = '${id}'`;
          conn.query(query, (err, docs) => {
            if (err) console.log(err);
            if (docs) {
              var query2 = `insert into chat(user1 , user2 , source , dis, msg , timen , img , type) values(
                '${getNameByid(socket.id)}' , '${name}' , '${socket.id}' , '${id}' , '${div}' , 0 , '${img}' , 'call'
              ) `;
              conn.query(query2, (err2, docs2) => {
                console.log(err2);
                if (docs2) {
                  socketApi.io.to([id]).emit("reponsePmsg",
                    ({
                      text: 'إتصال',
                      name: getNameByid(socket.id),
                      source: socket.id,
                      dist: id,
                      img: img
                    })
                  );
                  socketApi.io.to([id, socket.id]).emit('updateCalling', true)
                  socketApi.io.to(socket.id).emit('makeCall', { img: docs[0].img, name: docs[0].name });
                }
              })
            }
          })
        });

        socket.on('removeVoice', ({ n, room }) => {
          var query = `delete from voice where user_id = '${getNameByid(socket.id)}'`;
          conn.query(query, (err, docs) => {
            if (err) console.log(err);
            if (docs != "") {
              // send back the update by number 
              socketApi.io.to(room).emit("updateByNVoice", n)
            }
          })
        });

        socket.on("voiceIntenr", function ({ data, room }) {
          var newData = data.split(";");
          newData[0] = "data:audio/ogg;";
          newData = newData[0] + newData[1];
          socket.broadcast.to(room).emit("send", newData);
        });

        socket.on("voiceClient", function ({ data, room }) {
          var newData = data.split(";");
          newData[0] = "data:audio/ogg;";
          newData = newData[0] + newData[1];
          socket.broadcast.to(room).emit("sendClient", newData);
        });

        socket.on('reDirecttoClent' , t=>{
          console.log(t);
        });

        socket.on('getChatLine', (room) => {
          var querysro = `select * from voice where room = '${room}' order by channel asc`;
          conn.query(querysro, (err, docs) => {
            if (err) console.log(err);
            if (docs) {
              console.log(docs);
              socketApi.io.to(room).emit('updateVoiceLine', docs);
            }
          });
        })
        socket.on('insertiNewVoice', ({ query, roomname }) => {
          conn.query(query, (err, docs) => {
            // update the voice line
            if (err) console.log(err);
            if (docs) {
              console.log("console is" + roomname);
              var querys = `select * from voice where room = '${roomname}' order by channel asc`;
              conn.query(querys, (err, docss) => {
                if (err) console.log(err);
                if (docss) {
                  socketApi.io.to(roomname).emit('updateVoiceLine', docss);
                }
              });
            }
          });
        });

        /*  var querygreen = `update onlinetable set statscolor = "green" where name =  '${name}' `;
         conn.query(querygreen)
         socketApi.io.emit("updateCard1")
 
         var query1prime = `update exitero set statscolor = "green" where user_name = "${getNameByid(socket.id)}" and statscolor != "red" `;
         conn.query(query1prime, (err, docs) => {
           console.log(err);
         }) */

        socket.on('getAllIcons', () => {
          fs.readdir('./public/emojey', (err, icons) => {
            socketApi.io.to(socket.id).emit('sendBackIcons', icons)
          });
        });

        socket.on("joinBrow", () => {
          var queronlinetablec = 'select * from onlinetable';
          conn.query(queronlinetablec, (err, docs) => {
            if (err) console.log(err);
            if (docs) {
            }
          })
        })

        var queryper = `select * from person where user_name = '${name}'`;
        conn.query(queryper, (err, docs1) => {
          if (err) console.log(err);
          if (docs1) {
            var addroom = `insert into exitero values('${getNameByid(socket.id)}' , 'الغرفة العامة رقم 1' , '${socket.id}' , '${docs1[0].country}' , '${docs1[0].nameColor}' , '${docs1[0].nameBC}' , '${docs1[0].img}' , 'عضو جديد' ,  '${docs1[0].nikname}' ,'green' , 0 )`;
            conn.query(addroom, (err, docs) => {
              if (err) console.log(err);
            });
          }
        })

        var query1 = `update room set length = length + 1 where room_name = 'الغرفة العامة رقم 1'`;
        conn.query(query1, (err, docs) => {
          if (err) console.log(err);
          else if (docs) {
            console.log("add length by 1");
            var query7 = "select * from room order by length desc";
            conn.query(query7, (err, docs) => {
              if (err) console.log(err);
              else if (docs) {
                socketApi.io.to(socket.id).emit("rooms", ({ docs: docs }))
              }
            })
          }
        })



        socket.on("hanitfile", ({ text }) => {
          var randomInt = Math.floor(Math.random() * 419280)
          var text1 = text.split('.');
          var result = ''
          if (text1[1] == "mp4") {
            result = ` <video width="220"  controls>
            <source src="/upload/${text}" type="video/mp4">
          </video> 
          `
          } else {
            result = `<div style="background-color: black; width: 160px;text-align: center;height: 110px;"><img style="width: 129px;
            height: 110px;
            object-fit: contain;" src="/upload/${text}"></div>`
          }
          var querys = `select * from onlinetable where name = '${getNameByid(socket.id)}'`;
          conn.query(querys, (err, docs) => {
            if (err) console.log(err);
            var query = `insert into hanitmsg values(${randomInt},'${result}', '${getNameByid(socket.id)}' ,0 , 0 , '${docs[0].img}', 0)`
            conn.query(query, (err, docs0) => {
              if (err) console.log(err);
              if (docs0) {
                socketApi.io.emit('sendHaniFiletViaBrowser', {
                  name: getNameByid(socket.id),
                  msg: result, socket: socket.id, msg_id: randomInt, img: docs[0].img
                })
              }
            })
          })
          var queryson = `select * from person where user_name = '${getNameByid(socket.id)}'`;
          conn.query(queryson, (err, docso) => {
            if (err) console.log(err);
            if (docso) {
              socketApi.io.emit("hanitFileBack", { text: text, name: getNameByid(socket.id), socket: socket.id, img: docso[0].img })
            }
          })
        });


        var querys = `select * from person where user_name = '${name}'`;
        conn.query(querys, (err, docss) => {
          if (err) console.log(err);
          if (docss) {
            console.log("ss join rooooooooom" + docss);
            socketApi.io.emit('leaveRoom', { msg: ' الغرفة العامة رقم 1', name: name, id: Math.floor(Math.random() * 6000), socket: socket.id, img: docss[0].img });
          }
        });

        setTimeout(() => {
          socketApi.io.to(socket.id).emit('welcomeMsg', { msg: 'مرحبا بزوارنا الكرام في شات بنونة قلبي', rand: (Math.floor(Math.random() * 6000)) });
        }, 1000);
        setTimeout(() => {
          socketApi.io.to(socket.id).emit('welcomeMsg', { msg: 'زوٍإْرنـَا الكرٍإْم إْهلا وسهلا‘ بكمٌ في شـات [ رونزا_ شات بنوته تايم ] ، نتمنا‘ لكمٌ قضا‘ء اجمل الاوٍقا‘ت معنا‘ ـا‘لا‘دإْرٍه', rand: ((Math.floor(Math.random() * 6000))) });
        }, 2000);
        setTimeout(() => {
          socketApi.io.to(socket.id).emit('welcomeMsg', { msg: 'يمنع ، منعاً باتاً كشف اي معلومات عن الزائر : واعطإءه لـ اي شخص ', rand: (Math.floor(Math.random() * 6000)) });
        }, 3000);
        var querytrack = `
              insert into record(stats , momber 
                , style, ip , national , device , source , invation, time) values(
                'عضو' ,
                 '${name}' , 
                 '${name}' , 
                 '${ip.address()}' , 
                 'MA' ,
                  '${result.os.name}' ,
                  '${result.client.name}' ,
                  'تسجيل الدخول' ,
                  CURRENT_TIMESTAMP
                );
            `;
        conn.query(querytrack, (err, docs) => {
          if (err) console.log(err);
          if (docs) {

          }
        })

        try {
          var addroom = `insert into exitero values('${getNameByid(socket.id)}' , '${roomid}' , '${socket.id}')`;
          /*   conn.query(addroom, (err, docs) => {
              if (err) console.log(err);
            }); */
        } catch (error) {
          console.log("duplcit ", error);
        }

        addNmae(name);
        const query = "update online set number = number+1";
        socketApi.io.to(socket.id).emit('openCard10', '');
        conn.query(query, (err, docs) => {
          if (err) console.log(err);
          else if (docs) {
            /*console.log(`${name} is added`);
              console.log(`length od users is ${getLength()}`); */
            var query1 = "select number from online";
            conn.query(query1, (err, docs) => {
              var getDrapo = `select * from person where user_name = '${getNameByid(socket.id)}'`
              conn.query(getDrapo, (err, drapo) => {
                if (err) console.log(err);
                if (drapo) {
                  console.log("online tbale users infos " + drapo);
                  socketApi.io.emit("users", docs[0].number);
                  var query2 = `
                insert into onlinetable(user_id , divtag , name , time , statscolor , country , counryNN , comm , img , fontcolor , namecolor , namebg , room_name , namkename , stats , notification , Statstime , ip  ) values 
                ( '${socket.id}' ,
                    '<div class="infos-users-oline">
                      <img src="/upload/${drapo[0].img}" alt="" srcset="">
                      <div class="onlinetable-infos-person-we">
                        <p class="nameSow" style="font-wight:600;">${drapo[0].nikname}</p>
                        <p class="boi" >(${(drapo[0].auth ? drapo[0].auth : 'حدث خطأ')})</p></div>
                      </div>
                      <div class="drapo">
                      <img class="drapo-national" src="/flag/${(drapo[0].country ? drapo[0].country : '')}" >
                    </div>'
                  , '${name}',
                  CURRENT_TIMESTAMP,
                  "green",
                  '${(drapo[0].country ? drapo[0].country : '')}',
                  '${drapo[0].counryNN}',
                  'no',
                  '${drapo[0].img}',
                  '${drapo[0].fontColor}',
                  '${drapo[0].nameColor}',
                  '${drapo[0].nameBC}',
                  'الغرفة العامة رقم 1'
                  , '${drapo[0].nikname}',
                  'عضو جديد',
                  'no',
                  0,
                  '${drapo[0].ip}'
                )
              `;
                  try {
                    conn.query(query2, (err, docs) => {
                      var query3 = `select * from onlinetable where user_id = '${socket.id}'`;
                      conn.query(query3, (err3, docs3) => {
                        if (err3) console.log(err3);
                        if (docs3 != "") {
                          console.log("name");
                          var name = getNameByid(socket.id);
                          var query = `select * from person where user_name ='${getNameByid(socket.id)}'`;
                          conn.query(query, (err, docs) => {
                            if (err) console.log(err);
                            if (docs) {
                              console.log();
                              var query1 = `select * from onlinetable where name = '${name}'`;
                              conn.query(query1, (err, docs1) => {
                                socketApi.io.to(socket.id).emit('reName',
                                  {
                                    nike: docs[0].nikname,
                                    comm: (docs1[0].comm ? docs1[0].comm : ''),
                                    name: name,
                                    auth: docs[0].auth,
                                    username: docs[0].user_name,
                                    docs: docs1[0],
                                    docs1: docs
                                  }
                                );
                              });
                            }
                          });

                          console.log("enteeeeeeeeeeeeeeeeeee");
                          socketApi.io.to(socket.id).emit('storeData', {
                            name: docs3[0].name,
                            id: socket.id,
                            nikename: docs3[0].namkename,
                            img: docs3[0].img,
                            bio: docs3[0].stats,
                            countryImg: docs3[0].country,
                            currentRoom: docs3[0].room_name,
                            countryName: docs3[0].counryNN,
                            fontColor: docs3[0].fontcolor,
                            nameColor: docs3[0].namecolor,
                            nameBackground: docs3[0].namebg
                          })
                        }
                      })
                      if (err) {
                        console.log(err);
                        if (docs) {
                        }
                      }
                      else if (docs) {
                        var query3 = "select divtag from onlinetable order by time desc";
                        conn.query(query3, (err, docs1) => {
                          if (err) console.log(err);
                          else if (docs1) {
                            var query = `select statscolor from onlinetable where name ='${getNameByid(socket.id)}'`;
                            conn.query(query, (err, docs) => {
                              if (err) console.log(err);
                              if (docs) {
                                var updateonlinetable = `select * from onlinetable where user_id = '${socket.id}' `;
                                conn.query(updateonlinetable, (err, docs) => {
                                  if (err) console.log(err);
                                  if (docs != "") {
                                    console.log("neeeeeeeeeeeeeeeeeeeeeeeeeeeeew");
                                    socketApi.io.emit('openCard11', docs)
                                  }
                                })
                                socketApi.io.emit("adduser", ({ docs: docs1, id: socket.id, sendMsgTime: docs[0].statscolor }));
                              }
                            })
                          }
                        });
                      }
                    })
                  } catch (error) {
                    console.log("erro");
                  }
                }
              })
            })
          }





          socket.on('disconnect', () => {
            storeinBrowser.clear();
            var query1 = `select * from onlinetable where name = '${getNameByid(socket.id)}'`;
            conn.query(query1, (err, docs) => {
              if (err) console.log(err);
              if (docs) {
                socket.leave(docs[0].room_name)
                socketApi.io.emit('leaveRoomIt', { msg: getRoom(), name: docs[0].name, socket: socket.id, img: docs[0].img });
              }
            });

            var queryVoice = `delete from voice where user_id = '${getNameByid(socket.id)}'`;
            conn.query(queryVoice, (err, docs) => {
              if (err) console.log(err);
              if (docs) {
                var queryro = 'select * from voice order by channel asc';
                conn.query(queryro, (errRo, docsRo) => {
                  if (errRo) console.log(errRo);
                  if (docsRo) {
                    var queryroom = `select * from onlinetable where name ='${getNameByid(socket.id)}'`;
                    conn.query(queryroom, (errssv, docsv) => {
                      if (errssv) console.log(errssv);
                      if (docsv) {
                        var query1primes = `select * from onlinetable where user_id = '${socket.id}'`;
                        conn.query(query1primes, (errroo, docsrooo) => {
                          if (errroo) console.log(errroo);
                          if (docsrooo)
                            var rom = docsrooo[0].room_name
                          setTimeout(() => {
                            socketApi.io.to(rom).emit('updateVoiceLine', docsRo);
                          }, 0)
                        })
                      }
                    })
                  }
                })
              }
            });

            var querysros = `select * from voice order by channel asc`;
            conn.query(querysros, (err, docs) => {
              if (err) console.log(err);
              if (docs) {
                var queryroom = `select * from onlinetable where name ='${getNameByid(socket.id)}'`;
                conn.query(queryroom, (errss, docssss) => {
                  if (errss) console.log(errss);
                  if (docssss) {
                    var query1primes = `select * from onlinetable where user_id = '${socket.id}'`;
                    conn.query(query1primes, (errroo, docsrooo) => {
                      if (docsrooo)
                        var rom = docsrooo[0].room_name
                      socketApi.io.to(rom).emit('updateVoiceLine', docs);
                    })
                  }
                })
              }
            });

            if (userRemove[0]) {
              var query = `delete from person where user_name = '${getNameByid(socket.id)}'`;
              conn.query(query)
            }

            socketApi.io.emit("removeCard", socket.id)

            var qu = `select * from onlinetable where name = '${getNameByid(socket.id)}'`;
            conn.query(qu, (err1, docs1) => {
              if (err1) console.log(err1);
              if (docs1) {
                var query10 = `update room set length = length -1 where room_name = '${docs1[0].room_name}'`;
                conn.query(query10, (err, docs) => {
                  if (err) console.log(err);
                  else if (docs) {
                    console.log(docs);
                    console.log("add length by 1");
                  }
                })
              }
            })

            var query = `delete from chat where source = '${socket.id}' or dis = '${socket.id}'`;
            conn.query(query)
            console.log(name);
            var querytrack = `
              insert into record(stats , momber 
                , style, ip , national , device , source , invation, time) values(
                'عضو' ,
                 '${name}' , 
                 '${name}' , 
                 '${ip.address()}' , 
                 'MA' ,
                  '${result.os.name}' ,
                  '${result.client.name}' ,
                  'تسجيل الخروج' ,
                  CURRENT_TIMESTAMP
                );
            `;
            try {
              var deletefromexiteRoom = `delete from exitero where user_name = '${name}'`;
              conn.query(deletefromexiteRoom, (err, docs) => {
                if (err) console.log(err);
                if (docs) {
                  console.log(docs);
                }
              })
            } catch (error) {

            }
            conn.query(querytrack, (err, docs) => {
              if (err) console.log(err);
              if (docs) {

              }
            });

            // socketApi.io.emit("users", getLength());
            // socketApi.io.emit("disconnected", { id: socket.id });
            console.log("dicon");
            var query5 = "update online set number = number - 1";
            var query6 = `delete from onlinetable where user_id = '${socket.id}'`;
            if (getUser(socket.id)) {
              removeUser(socket.id);
              var queryx = `insert into record values(
      
              )`;
              console.log("done stats");
              conn.query(query5, (er, docs) => {
                if (docs) {
                  console.log("done 1");
                  // 
                  setTimeout(() => {
                    conn.query(query6, (err, docs) => {
                      if (err) console.log(err);
                      if (docs) {
                        // console.log("done 2");
                        // update state 
                        var querys = 'select count(*) as length from onlinetable';
                        conn.query(querys, (err, docs) => {
                          if (docs) {
                            conn.query(`update online set number = ${docs[0].length}`);
                          }
                        })
                        var query4 = "select * from onlinetable order by time desc";
                        conn.query(query4, (err, docs1) => {
                          socketApi.io.to(socket.id).emit("adduser", ({ docs: docs1, id: socket.id }));
                          if (err) console.log(err);
                          else if (docs1) {
                            socketApi.io.to(socket.id).emit("adduser", ({ docs: docs1, id: socket.id }));
                          }
                        });
                        var updateonlinetable = 'select * from onlinetable';
                        conn.query(updateonlinetable, (err, docs) => {
                          if (docs) {
                            // socketApi.io.emit('openCard11', '')
                          }
                        })
                        var query1 = "select number from online";
                        conn.query(query1, (err, docs) => {
                          socketApi.io.emit("users", docs[0].number);
                        })
                        // end update state
                      }
                    })
                  }, 1500)
                  //
                }
              })
            }
          })
        }); addUser(socket.id, name);
      })
    }
  })

});

// jwt token 

router.get('/ids', function (req, res) {
  var queryselecttrack = "select * from record limit 50";
  conn.query(queryselecttrack, (err, docs) => {
    if (docs) {
      var querystats = "select * from stats order by user_id desc";
      conn.query(querystats, (err1, docs1) => {
        var queryper = "select * from person order by user_id desc";
        conn.query(queryper, (err, docs2) => {
          if (docs2) {
            var queryword = "select * from world order by user_id desc LIMIT 10";
            var queryworldall = "select * from world";
            conn.query(queryword, (err, docs3) => {
              if (err) console.log(err);
              if (docs) {
                conn.query(queryworldall, (err, docs4) => {
                  if (err) console.log(err);
                  if (docs4) {
                    var queryroom = "select * from room";
                    conn.query(queryroom, (err, docs5) => {
                      if (err) console.log(err);
                      if (docs5) {
                        var queryShort = "select * from shorts";
                        conn.query(queryShort, (err, short) => {
                          if (err) console.log(err);
                          else if (short) {
                            var queryMessages = "select * from messages";
                            conn.query(queryMessages, (err, messages) => {
                              if (err) console.log(err);
                              else if (messages) {
                                if (err) console.log(err);
                                var querySelectClasement = `select * from clasment`
                                conn.query(querySelectClasement, (err, clasement) => {
                                  if (err) console.log(err);
                                  if (clasement) {
                                    var bootQuery = 'select * from boot';
                                    conn.query(bootQuery, (err, boot) => {
                                      if (err) console.log(err);
                                      if (boot) {
                                        res.render('./control.ejs', {
                                          users: docs,
                                          stats: docs1,
                                          person: docs2,
                                          world: docs3,
                                          allword: docs4,
                                          room: docs5,
                                          short: short,
                                          messages: messages,
                                          clasement: clasement,
                                          boot: boot
                                        });
                                      }
                                    })
                                  }
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            })
          }
        })
      })
    }
  });
});


module.exports = router
