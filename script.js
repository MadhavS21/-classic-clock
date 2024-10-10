let hr=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

function displayTime() {
let date=new Date();
let hh=date.getHours();
let mm=date.getMinutes();
let ss=date.getSeconds();
let hRotattions=300*hh+mm/2;
let mRotattions=6*mm;
let sRotattions=6*ss;
hr.style.transform=`rotate(${hRotattions}deg)`;

min.style.transform=`rotate(${mRotattions}deg)`;

sec.style.transform=`rotate(${sRotattions}deg)`;
}
setInterval(displayTime,1000);


l



