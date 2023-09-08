//!<----------THE DOM--------->

//? DOM -(Document object module)

let value ;

/*
console.log(document.location);

//value = document.location.href;
//value = document.location.hostname;
//value = document.location.pathname;
//value = document.location.port;

*/
//value = document.all;
//value = document.characterSet;

//value = document.title;

//value = document.links;
//value = document.links.item(4);
//value = document.links.item(4).id;
//value = document.links.item(4).getAttribute("id");
//value = document.links.item(4).getAttribute("class");
//value = document.links.item(4).classList;
//value = document.links.item(4).classList[3];

//value = document.forms;
//value = document.forms.item(1).id;
//value = document.forms.item(1).name;

value = document.forms.item(1).children;

console.log(value);
