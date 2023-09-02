//!------While Loop-------

/*
while(condition) {
  //codes


  //assign the value of counter
}
*/


//count from 1 to 10

let counter = 1;

while(counter <= 10) {
  
  console.log(counter);

  counter++;
}

//count evens from 0 to 10

let countEven = 0;

while(countEven <= 10) {
  console.log(countEven);

  countEven += 2;
}

//count odds from l to 10

let countOdd = 1;

while(countOdd <= 10) {

  console.log(countOdd);

  countOdd += 2;
}

let greetings = 1;

while (greetings <= 10) {
  if(greetings%2===1) {
    console.log('Hello');
  }else {
    console.log('Im Musa');
  }
  greetings++;
}

let sayac = 0;

while(sayac <= 10) {
  if(sayac%2===0 ) {
    console.log(sayac);
  } 

  sayac++;
}

let oddSayac = 1;

while (oddSayac <= 10) {
  if(oddSayac%2===1) {
    console.log(oddSayac);
  }

  oddSayac++;
}


let number = 1;
while(true) { //!---->This is an infinity loop we use this loop with breaks.
   console.log(number);
   if(number === 15) {
    break; //TODO------->We must've do this if we don't the loop wl be infinite.
   }

   number++;


}