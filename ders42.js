//!<-----function with return----> (note: use tooltip)

//? before this lesson we said functions create scope and thats why if we save a number or anything to the variable inside a function it'll be only reachable inside the function thats what scopes do

//TODO:And this is when return gets into to our code if we want to use our variable r something else that we created inside the function which is we can't reach it outside 


let number = Number(prompt('Please enter your number to find its cube'));
//2

function cube(number){
  let result = number * number * number;
  let squareResult = square(result);//===>We can use function ind=side another function
  console.log(squareResult);

  //return result;
  //!the return is used like this we call it and give it a variable wich we want to use outside of our variable and it will be return that variable to where we called the function.
}

function square(number){
  let result = number * number;
  return result;
}

let returnedValue = cube(number);
alert(`Your number's cube is equals to : ${returnedValue}`);

//square(returnedValue);


//!--> quick note for the return is the return works a little bit like break because if you write anything later return it'll be unreachable code 

//? we name the functions (wich is not returns any value) void

//!<----------practise till you master these codes!!!!!!--------->