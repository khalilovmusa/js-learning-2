//!==>Todo project trying to do myself

//TODO==>First we'll select the objects 
let addInput = document.querySelector("#todoName");
let firstCardBody = document.querySelectorAll(".card-body")[0];
let secondCardBody = document.querySelectorAll(".card-body")[1];
let todoList = document.querySelector(".list-group");
let form = document.querySelectorAll(".card-body")[0].children[0];

let todoStorage = [];

// console.log(form);
// console.log(addInput);
// console.log(todoList);

runAllTheEvents();

function runAllTheEvents(){
 form.addEventListener("submit", addTodo);

}

function addTodo(e){
  const inputText = addInput.value.trim();
  console.log(inputText);
  if(inputText == null || inputText == ""){
    alert("please enter a todo");
  }else{
    addTodoToUI(inputText);
    addTodoToStorage(inputText);
  }
  
  e.preventDefault();
}

function addTodoToUI(newTodo){
  /*
   <li class="list-group-item d-flex justify-content-between">Todo 1
      <a href="#" class="delete-item">
        <i class="fa fa-remove"></i>
       </a>
   </li>
  */

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.textContent = newTodo;

  const a = document.createElement("a");
  a.href = "#";
  a.class = "delete-item";

  const i = document.createElement("i");
  i.className = "fa fa-remove";

  a.appendChild(i);
  li.appendChild(a);
  todoList.appendChild(li);

  addInput.value = "";
}

function addTodoToStorage(newTodo){
  checkTodoFromStorage();
  todoStorage.push(newTodo);
  localStorage.setItem("todoStorage",JSON.stringify(todoStorage));
}

function checkTodoFromStorage(){
  if(localStorage.getItem("todoStorage") == null){
    todoStorage = [];
  }else{
    JSON.parse(localStorage.getItem("todoStorage"));
  }
}