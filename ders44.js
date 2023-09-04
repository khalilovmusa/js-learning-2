//!<-----Trying to do letter finder lesson myself------>

let text = prompt('Please enter your text');

let letter = prompt('Please enter your letter');

let result = find(letter);
alert(`Your letter repeated ${result} times in the text.`);

function find(letter){
  let totalLetter = 0; //!We must've to create this outside the loop for avoid repeating
  for(let i = 0; i < text.length; i++){
    if(text.charAt(i).toLowerCase === letter){
      totalLetter += 1;

    }
  }
  return totalLetter;
}