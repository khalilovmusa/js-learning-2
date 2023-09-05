//!<------Trying to make binary code converter------->


let number = prompt('Please enter your number');

function convertBinaryToDecimal(number){
  let counter = 0;
  let result = 0;

  for(let i = number.length - 1; i >=0; i--){
    result += Number(number.charAt(i)) * Math.pow(2,counter);
    counter ++;

  }
  alert (`${result}`);
}

convertBinaryToDecimal(number);