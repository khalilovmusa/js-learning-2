//!------FOR LOOP SIMPLE PRACTISE------


//count to 1 to 10

for(let i =1; i<=100; i++) {
  console.log(i);
}

//count pairs from 1 to 10

for(let x = 0; x<=10; x+=2){
  console.log(x);
}

for (let y = 1; y<=10; y+=2) {
  console.log(y);
}

for(let z=1; z<=10; z++) {
  if(z%2===1){
    console.log('Musa');
  } else {
    console.log('Necesen');
  }
}

//Count back from 50 to 1 and calculate

calculationTotal = 0;
for(let a = 50; a>=1; a--) {
  calculationTotal += a;
  console.log(a);
}

console.log(`Total : ${calculationTotal}`);