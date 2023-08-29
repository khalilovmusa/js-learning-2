// Number and String tope values
let name = "Musa";
let number = 5;
console.log(typeof name);
console.log(typeof number);

// the calculation syntax of number and string
let myAge = 'My age is:';
let age = 18;

console.log(myAge + age);

//Booleans value
console.log(5 > 2); //true

console.log(5 > 8); //!false
 
let a = 3;
let b = 12;

let calculation = a + b;
console.log(calculation > 18); //!false

console.log(calculation === 15); //true

console.log(calculation < 18); //true

//Null

let c = null; //! means empty

c = 18;

console.log(a);

//Undefined

let d; //! means it is not defined

console.log(d); //!undefined

//Object

let object = { 
  name1: 'Musa',
  surname1: 'Khalilov',
  age1: 18
}
console.log(object);
console.log(typeof object);

let numbers = [ //! this is also an object 
  1,2,3,4,5
];

//Function

let func = function() {
  console.log('Hello');
}

console.log(typeof func); //! function

func(); //! we must have call it always
