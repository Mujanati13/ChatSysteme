var express = require('express');
var router = express.Router();
var { conn } = require('../utils/db')
var { storeUsernameFun, getStoreUser, getUserStyle, addusersStyle } = require('../utils/users')
var { insertIntoUser, select } = require('../utils/query/insert_function');
var ip = require('ip'); // id.address
const DeviceDetector = require('node-device-detector');
const { route } = require('.');
var visitorInfo = require('visitor-info')
var storeinBrowser = require('local-storage');



const detector = new DeviceDetector({
  clientIndexes: true,
  deviceIndexes: true,
  deviceAliasCode: false,
});

const userAgent = 'Mozilla/5.0 (Linux; Android 5.0; NX505J Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36';
const result = detector.detect(userAgent);
const date = new Date();

var Address6 = require('ip-address').Address6;
var address = new Address6('2001:0:ce49:7601:e866:efff:62c3:fffe');
var teredo = address.inspectTeredo();


/* GET users listing. */
router.get('/create', function (req, res, next) {
  var code = req.headers['x-forwarded-for']?.split(',').shift()
    || req.socket?.remoteAddress
  var { username, password, code, counryNN, ip } = req.query;
  storeUsernameFun(username);
  req.session.userId = username;
  console.log(counryNN);
  var query = `insert into person(user_name , user_gmail , user_password ,
  user_join_date, ip , device , likes , lastseen , auth , img , nikname , country , counryNN , nameColor , nameBC , fontColor)
  values(
    '${username}' , 
    '${username}@gmail.com' ,
    '${password}' ,
    '${date.getFullYear()}/${date.getMonth()}/${date.getDay()}',
    '${ip}' ,
    '${result.os.name}' ,
     0 , 
    '${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}',
    'عضو جديد',
    'favicon.ico',
    '${username}',
    '${code}.png',
    '${counryNN}',
    '#000000 ',
    '#ffffff ',
    '#000000 '
  );
  `;
  conn.query(query, (err, docs) => {
    if (err) {
      res.json({
        msg: "error"
      })
    }
    else if (docs) {
      req.session.auth = true;
      req.session.username = username;
      var queryuser = `select * from person where user_name = '${username}'`
      conn.query(`select * from person where user_name = + '${username}'`, (err, docs) => {
        if (err) console.log(err);
        else if (docs) {
          /* req.session.auth = docs[0].user_id;
          console.log(docs[0].user_id); */
        }
      })
      res.json(
        {
          msg: req.ip,
        }
      )
    }
  })
});

router.get('/join', function (req, res, next) {
  var { username, password, code } = req.query;
  console.log("code " + code);
  storeUsernameFun(username);
  req.session.userId = username;
  var query = `insert into person(user_name , user_gmail , user_password ,
  user_join_date, ip , device , likes , lastseen , auth , nikname , country)
  values(
    '${username}' , 
    '${username}@gmail.com' ,
    '${password}' ,
    '${date.getFullYear()}/${date.getMonth()}/${date.getDay()}',
    '${ip.address()}' ,
    '${result.os.name}' ,
     0 , 
    '${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}',
    'غير مسجل',
    '${username}',
    '${code}.png'
  );
  `;
  conn.query(query, (err, docs) => {
    if (err) {
      res.json({
        msg: "error"
      })
    }
    else if (docs) {
      req.session.auth = true;
      req.session.username = username;
      var queryuser = `select * from person where user_name = '${username}'`
      conn.query(`select * from person where user_name = + '${username}'`, (err, docs) => {
        if (err) console.log(err);
        else if (docs) {
          /* req.session.auth = docs[0].user_id;
          console.log(docs[0].user_id); */
        }
      })
      res.json(
        {
          msg: "تمت العملية بنجاح"
        }
      )
    }
  })
});

