
var bd=document.getElementById("date");
var bm=document.getElementById("month");
var by=document.getElementById("year");

var today=new Date();

var cd=today.getDate();
var cm=today.getMonth()+1;
var cy=today.getFullYear();


var tot=document.getElementById("ans")


function result()
{
  var d1=Number(bd.value);
  var m1=Number(bm.value);
  var y1=Number(by.value);
  
  var today=new Date();
  var d2=today.getDate();
  var m2=today.getMonth()+1;
  var y2=today.getFullYear();
  
  if (m1>m2){
    dy=y2-1;
    dm=m2+12;
    if (d1>d2){
      nm=dm-1;
      nd=d2+30;
      d=nd-d1;
      m=nm-m1;
      y=dy-y1;
    }
    else{
      d=d2-d1;
      m=dm-m1;
      y=dy-y1;
    }
  }
  else if (d1>d2){
    dm=m2-1;
    dd=d2+30;
    d=dd-d1;
    m=dm-m1;
    y=y2-y1;
  }
  else{
    d=d2-d1;
    m=m2-m1;
    y=y2-y1;
  }

  tot.textContent="You Are Born In "
  +y+" years "+m+" months "+d+" days";
}
