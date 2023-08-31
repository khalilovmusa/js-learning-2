//----Gasoline station----

/*

  1-Diesel   : 24.53tl
  2-Gasoline : 22.25tl
  3-LPG      : 11.1 tl


! we must have take these orders from customers:
! 1- Fuel type
! 2- Fuel liter 

*/

let diesel = 24.53;
let gasoline = 22.25;
let lpg = 11.1;

const newLine = '\r\n';

let fuelText = '1-Diesel' + newLine
+'2-Gasoline' + newLine
+ '3-LPG' + newLine
+ 'Select your fuel type:'

let fuelType = prompt(fuelText);
let fuelLiter = Number(prompt('Please enter your fuel liter.'));
let money = Number(prompt('Enter your cash'));

if (fuelType === '1') {
  //!Diesel
  let amountDiesel = diesel*fuelLiter;
  if (amountDiesel < cash) {
    //TODO: your amount is enough
  } else if (amountDiesel > cash) {
    //TODO: your amount id not enough
  }
} else if (fuelType === '2') {
  //!Gasoline
  let amountGasoline = gasoline*fuelLiter;
  if (amountGasoline < cash) {
    //TODO: your amount is enough
  } else if (amountGasoline > cash) {
     //TODO: your amount id not enough
  }
} else if (fuelType === '3') {
  //!LPG
  let amountLpg = lpg*fuelLiter;
  if (amountLpg < cash) {
    //TODO: your amount is enough
  } else if (amountLpg > cash) {
     //TODO: your amount id not enough
  }
}else {
  alert('Please select a valid fuel type.');
}