router.get('/login', (req, res) => {
  console.log("start");
  var { username, password } = req.query
  var query1 = `select * from person where user_name = '${username}'`;
  conn.query(query1, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      console.log(docs.length);
      if (docs.length == 0) {
        res.json(
          {
            msg: "error1"
          }
        )
      }
      else if (docs.length == 1) {
        var query2 = `select * from person where user_name = '${username}' and user_password
  = '${password}'`;
        conn.query(query2, (err, docs1) => {
          if (err) console.log(err);
          if (docs1.length == 1) {
            var query = `select * from onlinetable where name = '${username}' `;
            conn.query(query, (err, docs0) => {
              if (err) console.log(err);
              if (docs0.length == 0) {
                res.json(
                  {
                    msg: "suc"
                  }
                )
              } else if (docs0.length == 1) {
                res.json({
                  msg: docs0[0].user_id
                });
              }
            })
          } else {
            res.json(
              {
                msg: "error2"
              }
            )
          }
        })
      }
    }
  })
});

router.get('/join', function (req, res, next) {
  if (res) {
    res.json({
      msg: 'تم التسجيل بنجاح'
    })
  }
});


router.get('/createRoom', (req, res) => {
  var { roomn, roomc } = req.query
  var query = `insert into room(room_id , room_name , room_capacity) values(
    '${roomn}' , '${roomn}' , ${roomc})`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    else if (docs) {
      res.json(
        { msg: "تم انشاء الغرفة بنجاح" }
      )
    }
  })
})

router.get('/createRoom2', (req, res) => {
  var { rtopic, rabout, rwelcome,
    rlike, rpwd, rmax, rdel,
    broadcast, img } = req.query;
  var query = `insert into room(room_name , room_capacity , description , welcomemsg,
      password , resLike ,  voiceLike , img , length) values(
        '${rtopic}','${rmax}','${rabout}','${rmax}','${rwelcome}','${rpwd}',
        '${rlike}' , '${img}' , 0
      )`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      res.json(
        { msg: 'تم أنشاء الغرفة بنجاح' }
      )
    }
  })
})


router.get('/search0', (req, res) => {
  var json = storeinBrowser.get('token');
  console.log("searche");
  var { id } = req.query
  var query = `select * from record where momber= '${id}' limit 5`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      conn.query(`select * from onlinetable where name = '${id}'`, (err1, docs1) => {
        if (err1) console.log(err1);
        if (docs1 != "") {
          const query1 = `
          insert into stats(stats , momber , secondmomber , room, ip, time)
          values(
            'بحث عميق رقم 0',
            '${docs1[0].json.name}',
            '${docs1[0].stats}',
            '${docs1[0].json.name}',
            '${docs1[0].ip}',
            'CURRENT_TIME'
          )
          `;
          conn.query(query1, (err, docs) => {
            if (err) console.log(err);
            if (docs) console.log("register sus");
          })
          res.json(
            {
              docs: docs
            }
          )
        }
      })
    }
  })
})


router.get('/search1', (req, res) => {
  console.log("search11");
  var { id } = req.query
  console.log(id);
  var query = `select * from record where momber = '${id}' limit 10`;
  conn.query(query, (err, docs) => {
    if (docs != "") {
      conn.query(`select * from onlinetable where name = '${id}'`, (err1, docs1) => {
        if (err1) console.log(err1);
        if (docs1) {
          const query1 = `
          insert into stats(stats , momber , secondmomber , room, ip, time)
          values(
            'بحث عميق رقم 1',
            '${docs1[0].name}',
            '${docs1[0].stats}',
            '${docs1[0].room_name}',
            '${docs1[0].ip}',
            'CURRENT_TIME'
          )
          `;
          conn.query(query1, (err, docs) => {
            if (err) console.log(err);
            if (docs) console.log("register sus");
          })
          res.json(
            {
              docs: docs
            }
          )
        }
      })
    } else if (err) console.log(err);
  })
})


router.get('/search3', (req, res) => {
  console.log("search11");
  var { id } = req.query
  console.log(id);
  var query = `select * from record where ip = '${id}' limit 20`;
  conn.query(query, (err, docs) => {
    if (docs) {
      conn.query(`select * from onlinetable where ip = '${id}'`, (err1, docs1) => {
        if (err1) console.log(err1);
        if (docs1 != "") {
          const query1 = `
          insert into stats(stats , momber , secondmomber , room, ip, time)
          values(
            'بحث عميق رقم 0',
            '${docs1[0].name}',
            '${docs1[0].stats}',
            '${docs1[0].room_name}',
            '${docs1[0].ip}',
            'CURRENT_TIME'
          )
          `;
          conn.query(query1, (err, docs) => {
            if (err) console.log(err);
            if (docs) console.log("register sus");
          })
          res.json(
            {
              docs: docs
            }
          )
        }
      })
    } else if (err) console.log(err);
  })
})

