//!<--------DATE usage------->


let date = new Date();

//console.log(date);

console.log(date.getFullYear());

console.log(date.getDate());

console.log(date.getDay());

console.log(date.getHours());

console.log(date.getMilliseconds());

console.log(date.getMinutes());

console.log(date.getMonth());//!Months starts from zero
console.log(date.getMonth()+1);//! We can use it this way 

console.log(date.getSeconds());

console.log(date.toLocaleDateString());

console.log(date.toLocaleTimeString());

console.log(date.toLocaleDateString() +" " + date.toLocaleTimeString());//! If we want like this date we use:
console.log(date.toLocaleString());

//!Set methods

//setdate
console.log(date);
date.setDate(9);

console.log(date);

//settime

date.setHours(3);
console.log(date);

//setmonth

date.setMonth(11);
console.log(date);

//setminutes

date.setMinutes(50);
console.log(date);


date.setHours(date.getHours()+2);
console.log(date);

//tostring

console.log(typeof date);
console.log(typeof date.toString());


let birthDay = new Date(2005,06,09,5,30,40,30,);

console.log(birthDay);
console.log(typeof birthDay);