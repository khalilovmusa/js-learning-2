
//!==>Events 

function changeTitle() {
  document.querySelectorAll(".card-title")[1].textContent = "Changed";
  alert("The title changed");
}

//addEventListener()==> We can use this code for adding events on our webpage but instead of onclick we use only click here

const todoAddButton = document.querySelector("#todoAddButton");

todoAddButton.addEventListener("click", function(){
  alert("hello");
});

const todoChangeTitleEvent = document.querySelector("#todoClearButton");

todoChangeTitleEvent.addEventListener("click" , todoChangeTitle);

function todoChangeTitle (e){
  console.log(e);
  console.log(e.target);//!==>This gets the target wich is the button used in the html
  console.log(e.target.textContent);//!==>This gets textcontent of the html element
  console.log(e.type);//!==>This tells you which type of event you did
  console.log(e.target.className);//!==>This tells you what classname is the button have
  console.log(e.target.href);//!==>This tells you what link the element have on the html
  document.querySelectorAll(".card-title")[1].innerHTML = "<b>Hello</b>";
}