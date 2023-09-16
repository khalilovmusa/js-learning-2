//!==>Practise with keyboard events

//?==> Lets add a event : If user presses f5 key we'llnot let the user refresh the page
/*
document.addEventListener("keydown" , run);

function run(e){
  console.log(e.keyCode);
  if(e.keyCode === 116){
    alert("The refresh prevented");

  }

  e.preventDefault();
}
*/

const header = document.querySelectorAll(".card-title")[0];
const inputSelect = document.querySelector(".form-control");
// const addButton = document.querySelectorAll(".btn")[0];
// console.log(addButton);

inputSelect.addEventListener("keyup" , input);

function input (e) {
  console.log(e.target.value);
  header.textContent = e.target.value;
  
}