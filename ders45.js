//!<-----PERFECT NUMBER APP------>


//6  - 28  - 496

// 6 id can divided by 1 , 2 , 3 , 6 and add them together. if the result is 2 times bigger than the number this is called perfect number

/*
   

*/


let number = Number(prompt('Please enter your number'));
let divideTimes = 0;
function perfectNumber(number){

  for(let i = 1; i <= number ; i++){
    if(number%i === 0){
      divideTimes += i;
    }
  }

  if(divideTimes === number * 2){
    alert('this is a perfect number');
  }else{
    alert('this is not a perfect number');
  }


}

perfectNumber(number);