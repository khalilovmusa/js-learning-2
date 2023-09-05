//!<------Foreach loop------>


let names = ["Musa","Murad","Mehemmed","Rustam"];

names.forEach(function(name){
  console.log(name);
});

console.log("----------------------------------------------");
//!====> We can use this with for loop for example:

for(let i = 0; i < names.length; i++){
  console.log(names[i]);
}

console.log('------------------------------------------------');

let counter1 = 0;

while(counter1 < names.length){
  console.log(names[counter1]);
  counter1 ++;
}


console.log('------------------------------------------------');

let counter2 = 0;

do{
  console.log(names[counter2]);
  counter2++;
}while(counter2 < names.length);