//!==> Arrow functions


//?==>Old function method

function print(){
  console.log("Hello");

}

print();

//!==> Arrow function

const printArrow = ()=>{
  console.log("Hello");
}

printArrow();

//!==> Arrow function with parameter

const printFunctionParameter = (firstName,lastName)=>{
  console.log(`Hello ${firstName} ${lastName}`);
  let a = 5;
  console.log(a);
  console.log("Musa");

}//!==>We can write this function without curly brackets id we have one line of method code

const printArrowFunctionOneLine = (name)=> console.log(`${name}`)
printArrowFunctionOneLine("Musa");
//But if we have more than 1 lines of method code and if we didnt insert this codes inside of curly brackets the code will work but with thw wrong line

printFunctionParameter("Musa","Khalilov");

//TODO==> We can delete the parameter brackets if we have one parameter in the function for example
const printArrowFunction = firstName=> console.log(`Hello ${firstName}`)

printArrowFunction("Musa")

const findCube = (x)=>{
  return x*x*x
}//!==>We also can delete the return in this method if we do one line of code and returning it for example:

console.log("value" , findCube(3))

const findCubeSimpler = x=> x*x*x

console.log("Value" , findCubeSimpler(3))

document.addEventListener("click" , ()=>{
  console.log("Hello");
});