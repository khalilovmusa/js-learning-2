//!Selectors(seciciler) - Style ozelliyi

//classname , id , tag name




//?getElementById : id ye gore yakalar

//const button = document.getElementById("todoAddButton");

//console.log(button);
//console.log(button.id);
//console.log(button.getAttribute("id"));

//console.log(button.className);
//console.log(button.getAttribute("class"));

//const classListesi = button.classList[3];//!=====>index
//const classListesi = button.classList[2];

/*
const classListesi = button.classList;

classListesi.forEach(function(className){
  console.log(className);
});

console.log(classListesi);
*/

//let buttonText = button.textContent;
//let buttonText2 = button.innerHTML;
//!---->The main difference between innerHTML and textContent is innerHTML sees another html elements around the element that you used with .But in the textContent it sees that html etiquetts like a string for ex:

//console.log(buttonText);
//console.log(buttonText2);



//let textButton = button.textContent = "<b>Todo Ekleyin</b>";

//let textButton2 = button.innerHTML= "<b>Todo Ekleyin</b>";


//?getElementByClassName : class ismine gore yakalar

//const todoList = document.getElementsByClassName("list-group-item");
const todoList = Array.from(document.getElementsByClassName("list-group-item"));
todoList.forEach(function(list){
  console.log(list);
  console.log(list.textContent);
});

//console.log(todoList);


//?getElementsBytagName

const forms = Array.from(document.getElementsByTagName("form"));
forms.forEach(function(forms){
  console.log(forms);
});
console.log(forms[0].id);


const todoListLi = document.getElementsByTagName("li");
console.log(todoListLi);




//getElementById-getElementsByClassName-getElementsByTagName //!===>there is a code that do all of these three codes job names querySelector

//?querySelector - querySelectorAll

const clearButton = document.querySelector("#todoClearButton");
console.log(clearButton);

console.log(document.getElementById("todoClearButton"));


const todoClass = document.querySelector(".list-group");
console.log(todoClass);



const todoListClassName = document.querySelector(".list-group-item");
console.log(todoListClassName);//!====>we have 4 class name exactly like this one but the selector chooses only the first of them in that case we'll use querySelectorAll method for select all the elements with same class names

const todoListClassName2 = document.querySelectorAll(".list-group-item");
console.log(todoListClassName2);

//!===>if we want to select a child from this :
const todoListClassName3 = document.querySelectorAll(".list-group-item")[2];
console.log(todoListClassName3);



//!====>if we want to select the element that one the end we will use length attribute

const todoListClassName4 = document.querySelectorAll(".list-group-item")[(document.querySelectorAll(".list-group-item")).length - 1];

console.log(todoListClassName4);


const callLi = document.querySelectorAll("li:first-child");//!===> li:last-child , li:nth-child(number)
console.log(callLi);

//odd and even

const callLi2 = document.querySelectorAll("li:nth-child(odd)");//!==>if u write this it will call the odds
console.log(callLi2);

const callLi3 = document.querySelectorAll("li:nth-child(even)");//!==>This one chooses even numbers
console.log(callLi3);



//!===>we can do like this 

const callLi4 = Array.from(document.querySelectorAll("li:nth-child(odd)"));

callLi4.forEach(function(todo){
  todo.style.backgroundColor = "lightgrey";
});

console.log(callLi4);