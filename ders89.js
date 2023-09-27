//!==>Todo list project trying to do myself

//TODO==>The first we'll choose all the important elements on the page
let form = document.querySelectorAll(".card-body")[0];
let addInput = document.querySelector("#todoName");
let firstCardBody = document.querySelectorAll(".card-body")[0];
let secondCardBody = document.querySelectorAll(".card-body")[1];
let todoList = document.querySelector(".list-group");
let deleteAllTodoButton = document.querySelector("#todoClearButton");
let filterInput = document.querySelector("#todoSearch");

let todoStorage = [];

// console.log(todoList);

//TODO==>We will call the function first for start
runAllTheEvents();

function runAllTheEvents(){
  form.addEventListener("submit" , addTodo);//!==> If we submit in the form element the page will run addTodo();==>function

  document.addEventListener("DOMContentLoaded" , pageLoaded);

  secondCardBody.addEventListener("click" , removeTodoFromUI);

  deleteAllTodoButton.addEventListener("click" , deleteAllTodoFromUI);

  filterInput.addEventListener("keyup" , filterAllTodos);
}

function filterAllTodos(e){
  const filterValue = e.target.value.toLowerCase().trim();
  const todoList = document.querySelectorAll(".list-group-item");

  if(todoList.length > 0){
    todoList.forEach(function(todo){
      if(todo.textContent.toLowerCase().trim().includes(filterValue)){
        todo.setAttribute("style" ,"display : block");
      }else{
        todo.setAttribute("style" , "display : none !important")
      }
    });
  }else{
    showAlert("warning" , "You need at least 1 todo on your todo list for searching");
  }
}

function deleteAllTodoFromUI(){
  const todos = document.querySelectorAll(".list-group-item");
  if(todos.length > 0){
    todos.forEach(function(todo){
      todo.remove();
    });
    removeTodoFromStorage(todos);
  }else{
    showAlert("warning" , "For deleting all todos you need at least 1 todo on your list");
  }
}


function removeTodoFromStorage(){
  todoStorage = [];
  localStorage.setItem("todoStorage" , JSON.stringify(todoStorage));
}

function removeTodoFromUI(e){
  if(e.target.className === "fa fa-remove"){
    const todo = e.target.parentElement.parentElement;
    // console.log(todo);
    todoList.removeChild(todo);
    // console.log("true");
    console.log(todo.textContent);
    removeTodoFromStorage(todo.textContent);
  }
  // console.log(e.target);
}

function removeTodoFromStorage(deleteTodo){
  checkTodoFromStorage();
  todoStorage.slice(deleteTodo , 1);
  localStorage.setItem("todoStorage" , todoStorage);
}

function pageLoaded(){
  checkTodoFromStorage();
  todoStorage.forEach(function(todo){
    // console.log(todo);
    addTodoToUI(todo);
  });
}

function addTodo(e){
  const inputText = addInput.value.trim();//TODO==> We'll dave the trimmed version of the input value to the inputText variable and 'll use it here in the function 
  if(inputText === null || inputText === ""){//!==>If the inputText is null or empty run this code else:
    showAlert("danger","Please enter a valid todo");
  }else {
    addTodoToUI(inputText);//TODO==>Adding todo to the user interface this code will go to the addTodoToUI(); function

    addTodoToStorage(inputText);//TODO==>Adding our todo element that we created to the local storage with the addTodoStorage(); function

    showAlert("success","Todo added");
  }
  // console.log("Hello");
  e.preventDefault();
}

function addTodoToUI(newTodo){//TODO==>In this function we'll create the html elements and append them with themselves and lastly we will append them to the page
    /*//!==>This is the copy of the html elements that we'll try to append with each others lets begin
   <li class="list-group-item d-flex justify-content-between">Todo 1
      <a href="#" class="delete-item">
        <i class="fa fa-remove"></i>
       </a>
   </li>
  */

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.textContent = newTodo;//!==>The content of this todo is the input elements trimmed value so we catched it like newTodo above

  const a = document.createElement("a");
  a.href = "#";
  a.className = "delete-item";

  const i = document.createElement("i");
  i.className = "fa fa-remove";

  a.appendChild(i);
  li.appendChild(a);
  todoList.appendChild(li);//!==>We'll append this child on the list-group item that we selected at the top

  addInput.value = "";//!==>We should clear our input right after we added our input to the user interface
}


//==> Now we will add this user interface to the //!==>localStorage
function addTodoToStorage(newTodo){
  checkTodoFromStorage();
  todoStorage.push(newTodo);
  localStorage.setItem("todoStorage" , JSON.stringify(todoStorage));
}

function checkTodoFromStorage(){
  if(localStorage.getItem("todoStorage") === null){
    todoStorage = [];
   }else{
     todoStorage = JSON.parse(localStorage.getItem("todoStorage"));
   }
}

function showAlert(type,message){
  /*
  <div class="alert alert-warning" role="alert">
  This is a warning alert-check
  </div>
  */

  const div = document.createElement("div");
  div.className = "alert alert-"+type;
  div.textContent = message;
  div.style.marginTop="10px";

  firstCardBody.appendChild(div);

  setTimeout(function(){
    div.remove();
  },2500);
}