//!<------RETRY BINARY APP MYSELF------>

let number = prompt('Please enter your number :');

function convertToBinary(number){
  let binary= "";

  while(true){
    binary+= (number%2).toString();
    number = Math.floor(number / 2);

    if(number === 1){
      binary += 1;
      break;
    }
   }
   let result = reverse(binary);
   alert(`${result}`);
   
}

function reverse(binary){
  let reversedBinary = '';
  for(let i = binary.length - 1; i >= 0; i--){
    reversedBinary += binary.charAt(i);

  }
  return reversedBinary;
}

convertToBinary(number);