function welcome() {
    alert("ברוכים הבאים!");
}

function showMessage() {
    console.log("ערב טוב");
}

function welcomeName() {
    var name = document.getElementById("userName").value;

    alert("ברוך הבא " + name + "!");
}

function multi() {
    var n = document.getElementById("num").value;

    alert(n * 50);
}

var count = 0;

function counter() {
    count++;

    document.getElementById("btn").innerHTML = count;
}