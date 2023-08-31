//! Multiple if condition

/*
  name and fin code
  name: can't be empty
  fin code: must be 11 characters

*/

let name = prompt('Please enter your name: ');
let fin = prompt('please enter your fin code:');

/*
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
*/

// long story short:
// if - else : we use this condition for 2 choises
// if - else if: we use this condition for choises that is more than 2
// muliple if statement : we use this condition when we want to check each condition seperately 

check2(name , fin);

function check2(name , fin) {
  if (name === "") {
    alert('Please enter your name!');
    return;
  }
  if (fin.length!=11) {
    alert('The fin must be 11 characters.Try again.');
    return;
  }

  alert('Your fin and name is inserted correct');
}