/* router.get('/searchp0', (req, res) => {
  console.log("search01");
  var { id } = req.query
  console.log(id);
  var query = `select * from person where user_id = '${id}'`;
  conn.query(query, (err, docs1) => {
    if (err) console.log(err);
    if (docs1) {
      const query1 = `
      insert into stats(stats , momber , secondmomber , room, ip, time)
      values(
        'بحث عميق رقم 0',
        '${docs1[0].user_name}',
        'الوصف',
        'الغرفة',
        '${docs1[0].ip}',
        '00-00-00'
      )
      `
      conn.query(query1, (err, docs) => {
        if (err) console.log(err);
        if (docs) console.log("register sus");
      })
      res.json(
        {
          docs: docs1
        }
      )
    }
  })
}); */


router.get('/likes', (req, res) => {
  var { like, id } = req.query;
  var query = `update person set likes = ${like} where user_id = ${id}`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    else if (docs) {
      var query = "select * from person where user_id=" + id;
      conn.query(query, (err, docs) => {
        if (docs) {
          const query1 = `
        insert into stats(stats , momber , secondmomber , room, ip, time)
        values(
          ' زيادة اللايكات',
          '${docs[0].user_name}',
          'الوصف',
          'الغرفة',
          '${docs[0].ip}',
          '00-00-00'
        )
        `
          conn.query(query1, (err, docs) => {
            if (err) console.log(err);
            if (docs) console.log("register sus");
          })
        }
      })

      res.json(
        {
          docs: "تمت العملية بنجاح"
        }
      )
    }
  })
})

router.get('/password', (req, res) => {
  var { password, id } = req.query;
  var query = `update person set user_password = '${password}' where user_id = ${id}`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    else if (docs) {
      var query = "select * from person where user_id=" + id;
      conn.query(query, (err, docs) => {
        if (docs) {
          const query1 = `
        insert into stats(stats , momber , secondmomber , room, ip, time)
        values(
          ' تغيير كلمة المرور',
          '${docs[0].user_name}',
          'الوصف',
          'الغرفة',
          '${docs[0].ip}',
          '00-00-00'
        )
        `
          conn.query(query1, (err, docs) => {
            if (err) console.log(err);
            if (docs) console.log("register sus");
          })
        }
      })
      res.json(
        {
          docs: "تمت العملية بنجاح"
        }
      )
    }
  })
})

router.get('/allow', (req, res) => {
  var { ip } = req.query;
  var query0 = `delete from block where blocklist = '${ip}' `
  conn.query(query0, (err, docs0) => {
    if (docs0) {
      var query1 = `select * from person where ip = '${ip}' `;
      conn.query(query1, (err, docs1) => {
        if (err) console.log(err);
        if (docs1) {
          console.log(docs1);
          const query2 = `
          insert into stats(stats , momber , secondmomber , room, ip, time)
          values(
            'إلغاء الحظر',
            '${ip}',
            'الوصف',
            'الغرفة',
            '${ip}',
            '00-00-00'
          )
          `
          conn.query(query2, (err, docs) => {
            if (err) console.log(err);
            if (docs) console.log("register sus");
          })
        }
      })
      res.json(
        {
          msg: 'ses'
        }
      )
    }
  });
})

router.get('/block', (req, res) => {
  var { ip } = req.query;
  var query0 = `insert into block(blocklist) values('${ip}')`;
  conn.query(query0, (err, docs0) => {
    if (docs0) {
      const query2 = `
        insert into stats(stats , momber , secondmomber , room, ip, time)
        values(
          'حظر',
          '${ip}',
          'الوصف',
          'الغرفة',
          '${ip}',
          current_date()
        )
        `
      conn.query(query2, (err, docs) => {
        if (err) console.log(err);
        if (docs) console.log("register sus");
      })

      res.json(
        {
          msg: 'تم عملية حضر'
        }
      )
    }
  });
})

