//!==> Local storage usage

let score = Number(prompt("Please enter your final exam score"));

//Setting value
localStorage.setItem("330" , "Musa");
localStorage.setItem("280" , "Mehman");
localStorage.setItem("270" , "Mamed");


//Getting value

let value = localStorage.getItem(JSON.stringify(score));
if(score === 330){
  alert(`This is ${value}'s score`);
}else if(score === 280){
  alert(`This is ${value}'s score`);
}else if(score === 270){
  alert(`This is ${value}'s score`);
}

//Removing value

// localStorage.removeItem("280");

//Removing all

// localStorage.clear();


//for arrays

let scores = ["330" , "280" , "270"];

let arrayValue = localStorage.setItem("scores" , JSON.stringify(scores));

let arrayValueParse = JSON.parse(localStorage.getItem("scores"));

arrayValueParse.forEach(function(score){
  console.log(score);
});

// console.log(arrayValue);