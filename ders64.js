//!<--------------- JS style property--------------->
//! #===> Select with id
//! .===> Select with classname
//! (empty)===> Select with tags

const todo = document.querySelectorAll(".list-group-item")[0];
todo.style.color = "white";
todo.style.backgroundColor = "purple";
todo.style.fontWeight = "500";
todo.style.paddingTop = "20px";
todo.style.paddingLeft = "10px";



const ul = document.querySelector(".list-group");
ul.style.marginTop = "50px";

const clearButton = document.querySelector("#todoClearButton");
clearButton.style.fontWeight = "bold";
clearButton.style.color = "lightpink";

clearButton.style.borderRadius = "10px";