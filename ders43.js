//!word length finding app

let text = prompt("please enter your text :");

let letter = prompt("Please enter your letter");

let result = find(letter);
alert("Letter repeat : " + result);

function find(letter){
  let total = 0;
  for(let i = 0; i < text.length; i++){
    if(text.charAt(i) === letter){
      total += 1;

    }
  }
  return total;
}