router.get('/addword', (req, res) => {
  console.log("wwwwwwwwwww");
  var { per, word } = req.query;
  var query = `insert into world(user_name , ip , type , word) values
  ('user' , '${ip.address()}' , '${per}' , '${word}')`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      res.json(
        {
          msg: 'تم الاضافة بنجاح'
        }
      )
    }
  });


})


router.get('/deleteWord', (req, res) => {
  console.log("Sfsdfsd");
  var { id } = req.query;
  var query = `delete from world where user_id = ${id}`;
  conn.query(query, (err, docs) => {
    if (docs) {
      res.json(
        {
          msg: 'تم الحدف بنجاح'
        }
      )
    }
  })
});

router.get('/showroom', (req, res) => {
  var { id } = req.query;
  var query = `select * from room where room_id = '${id}'`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      console.log(docs);
      res.json(
        { docs: docs }
      )
    }
  })
});

router.get('/updateroom', (req, res) => {
  var { title, desc, welcomemsg, pws, capacity, reslike, likevoice, voice, id } = req.query;
  var query = `update room set room_name = '${title}' , room_capacity = ${capacity} , 
  description='${desc}' , welcomemsg='${welcomemsg}' , password = '${pws}' , resLike ='${reslike}'
  , voiceLike = '${likevoice}' , voice = '${voice}' where room_id = '${id}'`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      res.json(
        {
          msg: "تمت العملية بنجاح"
        }
      )
    }
  })
})



const multer = require('multer');
const { json } = require('express');
const socketApi = require('../socketAPI/socketAPI');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/upload')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
var upload = multer({
  storage: storage
});

router.post('/imgupload', upload.single("file"), (req, res) => {
  if (req.file) {
    return res.status(200).json({ msg: 'done' });
  }
});

router.post('/imgupload2', upload.single("file"), (req, res) => {
  if (req.file) {
    return res.status(200).json({ msg: 'done' });
  }
})

router.post('/imgupload3', upload.single("file"), (req, res) => {
  if (req.file) {
    return res.status(200).json({ msg: 'done' });
  }
})

router.post('/imgupload4', upload.single("file"), (req, res) => {
  if (req.file) {
    return res.status(200).json({ msg: 'done' });
  }
})


router.post('/roomimage', upload.single("file"), (req, res) => {
  console.log(req.file.filename);
});

router.get('/removeImage', (req, res) => {
  var { name } = req.query;
  var query = `update person set img = 'favicon.ico' where user_name = '${name}'`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    else if (docs) {
      var query1 = `update onlinetable set img = 'favicon.ico' where name = '${name}'`;
      conn.query(query1, (err1, docs1) => {
        if (err1) console.log(err1);
        if (docs1) {
          res.json(
            { msg: 'تم حدف الصورة بنجاح' }
          )
        }
      })
    }
  });
});


router.get('/logout', (req, res) => {
  res.redirect('/');
});

router.get('/imageRoomStorename', (req, res) => {
  var { name, id } = req.query;
  var query = `update room set img = '${name}' where room_id = '${id}'`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    else if (docs) {
      res.json({
        msg: 'تم عملية تحميل الصورة بنجاح'
      })
    }
  })
})

router.get('/addShort', (req, res) => {
  var { short, short_c } = req.query;
  var query = `insert into shorts(short , short_content) values('${short}' , '${short_c}')`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    else if (docs) {
      res.json(
        {
          msg: 'تم عملية إضافة الاختصار بنجاح'
        }
      )
    }
  });
});

router.get('/removeShort', (req, res) => {
  var { id } = req.query;
  var query = `delete from shorts where short_id = ${id}`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    else if (docs) {
      res.json(
        {
          msg: 'تم عملية الحدف بنجاح'
        }
      )
    }
  });
});

router.get('/messageWA', (req, res) => {
  var { type, msg, title } = req.query;
  var query = `insert into messages(title , msg_content , type) values('${title}','${msg}','${type}')`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    else if (docs) {
      res.json({
        msg: 'تم إضافة المحتوى بنجاح',
      })
    }
  })
});

