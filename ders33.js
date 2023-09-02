//!------DO-WHILE LOOP-------

/*
TODO:
 do{
  //codes

}while(condition);

*/

//Practise

//?count from 1 to 10

let number = 1;

do{

  console.log(number);
  
  number++;
}while(number <= 10);


let greetings = 1;

do{

  if(greetings%2===1){
    console.log('Hello');
  } else {
    console.log('Musa');
  }
  greetings++;

}while(greetings <= 10);

//?count evens from 0 to 10

let countEven = 0;

do{
   if(countEven%2===0){
    console.log(countEven);
   }
   countEven+=2;
}while(countEven <= 20);

//?count odds from 1 to 10

let countOdd = 0;

do{
   if(countOdd%2===1){
    console.log(countOdd);
   }
   countOdd++;
}while(countOdd <= 10);

/*
for(let counter = 1; counter<=10; counter++){
  console.log(counter);
}*/

//!-----> The mai difference between while and do-while loop is even if your condition is false do-while loop will run your code for 1 time. But for the while loop this is impossible

let a = 0;

do{
  console.log(a);
}while(a >=1 );

let age = 18;

while(age >= 25){
  console.log(age);

}

//?calculate the total of odd numbers from 1 to 20

let oddCounter = 1;
let resultOdd = 0;

do{
  if(oddCounter%2===1){
    console.log(oddCounter);
    resultOdd += oddCounter;
  }
  oddCounter+=2;
}while(oddCounter <= 20);

console.log(`Total: ${resultOdd}`);


//?calculate the total of even numbers from 0 to 20

let evenCounter = 0;
let resultEven = 0;

do{
   if(evenCounter%2===0){
    console.log(evenCounter);
    resultEven+=evenCounter;

   }
   evenCounter+=2;
}while(evenCounter <= 20);

console.log(`Total : ${resultEven}`);
