//!<-------Armstrong number trying to wtite myself------>


let number = prompt('Please enter your number');
let total = 0;

for (let i = 0; i < number.length; i++){
  let numeral = number.charAt(i);
  total += numeral*numeral*numeral;

}

if(number == total){
  alert('This is an armstrong number');
}else{
  alert("This is not an armstrong number");
}