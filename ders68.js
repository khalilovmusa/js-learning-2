let cardBody = document.querySelectorAll(".card-body")[1];
cardBody = cardBody.children[2];
cardBody.children[1].remove();
//  console.log(cardBody);
// cardBody.remove(cardBody.children[0]);
console.log(cardBody);

/*
<li class="list-group-item d-flex justify-content-between">Todo 1
  <a href="#" class="delete-item">
    <i class="fa fa-remove"></i>
  </a>
</li>
*/

let cardAppend = document.querySelector(".list-group");
let todoList = document.createElement("li");
let todoLink = document.createElement("a");
let i = document.createElement("i");

todoList.className = "list-group-item d-flex justify-content-between";
todoList.innerHTML = "Todo 5";

todoLink.className = "delete-item";
todoLink.href = "#";

i.className = "fa fa-remove";

todoLink.appendChild(i);

todoList.appendChild(todoLink);
cardAppend.appendChild(todoList);

// console.log(cardAppend);
//-----------------------------------------------------
//!Replacing element (Element yeri degistirmek)


let todoCardBody = document.querySelectorAll(".card-body")[1];


const newTitle = document.createElement("h2");
newTitle.className = "card-title";
newTitle.textContent = "Todo Listesi-Yeni";

// console.log(todoCardBody.childNodes);
console.log(todoCardBody.childNodes[1]);

todoCardBody.replaceChild(newTitle , todoCardBody.childNodes[1]);//!==>It requires 2nd parameter in node type 