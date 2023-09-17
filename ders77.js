//!==>Todo list project

//TODO==> Atarting with select all the elements
const form = document.querySelectorAll(".card-body")[0].children[0];
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
// console.log(form);
// console.log(addInput);
// console.log(secondCardBody);
// console.log(todoList);
runEvents();

function runEvents(){
  form.addEventListener("submit",addTodo);
}


function addTodo(e) {
  const inputText = addInput.value.trim();
  if(inputText == null || inputText == ""){
     alert("Please enter a todo");
  }else{
    //Adding to webpage
    addTodoToUI(inputText);
  }

  //adding to storage

  e.preventDefault();//TODO==> The computer throws us to an another webpage because of that we use this code for prevent default settings
}

function addTodoToUI(newTodo){
   /*
       <li class="list-group-item d-flex justify-content-between">Todo 1
         <a href="#" class="delete-item">
             <i class="fa fa-remove"></i>
         </a>
       </li>
   */

const li = document.createElement("li");//!==>Li element
li.className = "list-group-item d-flex justify-content-between";
li.textContent = newTodo;

const a = document.createElement("a");//!==>A element
a.href = "#";
a.className = "delete-item";

const i = document.createElement("i");//!==> I element
i.className = "fa fa-remove";

a.appendChild(i);
li.appendChild(a);
todoList.appendChild(li);

addInput.value = "";
}