router.get('/removeMessage', (req, res) => {
  var { id } = req.query;
  var query = "delete from messages where message_id=" + id;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    else if (docs) {
      res.json(
        {
          msg: 'تم عملية الحدف بنجاح',
        }
      )
    }
  });
});


router.get('/postNewClasement', (req, res) => {
  var { clasment, clasment_name, clasment_icons, refus, remove_hanit, notification, change_nik, pand, ads, super_ads,
    room_managment, create_room, room_capacity, momber_edite, edite_powers, gift, find_nikat, control_panel,
    join_closed_room, join_private, like, remove_msg, mombes_moves, take_mic, active_mic, control_website, open_private } = req.query;
  console.log(momber_edite);
  var queryPostPowers = `
      insert into 
      clasment(
        clasment_name , clasment_number,group_name,clasment_icons,refus,remove_hanit,notifaction,change_nike,pand,
        ads,super_ads,open_private,room_menage,create_room,capacity_room_static,momber_setting,edite_powers	,
        gifts,find_nikat,control_panel,close_room,private_join,likes,remove_message,
        momber_moves,left_mic,active_mic,control_website
      ) 
      values(
        '${clasment_name}','${clasment}','${clasment_name}','${clasment_icons}','${refus}','${remove_hanit}','${notification}','${change_nik}',
        '${pand}','${ads}','${super_ads}','${open_private}','${room_managment}','${create_room}','${room_capacity}','${momber_edite}',
        '${edite_powers}','${gift}','${find_nikat}','${control_panel}','${join_closed_room}','${join_private}'
        ,'${like}','${remove_msg}','${mombes_moves}','${take_mic}','${active_mic}','${control_website}'
      );
    `;
  conn.query(queryPostPowers, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      res.json(
        {
          msg: 'تمت الاضافة بنجاح'
        }
      );
    }
  });
})


router.get('/setClasement', (req, res) => {
  var { val } = req.query;
  console.log(val);
  var query = `select * from clasment where clasment_name = '${val}'`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      res.json({
        msg: docs[0]
      })
    }
  })
});


router.get('/removeClsmnet', (req, res) => {
  var { name } = req.query;
  var query = `delete from clasment where clasment_name ='${name}'`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      res.json(
        {
          msg: 'نم حدف بنجاح'
        }
      )
    }
  });
});

router.get('/fidClasmnt', (req, res) => {
  var { name } = req.query;
  var query = `select * from clasment where clasment_name like '%${name}%'`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      res.json({
        msg1: docs[0]
      })
    }
  });
});


router.get('/findRecord', (req, res) => {
  var { username } = req.query;
  var query = `
    select * from record where momber = '${username}';
  `;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      console.log(docs);
      res.json(
        {
          docs: docs[0],
        }
      )
    }
  })
});

router.get('/upclassmnet', (req, res) => {
  var { username } = req.query;
  var query = `
    update person set classment = 'admin1' where user_name = '${username}';
  `
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      res.json(
        {
          msg: ''
        }
      )
    }
  });
});

router.get('/removeImage-admin', (req, res) => {
  var { username } = req.query;
  var query = `update person set img = "" where user_name = '${username}'`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      res.json(
        {
          msg: 'orange'
        }
      )
    }
  })
});

router.get('/updateMore', (req, res) => {
  var { username, name, stats, namecolor, bgc, namebg } = req.query;
  var query = `update person set nikename = '${name}' , auth = '${stats}' , nameColor = '${namecolor}' , nameBc = '${namebg}' , fontColor = '${bgc}'  where user_name = '${username}'`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {

    }
  })

});


router.get('/updateName', (req, res) => {
  var { name, username } = req.query;
  var query = `
    update person set user_name = '${name}' where user_name = '${username}'
  `;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      res.json(
        {
          msg: 'تم تغيير الاسم بنجاح'
        }
      )
    }
  })
});

router.get('/UpdateLikes', (req, res) => {
  var { like, username } = req.query;
  var query = `update person set likes = ${like} where user_name = '${username}'`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      res.json(
        {
          msg: 'تم التحديث اللايكات بنجاح'
        }
      );
    }
  });
});

