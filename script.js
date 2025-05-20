function result{
var bd = document.getElenentById("bd").value;
var bm = document.getElenentById("bm").value;
var by = document.getElenentById("by").value;

var date = new Date();
var cd = date.getDate();
var cm = date.getMonth();
var cy= date.getFullYear();

if (bd>cd){
    d = cd+30;
    m = cm-1;
    
}
if (bm>cm){
    y = cy-1;
    m = cm+12;
    
}

var d = cd-bd;
var m = cm-bm;
var y = cy-by;

document.getElementById("result").innerHTML = 'your age is'+y'year'+m'month'+d'days'
}

