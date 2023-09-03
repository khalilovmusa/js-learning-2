//! 153 - 370 - 407 armstrong numbers

//?eer bir ededin reqemlerinin kubleri cemi ededin ozune beraerdirse, onda bu armstrong ededi adlanir.

//TODO: 153 = (1*1*1) + (5*5*5) + (3*3*3) = 1 + 125 + 27 = 153

let number = prompt("Enter your number");
let total = 0;

for(let i = 0; i < number.length; i++){
  let numeral = number.charAt(i);
  total += numeral*numeral*numeral;

}

if(Number(number)===total){
  alert('This is an armstrong number');
}else{
  alert('This is not an armstrong number');
}