router.get('/addClasment', (req, res) => {
  var { day, clasment, username } = req.query;
  var query = `update person set classment = '${clasment}' , classment_day = ${day} where user_name = '${username}'`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      res.json(
        {
          msg: 'تم الاضافة بنجاح'
        }
      )
    }
  });
});


router.get('/updateWebsiteControl', (req, res) => {
  var { name, title, desc, keyword, script, ct, iconscolor, automsg, hlikes } = req.query;
  console.log(iconscolor);
  var query = `
  update website_control set name = '${name}' , title = '${title}' , description =  '${desc}' ,
  keyword='${keyword}' , script='${script}', template_color='${ct}' , icons_color='${iconscolor}' ,
  auto_msg=${automsg}, hanit_likes=${hlikes} where id = 0
  `;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      res.json(
        {
          msg: 'orange',
        }
      )
    }
  });
});

router.get('/addBoot', (req, res) => {
  var { stats, country, desc, likes, photo, style } = req.query;
  var query = `insert into boot(stats , country , style ,  descri , likes , photo) 
  value('${stats}','${country}','${desc}','${likes}','${photo}' , '${style}') `;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      res.json(
        {
          msg: 'تم الاضافة بنجاح'
        }
      )
    }
  })
})

router.get('/addBlock', (req, res) => {
  var { username } = req.query;
  console.log(username);
  var query = `select * from person where user_name = '${username}'`;
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      var addblock = `insert into block(blocklist) values('${docs[0].ip}')`;
      conn.query(addblock, (err1, docs1) => {
        if (err1) console.log(err1);
        if (docs1) {
          res.json(
            {
              msg: 'تم الحضر بنجاح'
            }
          )
        }
      });
    }
  });
});


router.post('/serachUser', (req, res) => {
  var { val, length } = req.body
  if (length == 0) {
    console.log("0");
    conn.query(`select * from record limit 50`, (err, docs) => {
      if (err) console.log(err);
      if (docs != "") {
        if (docs.length > 1) {
          res.json(
            {
              docs: docs
            }
          )
        }

      }
    })
  } else {
    console.log("200");
    conn.query(`select * from record where momber = '${val}' limit 10`, (err, docs) => {
      if (err) console.log(err);
      if (docs != "") {
        if (docs.length > 1) {
          res.json(
            {
              docs: docs
            }
          )
        }

      }
    })
  }
});


router.post('/serachUserCard2', (req, res) => {
  var { val, length } = req.body
  if (length == 0) {
    console.log("0");
    conn.query(`select * from stats order by user_id desc limit 50`, (err, docs) => {
      if (err) console.log(err);
      if (docs != "") {
        if (docs.length > 1) {
          res.json(
            {
              stats: docs
            }
          )
        }

      }
    })
  } else {
    console.log("200");
    conn.query(`select * from stats where momber = '${val}' limit 10`, (err, docs) => {
      if (err) console.log(err);
      if (docs != "") {
        if (docs.length > 1) {
          res.json(
            {
              stats: docs
            }
          )
        }

      }
    })
  }
});

router.post('/getNext', (req, res) => {
  var { start, end } = req.body
  console.log(start + " " + end);
  var query = `SELECT * FROM record LIMIT ${start} OFFSET ${end};`
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      res.json({
        docs: docs
      })
    }
  })
});

router.post('/getNextCrad2', (req, res) => {
  var { start, end } = req.body

  console.log(start + " " + end);
  var query = `select * from stats LIMIT ${start} OFFSET ${end};`
  conn.query(query, (err, docs) => {
    if (err) console.log(err);
    if (docs) {
      var count = 'select count(*) as length from stats';
      conn.query(count, (err1, docs1) => {
        if (err1) console.log(err1);
        if (docs1) {
          if (docs1[0].length > end) {
            res.json({
              stats: docs,
              length: (docs1[0].length < end ? docs1[0].length : 0)
            })
          } else {
            res.json({
              stats: [],
              length: (docs1[0].length < end ? docs1[0].length : 0)
            })
          }
        }
      })
    }
  })
})



module.exports = router;
