//!<-------Array Methods-------->

//?These are the most used methods in arrays
//?Bunlar arraylarde en sık kullanılan metodlardır
/*
push : adds an element to the end of the array , besides it returns the length of the array
unshift : add an element to the beginning of the array , besides it returns the element number

pop : deletes an element from the end of the array , returns the element number
shift : deletes an element from the beginning of the array , returns element number

splice(index,incdex) : used for adding or deleting an element

toString : we can change the array to the string
join : also changes the array to the string. The difference between toString and join is : with join we can add elements between

concat : used for attach arrays to each other
slice : used for slice the array wherever we want and creates another array with it
length : gives us the length of the array
reverse : reverses the elements of array
split : (belirli ifadeye gore bolup diziye cevirmek)
indexOf : gives the index of an element in the array
includes : looks if the given element is in the array or not

*/

/*
TODO: Turkce

push :dizinin sonuna eleman ekler ayrıca dizinin uzuluğunu döner
unshift : dizinin başına eleman ekler ayrıca dizinin eleman sayısını geriye döner

pop: dizinin sonundan eleman siler eleman sayısını döner
shift: dizinin başından eleman siler eleman sayısını geriye döner

splice(index,incdex) : eleman eklemek ve silmek için kullanılır.

toString : diziyi stringe çevirmek için kullanılır
join : diziyi stringe çevirir farkı ise araya eleman ekleyebiliriz

concat: dizileri birleştirmek içiin kullanılır
slice(dilimlemek): diziyi istenilen yerden bölüp yeni bir dizi oluşturur
length: dizinin uzunluğunu verir
reverse : dizinin elemanlerını ters çevirir
split(bölmek): belirli bir ifadeye göre bölüp diziye çevirmek.
indexOf: elemanın index numarasını verir.
includes: verilen elemanı içeriyor mu ona bakar 

*/

let cars = ["bmw","toyota","mercedes","porche","reanult"];

//!<------Push method----->
/*
function push(let value){
  //adds the value to the array
  return length;
}
*/
//TODO : we must have to catch the returned length value for using it
let returnedLengthPush = cars.push("opel");

console.log(cars);

console.log(returnedLengthPush);


//!<--------Unshift method------>

let returnedLengthUnshift = cars.unshift("Rolls Royce");

console.log(cars);

console.log(returnedLengthUnshift);


//!<--------Pop method--------->

let returnedNamePop = cars.pop();

console.log(cars);

console.log(returnedNamePop);


//!<--------Shift method--------->

let returnedNameShift = cars.shift();

console.log(cars);

console.log(returnedNameShift);

//!<---------Splice method------->

//TODO: adding
cars.splice(2,0,"Rolls Royce");
//?====>the first number is the adding index
console.log(cars);

//TODO: deleting
cars.splice(0,2);
//?=====>the first number is the start of the deletion and second is the end of the deletion
console.log(cars);

//TODO: delete anything and add anything to anywhere
cars.splice(3,1,"Kawasaki");
//?======>the first number is the start of the deletion and second is the end of the deletion. The first number is also the index od the given element adding index
console.log(cars);

//!<---------toString method------>

//TODO: we'll use another array for this because this method changes the values to the string
let numberArray = [1,2,3,4,5,6,7];

let stringNumbers = numberArray.toString();
//?====>this returns us the stringed version of the array so we must have to catch it
console.log( stringNumbers);
console.log( typeof stringNumbers);


//!<--------join method----------->

let stringnumbers2 =  numberArray.join("-");
//?====>this also returns us the stringed version of the array so we must have to catch it
console.log(stringnumbers2);
console.log(typeof stringnumbers2);


//!<----------concat method-------->
//TODO: this method used for combine arrays togrther

let array1 = ["Musa","Murad"];
let array2 = ["Mamed","Rustam"];

let combinedArrays = array1.concat(array2);
//?====>this method combines 2 arrays and returns us its values
console.log(combinedArrays);


//!<----------slice method--------->
//TODO: this method is used for slice an array wherever we want and make another array with it

let newArray3 = ["Musa","Murad","Mamed","Rustam"];

let slicedArray = newArray3.slice(2,newArray3.length );
//?=====>this method returns a value so we have to catch it
console.log(slicedArray);

let slicedSecondArray = newArray3.slice(0,3);
console.log(slicedSecondArray);

//!<---------length -------->

console.log(cars.length);

//!<----------reverse method------->

console.log(cars);
let reversedCars = cars.reverse();
//?=====>this also can change it original array if you reverse the array and console log it it will be the same so you didnt have to catch it
//?=====>this returns us the value of the reversed cars so we have to catch it
console.log(reversedCars);

//!<----------split method-------->

let namesSplit = "Musa,Murad,Mamed";

let splitArrayReturn = namesSplit.split(",");

console.log(splitArrayReturn);
console.log(typeof splitArrayReturn);

//!<---------indexOf-------------->
//TODO:this gives the index of the element

let indexOf = cars.indexOf("porche");
//?====>if there is a value this return like index number of the element if the array didnt includes given element it return us like -1
console.log(indexOf);


//!<------------includes----------->

let resultIncludes = cars.includes("porche");
//?===>returns us like a boolean value
console.log(resultIncludes);

/*
if(result){
  console.log('includes');
}else{
  console.log('Not includes');
}
*/