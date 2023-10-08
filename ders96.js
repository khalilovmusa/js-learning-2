//!==>SET usage ES6
//The difference of the set from the map is :If we give the set element a value we only can use it 1 time 

const set = new Set();

//Add method for giving value

set.add(true)
set.add(3.14)
set.add("Musa")
set.add("Musa")
set.add("Musa")
set.add("Musa")//!==>This will appear 1 in the set you can write this how much you want but that will not make any sense
set.add("Musa")
set.add("Musa")
set.add(7)
set.add({username: "Musa" , password : "1234"})
set.add([1,2,3,4])

console.log(set.size);

//Deleting an item

set.delete("Musa")
console.log(set.size)


//!==>Has-->This works exactly like includes()

console.log(set.has("Mehman"));
console.log(set.has("Musa"));
console.log(set.has(7));

//!==>For of loop

// for(let value of set){
//   console.log(value);
// }

// set.forEach(function(value){
//   console.log(value);
// });

set.forEach((value)=>console.log(value))

//Set to array

const values = Array.from(set);
console.log(values);


//Array to set

let array = [1,"Musa" , true,[1,2,3,4],15];

const newSet = new Set(array);
console.log(newSet);