// allhis = [];

function isEmpty() {
    if (document.getElementById("fnum").value == "") {
        alert("Please enter first number!");
        document.getElementById("fnum").focus();
        return -1;
    }
    else if (document.getElementById("snum").value == "") {
        alert("Please enter second number!");
        document.getElementById("snum").focus();
        return -1;
    }
    else
        return 1;
}
function getValue() {
    fnum = parseInt(document.getElementById("fnum").value);
    snum = parseInt(document.getElementById("snum").value);
}
function setResult(res) {
    document.getElementById("res").value = res;
}
function saveHistory(his) {
    // allhis = allhis.concat(his);
    var div = document.createElement('div');
    div.innerHTML = `<hr><br>${his}<br><hr>`;
    document.getElementById("history").appendChild(div).value;
    console.log(his);
    // showHistory(allhis);
}

// function showHistory() {
//     allhis.forEach(val => {
//         var div = document.createElement('div');
//         div.innerHTML = `<hr><br>${val}<br><hr>`;
//         document.getElementById("history").appendChild(div).value;
//     });
// }


function add() {
    if (isEmpty() == -1)
        return;
    getValue();
    res = fnum + snum;
    // console.log(res);
    setResult(res);
    his = `${fnum} + ${snum} = ${res}`;
    saveHistory(his);
}

function sub() {
    if (isEmpty() == -1)
        return;
    getValue();
    res = fnum - snum;
    // console.log(res);
    setResult(res);
    his = `${fnum} - ${snum} = ${res}`;
    saveHistory(his);
}
function mul() {
    if (isEmpty() == -1)
        return;
    getValue();
    res = fnum * snum;
    // console.log(res);
    setResult(res);
    his = `${fnum} * ${snum} = ${res}`;
    saveHistory(his);
}
function div() {
    if (isEmpty() == -1)
        return;
    getValue();
    if (snum == 0) {
        alert("Cannot divide by zero !");
        document.getElementById("snum").focus();
        return;
    }
    res = fnum / snum;
    // console.log(res);
    setResult(res);
    his = `${fnum} / ${snum} = ${res}`;
    saveHistory(his);
}
function exp() {
    if (isEmpty() == -1)
        return;
    getValue();
    res = Math.pow(fnum, snum);
    // console.log(res);
    setResult(res);
    his = `${fnum} ^ ${snum} = ${res}`;
    saveHistory(his);
}