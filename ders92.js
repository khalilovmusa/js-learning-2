//!==> Destructing use

let langs = ["C#", "C++", "JavaScript", "Phyton"];
let lang1, lang2, lang3, lang4;

// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2];
// lang4 = langs[3];

[lang1,lang2,lang3,lang4] = langs

console.log(lang1, lang2, lang3, lang4);

const calculate = (a,b)=>{
  const plus = a+b;
  const minus = a-b;
  const times = a*b;
  const divide = a/b;

  const array = [plus , minus , times , divide];
  return array;

}

let[a,b,c,d] = calculate(10,2);

console.log(a,b,c,d);


//With objects

const person = {
  firstName : "Musa",
  lastName : "Khalilov",
  salary : 100,
  age : 18

}

// let name, surname, salary, age;

// firstName = person.firstName;
// surname = person.lastName;
// salary = person.salary;
// age = person.age;

//?==>We use destructing with the curly brackets in objects 

 let {firstName , lastName , salary , age} = person;
//!==>We have to use this keywords same as the object's keywords
//TODO==>If we want to give the value to another keyword in that case we'll do this for example: firstName:name, lastname:surname, salary:maas, age:yas

let {firstName:name, lastName:surname, salary:maas, age:yas} = person;


console.log(firstName , lastName , salary , age);
console.log(name, surname, maas, yas);