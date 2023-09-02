//!<-------Break and Continue Keywords-------->


//?lets count from 1 to 10 and break the loop from 9

let numberBreak = 1;
while(true) {
  console.log(numberBreak);

  if(numberBreak === 9){
    break;
  }
  numberBreak++;
}


//? continue

//!----->Continue breaks your code 1 time wherever you want to
//TODO: 1 2 3 4 5 6 7 9 10

let numberContinue = 0;

while(numberContinue <= 10) {
  numberContinue ++;
  if(numberContinue === 8){
    continue;
  }

  if(numberContinue > 10){
    break;
  }
  console.log(numberContinue);
}
