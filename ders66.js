//!==>Dinamik olaraq element olusturmak

const cardBody = document.querySelectorAll(".card-body")[1];
console.log(cardBody);

const link = document.createElement("a");
link.id = "Youtube.com";//!==>this is used for id on the left bottom corner
link.className= 'btn btn-dark btn-sm mt3';
link.href= "http://Youtube.com";
link.target = "_blank";
link.innerHTML = "Youtube ye git";
link.style.marginTop = "16px";

cardBody.appendChild(link);//!===>this code used for adding element to our webpage
/*
<li class="list-group-item d-flex justify-content-between">Todo 4
<a href="#" class="delete-item">
    <i class="fa fa-remove"></i>
</a>
</li>
*/

const todoLi = document.createElement("li");
const todoLink = document.createElement("a");
const i = document.createElement("i");

todoLi.className = "list-group-item d-flex justify-content-between";
todoLi.innerHTML = "Todo 5";

todoLink.href = "#";
todoLink.className = "delete-item";

i.className = "fa fa-remove";

todoLink.appendChild(i);

todoLi.appendChild(todoLink);

let cardAppend = document.querySelector(".container");
cardAppend = cardAppend.children[0].children[0].children[3].children[2];

cardAppend.appendChild(todoLi);


console.log(link);