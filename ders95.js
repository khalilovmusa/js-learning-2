//!==>Map --->key() value()

const map1 = new Map();

//Set
// map1.set(1,"Musa")
// map1.set(true,5)
// map1.set([1,2,3],{firstname : "Musa" , lastname: "Khalilov"})

let value;
map1.set(02,"Agdam")
map1.set(06,"Berde")
map1.set(90,"Baki")



//GET

console.log(map1.get(2));
console.log(map1.get(90));

const returnedValue = map1.get(06);
console.log(returnedValue);


//SIZE

value = map1.size;

//DELETE

value = map1.delete(06);//==>This turns us a boolean value

console.log(map1.size);
console.log(value)

//HAS==>We use this method for looking any value in our map this is like includes() property

console.log(map1.has(02));//!==>This also turns us a boolean value 
console.log(map1.has(04));

//TODO==> Using map with loops methods

for(let [key,value] of map1){//Destruncting
  console.log(key,value);
}

//!==>Destructing
let array = [04 , "Agcebedi"];
let [a,b] = array;
console.log(a,b);


const keys = Array.from(map1.keys());
console.log(keys);

keys.forEach((key)=>{
  console.log(key , map1.get(key));
})

for(let key of map1.keys()){
  console.log(key);
}

for(let values of map1.values()){
  console.log(values);

}

const values = Array.from(map1.values());

values.forEach((value)=>{
  console.log(value);
})


//!==>Changing map to an array

console.log(map1);//TODO==>We can change it to an array

const array1 = Array.from(map1);
console.log(array1);
console.log(typeof array1);

const array2 = [
  [02 , "Agdam"],
  [04 , "Agcebedi"],
  [06 , "Berde"],
  [90 , "Baki"]
]

array2.forEach((value)=>{
  console.log( value);

})

array2.forEach((value)=>{
  console.log(value[0]);//!==>This will return us the keys of the arrays

})

array2.forEach((value)=>{
  console.log(value[1]);//!==>This will return us values of the arrays

})


array2.forEach((key , value)=>{
  console.log(key , value);

})


//TODO==>Changing the array to the map

const array3 = [
  [02 , "Agdam"],
  [04 , "Agcebedi"],
  [06 , "Berde"],
  [90 , "Baki"]
]

const myMap = new Map(array3);
console.log(myMap);

const myArray = Array.from(myMap);
console.log(myArray);

let key = [1,2,3];

map1.set(key, "Array")

console.log(map1.get(key));