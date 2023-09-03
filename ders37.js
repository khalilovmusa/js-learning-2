//!<--------FACTORIAL CALCULATION------->


let numberFactorial = Number(prompt('Please enter your number'));
let calculation = 1;
//12

for(let i =1; i<=numberFactorial; i++){
  calculation = calculation * i;
  
}
console.log(calculation);