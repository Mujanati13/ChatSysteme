
const socket = io({
    transports: ["websocket"]
});

const in1 = document.querySelector('.in1');
const in2 = document.querySelector('.in2');
const in3 = document.querySelector('.in3');

const op1 = document.querySelector('.op1');
const op2 = document.querySelector('.op2');
const op3 = document.querySelector('.op3');

const oline = document.querySelector('.oline');

setTimeout(() => {
    oline.innerHTML = "متصل"
}, 500);

op1.addEventListener('click', option1);
op2.addEventListener('click', option2);
op3.addEventListener('click', option3);

function option1() {
    console.log('1');
    in1.style.display = "block";
    in2.style.display = "none";
    in3.style.display = "none";
    op3.style.border = "none";
    op2.style.border = "none";
    op1.style.borderTop = "solid 1px #0000005c";
    op1.style.borderRight = "solid 1px #0000005c";
    op1.style.borderLeft = "solid 1px #0000005c";
    op1.style.borderBottom = "2px solid #ffffff";
    op2.style.boxShadow = "none";
    op3.style.boxShadow = "none";
    op1.style.color = "#555"
    op2.style.color = "#337ab7"
    op3.style.color = "#337ab7"
}

function option2() {
    in2.style.display = "block";
    in1.style.display = "none";
    in3.style.display = "none";
    op1.style.border = "none";
    op3.style.border = "none";
    op2.style.borderTop = "solid 1px #0000005c";
    op2.style.borderRight = "solid 1px #0000005c";
    op2.style.borderLeft = "solid 1px #0000005c";
    op1.style.borderBottom = "2px solid #ffffff";
    op1.style.boxShadow = "none";
    op3.style.boxShadow = "none";
    op2.style.color = "#555"
    op1.style.color = "#337ab7"
    op3.style.color = "#337ab7"
}

function option3() {
    in3.style.display = "block";
    in2.style.display = "none";
    in1.style.display = "none";
    op1.style.border = "none";
    op2.style.border = "none";
    /* op3.style.borderTop = "solid 1px #0000005c";
    op3.style.borderRight = "solid 1px #0000005c";
    op3.style.borderLeft = "solid 1px #0000005c";
    op3.style.borderBottom = "solid 1px #0000005c"; */
    op2.style.boxShadow = "none";
    op1.style.boxShadow = "none";
    op3.style.color = "#555"
    op1.style.color = "#337ab7"
    op2.style.color = "#337ab7"
}

const numberOfUsers = document.querySelector('.nth-of-users');


// numberOfUsers.innerHTML = getLength();

socket.on("users", (n) => {
    numberOfUsers.innerHTML = '<i class="s1 fr fa fa-user label badgex label-success"></i>' + n;
})

socket.on("disconnected", ({ id }) => {
    const currentuserid = document.getElementById(`${id}`);
    onlineusers.removeChild(currentuserid);
})
