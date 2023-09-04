//!<-------Decimal to binary conversion------>(10 luq say sistemini ikilik say sistemine cevirmek)

let number = prompt('Please enter your number');

function decimalToBinary (number){
  let binary = "";

  while(true){
    binary += (number%2).toString();
    number = Math.floor(number/2);
    if(number==1){
      binary+=1;
      break;
    }
  }

  let result = reverse(binary);
  alert(`${result}`);
}


function reverse(binary){
  let reverseBinary ="";
  for(let i = binary.length - 1; i >= 0; i--){
    reverseBinary += binary.charAt(i);
  }

  return reverseBinary;
}

decimalToBinary(number);