//!<--------Function with parameters-------->

function print(name, surname) {
  console.log(name +" "+ surname);
}

print("Musa","Khalilov");
print("Mehemmed","Meherremov");




function cube (number){
  console.log(number*number*number);
}


cube(5);
cube(3);
cube(9);


let age = Number(prompt("Please enter your age"));

//!the function parameter name age is not same as the age above wich is a variable 

//?if you say why? . The functions are creates a scope (scope- means everything inside the function element will be inside if we created any variable inside a function it is not created on the code space it is only created inside the function.) and the parameter name is a completely different with the variables we must know that.


function check(age){ 

  //!We can use switch case/if else(like this one)/do-while and etc with function

  if(age >= 18){
    alert('You can take exam for the drivers licence');
  } else if(age < 18){
    alert("you can't take exam for your drivers licence.Because you're under the age of legal driving age")
  }
}

//TODO: a little note for this call method.We must call our methods  below our function.This does not mean it will not work above our function.It works above out function too but if we created any variable and if we use that variable inside our function logically we must set our variable first and call our function later of that.If we want our code work properly we must've call it this way
check(age);





//!=====>Little note for understand methods---> Anything with the round brackets is a method like we used before for example: parseInt();-->this is also a method wich is situated in window object.

//TODO====> Long story short ();---> means this is a method 