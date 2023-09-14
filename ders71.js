//!Mouse events

//DOMContentLoaded==> document uzerinden kulanilir
//load==> Window uzerinden kullanilir
//click
//dblclick
//mouseover
//mouseout
//mouseenter
//mousedown

// document.addEventListener("DOMContentLoaded",run);
window.addEventListener('load' , run);

function run(){
  alert('Page reloaded');
} 

const cardTitle1 = document.querySelectorAll('.card-title')[1];

cardTitle1.addEventListener("click" , click);

function click(e){
  console.log(e.type);
  cardTitle1.textContent = "You clicked the title of this list";

}

const cardTitle2 = document.querySelectorAll(".card-title")[0];

cardTitle2.addEventListener("dblclick" , dbClick);

function dbClick(e){
  console.log(e);
  cardTitle2.innerHTML = "You clicked twice on this title";
}

console.log(cardTitle2.textContent);

cardTitle2.addEventListener('mouseover' , mouseOver);//!==>if we use this code the functionon this code runs every time when we hover over any html element

function mouseOver(e){
  console.log(e);
  cardTitle2.innerHTML = "Click on this text 2 times";
}

cardTitle2.addEventListener("mouseout" , mouseOut);//! if we use this code the function on this code runs every time when we hover out from an html element


function mouseOut(e){
  console.log(e);
  cardTitle2.innerHTML = "Hover over me";

}

cardTitle1.addEventListener("mouseout" , mouseOutEvent);

function mouseOutEvent(e){
  console.log(e);
  cardTitle1.innerHTML = "Click me 1 time";
}

const buttonEvent = document.querySelectorAll(".btn")[0];

buttonEvent.addEventListener("mouseenter" , buttonEvent1);//!==> if we use this code this codes function runs every time when we hover over something but only works one time on one element

function buttonEvent1 (e) {
  console.log(e);
  buttonEvent.innerHTML = "release me";
}

buttonEvent.addEventListener("mouseleave" , mouseLeaveEvent);

function mouseLeaveEvent (){
  buttonEvent.innerHTML = "Hover over me again and click me";
}


buttonEvent.addEventListener("mousedown" , mouseDownEvent);//!==> if we use this code this code runs the function inside it when we click to our mouse

function mouseDownEvent(e){
  console.log(e.type);
  buttonEvent.innerHTML = "Hover out";

}