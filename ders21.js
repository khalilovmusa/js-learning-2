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
let money = Number(prompt("Enter your cash(In Turkish Lira)"));

if (fuelType === '1') {
  //!Diesel
  let amountDiesel = diesel*fuelLiter;
  if (amountDiesel < money) {
    //TODO: your amount is enough
    alert('Your amount is enough you can afford to buy enough diesel.' + 
    newLine + `The total amount : ${amountDiesel}TL` +
    newLine + `The available balance : ${money - amountDiesel}`);
  } else if (amountDiesel >= money) {
    //TODO: your amount is not enough
    alert('Your amount is not enough you cant afford to buy enough diesel.' +
     newLine +`The total amount is : ${amountDiesel}TL`+ 
     newLine + `The missing amount : ${amountDiesel - money}TL`);
  }
} else if (fuelType === '2') {
  //!Gasoline
  let amountGasoline = gasoline*fuelLiter;
  if (amountGasoline < money) {
    //TODO: your amount is enough
    alert('Your amount is enough you can afford to buy enough gasoline.' + 
    newLine + `The total amount : ${amountGasoline}TL`+
    newLine + `The available balance : ${money - amountGasoline}`);
  } else if (amountGasoline >= money) {
     //TODO: your amount id not enough
     alert('Your amount is not enough you cant afford to buy enough gasoline.' +
      newLine +`The total amount : ${amountGasoline}TL` + 
      newLine + `The missing amount : ${amountGasoline - money}TL`);
  }
} else if (fuelType === '3') {
  //!LPG
  let amountLpg = lpg*fuelLiter;
  if (amountLpg < money) {
    //TODO: your amount is enough
    alert('Your amount is enough you can afford to buy enough diesel.' + 
    newLine + `The total amount : ${amountLpg}TL`+
    newLine + `The available balance : ${money - amountLpg}`);
  } else if (amountLpg >= money) {
     //TODO: your amount id not enough
     alert('Your amount is not enough you cant affor to buy enought diesel.' + 
     newLine + `The total amount : ${amountLpg}TL`+ 
     newLine + `The missing amount : ${amountLpg - money}TL`);
  }
}else {
  alert('Please select a valid fuel type.');
}