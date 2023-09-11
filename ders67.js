let cardBody = document.querySelectorAll(".card-body")[1];


//------------------------------------------------------------------------------------------------------
//!==>Deleting an element

// let todoList = document.querySelectorAll(".card-body")[1];
let todoList = document.querySelector(".list-group");

let todo1 = todoList.children[0];
//The first way to remove an element on the list
// todo1.remove();

//!==> If we'll delete the last element on the page we can use the length property for example
let todos = document.querySelectorAll(".list-group-item");
todos[todos.length - 1 ].remove();
console.log(todos);

//-----------------------------------------------------------------------------------------------------
//!==> We also can delete a child from a parent fore example
todoList.removeChild(todos[0]);
todoList.removeChild(todoList.lastElementChild);

console.log(todo1);