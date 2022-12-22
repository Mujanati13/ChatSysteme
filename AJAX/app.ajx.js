// const socket  = io();
var username = document.querySelector('.namec')
var password = document.querySelector('.pwsc')
var layer1 = document.querySelector('.layer1');
var layer2 = document.querySelector('.layer2');

let apiKey = 'd9e53816d07345139c58d0ea733e3870';

$(document).ready(function () {
    $(".creatroom-ajax").click((e) => {
        var roomn = $('.roomn').val();
        var roomc = $('.rcapacity').val();
        $.ajax({
            type: "get",
            url: "users/createRoom",
            data: `roomn=${roomn}&roomc=${roomc}`,
            dataType: "json",
            success: function ({ msg }) {
                console.log("creat room s");
                $('.createroommsg').html('تم انشاء الغرفة بنجاح');
            }
        });
        $('.createroommsg').html('تم انشاء الغرفة بنجاح');
        setTimeout(() => {
            $('.createroommsg').html('');
        }, 2000);
        socket.emit("roomHasCreated", 'ss')
    })
});

$(".btn").click(function (e) {
    e.preventDefault();
    var usern = $('.namec').val()
    socket.emit("addname", { name: usern })
    window.localStorage.setItem("userLogin", JSON.stringify(usern));
    window.localStorage.setItem("pwsLogin", JSON.stringify(password.value));
    fetch('https://api.geoapify.com/v1/ipinfo?apiKey=82857a948f104033bb5680678d7ddaf5', {
        method: 'GET'
    })
        .then(function (response) { return response.json(); })
        .then(function (json) {
            console.log(json.ip);
            var code = json.country.iso_code
            var native = json.country.name_native
            console.log(json.country.name_native);
            console.log(code.toLowerCase());
            $.ajax({
                type: "get",
                url: `users/create`,
                data: `username=${usern}&password=${password.value}&code=${code.toLowerCase()}&counryNN=${native}&ip=${json.ip}`,
                dataType: 'json',
                error: function () {
                    $('.oline').html("")
                    $('.oline').html("حدث خطأ");
                    $('.oline').css('fontSize', '14px');
                    $('.oline').css('backgroundColor', 'red');
                    $('.oline').css('color', 'white');
                },
                success: function (response) {
                    if (response.msg == "error") {
                        $('.oline').html("هدا الإسم مسجل من قبل");
                        $('.oline').css('fontSize', '14px');
                        $('.oline').css('backgroundColor', 'rgb(217, 83, 79)');
                        $('.oline').css('color', 'white');
                    } else {
                        console.log("ip code " + response.msg);
                        $('.oline').html("تم تسجيل بنجاح")
                        $('.oline').css("backgroundColor", 'green');
                        $('.oline').css("fontSize", '14px');
                        console.log(usern);
                        socket.emit("join", { name: usern })
                        socket.emit("addname", { name: usern })
                        setTimeout(() => {
                            setTimeout(() => {
                                // 
                            }, 200);
                        }, 300)

                        setTimeout(() => {
                            var linkNode = document.getElementsByTagName('link')[0];
                            linkNode.parentNode.removeChild(linkNode);
                            layer2.style.display = "none";
                            layer1.style.display = "block";
                        }, 300)
                    }
                }
            });
        });
});

const usernamel = document.querySelector('.namel')
const passwordl = document.querySelector('.pwsl')

$(".btn2").click(function (e) {
    e.preventDefault();
    console.log("e");
    console.log(usernamel.value);
    console.log(passwordl.value);
    window.localStorage.setItem("userLogin", JSON.parse(JSON.stringify(usernamel.value)));
    window.localStorage.setItem("pwsLogin", JSON.parse(JSON.stringify(passwordl.value)));
    $.ajax({
        type: "get",
        url: `users/login`,
        data: `username=${usernamel.value}&password=${passwordl.value}`,
        dataType: 'json',
        error: function (request, err) {
            document.querySelector('.oline').innerHTML = "حدث خطأ"
            document.querySelector('.oline').style.fontSize = "14px";
        },
        success: function (response) {
            var r = response.mgs;
            if (response.msg == "error1") {
                $('.oline').html(" ! هذا الإسم غير مسجل ");
                $('.oline').css('fontSize', '14px');
                $('.oline').css('backgroundColor', '#f0ad4e');
                $('.oline').css('color', 'white');
                $('.oline').css('minWidth', '110px');
                $('.oline').css('maxWidth', '140px');
            }
            else if (response.msg == "error2") {
                $('.oline').html("كلمه المرور غير صحيحه");
                $('.oline').css('fontSize', '12px');
                $('.oline').css('backgroundColor', '#d9534f');
                $('.oline').css('color', 'white');
                $('.oline').css('Width', '140px');
                $('.oline .p').css('Width', '140px');
            }
            else if (response.msg == "suc") {
                $('.oline').css("backgroundColor", 'green');
                $('.oline').css("fontSize", '14px');
                console.log(usernamel.value);
                socket.emit("join", { name: usernamel.value })
                socket.emit("addname", { name: usernamel.value })
                setTimeout(() => {
                    setTimeout(() => {
                        // 
                    }, 50);
                }, 100)

                setTimeout(() => {
                    var linkNode = document.getElementsByTagName('link')[0];
                    linkNode.parentNode.removeChild(linkNode);
                    layer2.style.display = "none";
                    layer1.style.display = "block";
                }, 100)
            } else {
                console.log("sent id" + response.msg);
                socket.emit('ejection', response.msg);
                $('.oline').css("backgroundColor", 'green');
                $('.oline').css("fontSize", '14px');
                console.log(username.value);
                socket.emit("join", { name: usernamel.value })
                socket.emit("addname", { name: usernamel.value })
                setTimeout(() => {
                    setTimeout(() => {
                        // 
                    }, 50);
                }, 10)

                setTimeout(() => {
                    var linkNode = document.getElementsByTagName('link')[0];
                    linkNode.parentNode.removeChild(linkNode);
                    layer2.style.display = "none";
                    layer1.style.display = "block";
                }, 10)
            }
        }
    });
});


