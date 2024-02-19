function weightf(){
var kg=document.getElementById("kg").value;
var p=kg*2.2;
document.getElementById("pd").value=p;
}
function temperaturef(){
var kg=document.getElementById("c").value;
var p=(kg*9/5)+32;
document.getElementById("f").value=p;
}
function distancef(){
    var kg=document.getElementById("km").value;
    var p=kg*0.62137;
    document.getElementById("mile").value=p;
    }