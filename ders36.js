//!<--------SADE EDEDLER------->

let number = Number(prompt('Please enter your number'));
let result = true;

if(number ===""){
  console.log('Please enter a number');
}

for(let a = 2; a <= Math.floor(number / 2); a++){
  if(number%a === 0) {
    //not a prime number
    result = false;
    break;
  } else if(number%a !=0){
    //this is a prime number
    result = true;
    break;
  }

}

if (result === true){
  console.log('This is a prime number');
} else if (result === false){
  console.log('This is not a prime number');
} 


