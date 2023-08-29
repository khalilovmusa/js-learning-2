// Var--Let--Const

/**
 * global scope
 * function scope
 * block scope
 */

var elementName = 10;

console.log(elementName);

var a = 5;  //global scope you can reach it from everywhere

//while(a>3) {
//console.log(a);
//}

/*
if(true) {
  console.log(a);
}


function method1() {
  console.log(a);
}

method1();
*/

/*
function method1() {
  var number = 10;

}

console.log(number);

method1();
*/

function method() {
    if(true) {

    }
}