/* $(document).ready(function () {
    $('.btn3').click(function () {
        console.log(nakeNme.value);
        $.ajax({
            type: "get",
            url: "users/join",
            data: `nakeNme=${nakeNme.value}`,
            dataType: "json",
            success: function (response) {
                if (response.msg == "error") {
                    $('.oline').html(" هد الاسم موجود ");
                    $('.oline').css('fontSize', '13px');
                    $('.oline').css('backgroundColor', 'red');
                    $('.oline').css('color', 'white');
                } else {
                    $('.oline').html("جاري الدخول")
                    $('.oline').css("backgroundColor", 'green');
                    $('.oline').css("fontSize", '14px');
                    window.localStorage.setItem("nikename", JSON.stringify(nakeNme.value));
                    console.log(nakeNme.value);
                    socket.emit("join", { name: nakeNme.value })
                    socket.emit("addname", { name: nakeNme.value })
                    setTimeout(() => {
                        $('.oline').html("تم تسجيل الدخول")
                        setTimeout(() => {
                            // 
                        }, 200);
                    }, 300)

                    setTimeout(() => {
                        var linkNode = document.getElementsByTagName('link')[0];
                        linkNode.parentNode.removeChild(linkNode);
                        layer2.style.display = "none";
                        layer1.style.display = "block";
                    }, 300)
                }
            }
        })
    })
});
*/
var nakeNme = document.querySelector('.nakename');

$(".btn3").click(function (e) {
    e.preventDefault();
    var usern = $('.nakename').val()
    socket.emit("addname", { name: usern })
    window.localStorage.setItem("nikename", JSON.stringify(usern));
    fetch('https://api.geoapify.com/v1/ipinfo?apiKey=82857a948f104033bb5680678d7ddaf5', {
        method: 'GET'
    })
        .then(function (response) { return response.json(); })
        .then(function (json) {
            console.log(json);
            var code = json.country.iso_code
            var native = json.country.name_native
            console.log(json.country.name_native);
            console.log(code.toLowerCase());
            $.ajax({
                type: "get",
                url: `users/create`,
                data: `username=${usern}&password=0000&code=${code.toLowerCase()}&counryNN=${native}`,
                dataType: 'json',
                error: function () {
                    $('.oline').html("")
                    $('.oline').html("حدث خطأ");
                    $('.oline').css('fontSize', '14px');
                    $('.oline').css('backgroundColor', 'red');
                    $('.oline').css('color', 'white');
                },
                success: function (response) {
                    if (response.msg == "error") {
                        $('.oline').html("هدا الإسم مسجل من قبل");
                        $('.oline').css('fontSize', '14px');
                        $('.oline').css('backgroundColor', 'rgb(217, 83, 79)');
                        $('.oline').css('color', 'white');
                    } else {
                        console.log("ip code " + response.msg);
                        $('.oline').html("تم تسجيل بنجاح")
                        $('.oline').css("backgroundColor", 'green');
                        $('.oline').css("fontSize", '14px');
                        console.log(usern);
                        socket.emit("join", { name: usern })
                        socket.emit("addname", { name: usern })
                        socket.emit("isJoined", { name: usern })
                        setTimeout(() => {
                            setTimeout(() => {
                                // 
                            }, 200);
                        }, 300)

                        setTimeout(() => {
                            var linkNode = document.getElementsByTagName('link')[0];
                            linkNode.parentNode.removeChild(linkNode);
                            layer2.style.display = "none";
                            layer1.style.display = "block";
                        }, 300)
                    }
                }
            });
        });
});

// TODO-Paige
// We expect this to go away when we do the checkout model
function makeVersion() {
}