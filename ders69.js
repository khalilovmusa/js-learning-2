//!===> Trying the replace method myself

/*
  <a href="#" id="todoClearButton" class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>
*/

let replaceElement = document.querySelectorAll(".card-body")[1];

const todoClearLink = document.createElement("a");

todoClearLink.href = "https://Youtube.com";
todoClearLink.target = "_blank";
todoClearLink.id = "todoClearButton";
todoClearLink.className = "btn btn-dark btn-sm";
todoClearLink.style.marginTop = "20px" ;
todoClearLink.textContent = "Clear All";

replaceElement.replaceChild(todoClearLink , replaceElement.childNodes[7] )

// console.log(replaceElement.childNodes[7]);
// console.log(replaceElement );
// console.log(todoClearLink);