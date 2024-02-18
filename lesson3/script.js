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

function multi2() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    alert(n1 * n2);
}

function plus() {
    var n1 = +document.getElementById("num3").value;
    var n2 = +document.getElementById("num4").value;

    alert(n1 + n2);
}