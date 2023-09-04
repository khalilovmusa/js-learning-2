//!<-------Perfect number finder app second try----->

let number = Number(prompt('Please enter your number'));

function isPerfectNumber(number){
  let total = 0;

  for(let i = 2; i <= number/2; i++){
    if(number%i == 0){
      total += i;
    }
  }
  total +=1+number;

  if(total == number*2){
    alert('This is a perfect number');
  }else {
    alert('This is not a perfect number');
  }
}

isPerfectNumber(number);