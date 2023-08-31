//! Multiple if condition

/*
  name and fin code
  name: can't be empty
  fin code: must be 11 characters

*/

let name = prompt('Please enter your name: ');
let fin = prompt('please enter your fin code:');


check(name , fin);

function check(name , fin) {
  if (name!= '') {
    if (fin.length == 11) {
      alert('You filled your name and fin succesfully.');
    } else {
      alert('The fin must be 11 characters.Try again.');
    }
  } else {
    alert('insert your name:');
  }

}