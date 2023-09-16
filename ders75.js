//!==>Session storage usage

//?==> We have two ways to store our moves in the storage the first way is session storage and the second way is local storage the usage of this storages is exactly the same the ONLY difference between this storages is session storage deletes the elements ind=side it when we refresh the page or close the page but local storage doesnt do that it doesnt matter how many storage element in there it never deletes the items in it even we turn off our computer 

console.log(window);

//Adding value to the storage
sessionStorage.setItem("350" , "Musa");
sessionStorage.setItem("351" , "Mamed");
sessionStorage.setItem("352" , "Mehman");

//Deleting value
// sessionStorage.removeItem("351"); 

//Gettimg an item
const value = prompt("Please enter your id");

let valueStorage = sessionStorage.getItem(value);
if(valueStorage == null){
  alert("f");
}else{
  alert(`T : ${valueStorage}`);

}

//clear all values
//?==>sessionStorage.clear();

//!==> We can set an array in the session storage for example

let array = ["Musa" , "Mamed" , "Murad" , "Mehman" ];

// sessionStorage.setItem("names" , array);
sessionStorage.setItem("names" , JSON.stringify(array));//TODO==>This code takes the array  and changes it into a string includung brackets and etc..

let arrayStorage = JSON.parse(sessionStorage.getItem("names"));//TODO==> This json method changes your strings into an array
arrayStorage.forEach(function(name){
  console.log(name);

})
console.log(arrayStorage);
