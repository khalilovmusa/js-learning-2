//!Binary To Decimal Converter (2 lik sayidan 10 luq sayiys cevirme)

let binary = prompt('Please enter your binary :');

function convertBinaryToDecimal (binary){
  let total = 0;
  let counter = 0;

  for(let i = binary.length - 1; i >= 0; i--){
    total += Number(binary.charAt(i)) * Math.pow(2,counter);
    counter ++;

  }
  alert(`${total}`);
}

convertBinaryToDecimal(binary);