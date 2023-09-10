//! HTML elementleri uzerinde gezinmek

let todo1 = document.querySelector(".list-group-item");
let todoList = document.querySelector(".list-group");
//const card = document.getElementsByClassName("card");
const card = document.querySelector(".card");



let value;

//Reach childs from parents(anneden cocuklara erismek)

value = todoList;
value = todoList.children;//!===> WE can catch its childs inside arrays with this code
value = todoList.children[0];//!==> IF we want to cahtch only the child we want we use index numbers
value = todoList.children[(todoList.children).length - 1];//!==> We can catch the last child in the array with length property
value = todoList.children[3].textContent = "Replaced";

value = todoList;
value = Array.from(todoList.children);
value.forEach(function(todo){
  console.log(todo.textContent);
});


//Reach parent from child

value = todo1;
value = todo1.parentElement;
value = todo1.parentElement.parentElement.parentElement;
//value = value.parentElement;//!==>reaching todo1's parents parent


value = todo1;
let ul = todo1.parentElement;
let cardBody = ul.parentElement;
let cardElement = cardBody.parentElement;
let row = cardElement.parentElement;
let container = row.parentElement;


//reaching siblings to siblings

value = todo1;
value = todo1.nextElementSibling;//!==> we can reach to next sibling using another nextElementSibling
value = todo1.nextElementSibling.nextElementSibling.nextElementSibling;
value2 = value.previousElementSibling;//!==>We can reach to previus using with previusElementSibling
value3 = value2.previousElementSibling.previousElementSibling;


const row1 = document.querySelector(".row");
value = row1;

value = row1.children[0].children[3].children[0].textContent = "Replaced toto list header";


const row2 = document.querySelector(".container");
value = row2;

let todo3 = row2.children[0].children[0].children[3].children[2].children[2] 
todo3.textContent = "Replaced 2";
todo3.style.backgroundColor = "lightgray";
todo3.style.color = "purple";
todo3.style.fontWeight = "bold";


console.log(value);