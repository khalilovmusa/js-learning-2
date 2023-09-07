//!<----string grade methods---->

let course = "              Modern web development course        ";
let time = "2023";

//charAt()
//concat()
//indexof()
//lastindexof()
//toUpperCase()
//toLowerCase()
//trim()
//slice()
//substring()
//replace()
//split()
//valueOf()
//startsWith()
//endsWith()

//!charAt()
let character = course.charAt(5);

console.log(character);

//!concat()

let combineStrings = course.concat(" ",time);

console.log(combineStrings);

//!indexof()

let findIndex = course.indexOf("M");

console.log(findIndex);

//!lastindexof()

let findLastIndex = course.lastIndexOf("course");

console.log(findLastIndex);

//!toUpperCase()

let upperCaseWord = course.toUpperCase();

console.log(upperCaseWord);

//!toLowerCase()

let lowerCaseWord = course.toLowerCase();

console.log(lowerCaseWord);

//!trim()

console.log(course);

console.log(course.trim());


//!slice()

console.log(course);

console.log(course.slice(10,20));

//!substring()

console.log(course);

console.log(course.substring(10,17));


//!replace()

console.log(course);

console.log(course.replace("Modern","Newest"));


//!split()

console.log(course);
let array = course.split(" ");
console.log(array);


//!valueof()

console.log(course.valueOf());


//!startsWith()
console.log(course);

console.log(course.startsWith(" "));

//!endsWith()

console.log(course);

console.log(course.endsWith(" "));