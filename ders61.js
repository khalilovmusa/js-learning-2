//!<--------Value and reference types------->

//!===>value deyer tipleri primitive tiplerdir ram da s bolumunde tutulur ve bir birileri ile baglantilari yokdur
let a = 5;

let b = a;

console.log("a :"+ a);
console.log("b :"+ b);


console.log("---------------------");

b = 10;
console.log("a :" + a);
console.log("b :" + b);


//!====>Referance tipler 

let array1 = [1,2,3,4,];
console.log(typeof array1);

let array2 = array1;

if(array1 == array2){
  console.log("It is equal");
}else {
  console.log("Is not equal");
}


console.log(array1);
console.log(array2);

let array3 = [1,2,3,4,5];
let array4 = array3;

console.log(array3);
console.log(array4);

array4.push(12);

console.log(array3);
console.log(array4);
