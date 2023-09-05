//!Arrays using


let number = [0,1,2,3,4,5,'Musa',7,8,9,'Mamed'];

console.log(number[6]);
console.log(number[10]);

//!----> if we call a index that not exist the computer will tell us this index is undefined for example:

console.log(number[15]);//!====> Undefined

//!====>If we want to change any value in the arrays:

number[10] = "Mehemmed";//TODO: this will change the value in the 10th index.

console.log(number[10]);//?====>Mehemmed

console.log(number[number.length - 1]);//!=====>mehemmed
//TODO: The length of our array was 11 and we add -1 to it now, it represents 10th index.We can use this technique for calling the last element in the array.


let newLine = "\r\n";
let processNumbers = Number(prompt('Please select a process number : ' + newLine + '1-Index names' + newLine + '2-change a name in any index '));

let names = ["Musa","Murad","Mehemmed","Rustam"];

if(processNumbers == 1){
  let arrayNumbers = Number(prompt('Please enter your index :'));

  alert('Welcome' +" "+ names[arrayNumbers]);
  
}else if(processNumbers == 2){
  let changeIndexNumber = Number(prompt('Please select your index number you want to change :'));
  let changeIndexName = prompt('Please enter your new name :');

  names[changeIndexNumber] = changeIndexName;
  alert(`You changed your ${[changeIndexNumber]}th index name to ${[changeIndexName]} succesfully`);
}

