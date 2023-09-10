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

console.log(value);