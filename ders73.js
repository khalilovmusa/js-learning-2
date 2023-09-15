//!==>Practise with keyboard events

//?==> Lets add a event : If user presses f5 key we'llnot let the user refresh the page

document.addEventListener("keydown" , run);

function run(e){
  console.log(e.keyCode);
  if(e.keyCode === 116){
    alert("The refresh prevented");

  }

  e.preventDefault();
}