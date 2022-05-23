
function add(){
    let a = document.getElementById("valueone").value;
    let b = document.getElementById("valuetwo").value;
    let c = Number(a) + Number(b);
    document.getElementById("result").value = c; 

}

function sub(){
    let a =  $("#valueone").val();
    let b = document.getElementById("valuetwo").value;
    let c = a - b;
    document.getElementById("result").value = c; 

}

function mul(){
    let a = document.getElementById("valueone").value;
    let b = document.getElementById("valuetwo").value;
    let c = a * b;
    document.getElementById("result").value = c; 

}

function div(){
    let a = document.getElementById("valueone").value;
    let b = document.getElementById("valuetwo").value;
    let c = a / b;
    document.getElementById("result").value = c; 

}

