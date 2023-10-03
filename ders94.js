//For in - For of Loops

let names = ["Musa" , "Mamed" , "Mehman"];

//Old method
names.forEach(function(names){
  console.log(names);
});



names.forEach(name=>console.log(name));//!==>Arrow function shorten
//!==>for(let valueName in arrayName){}
for (let name in names){//?==>For remember this look to the in (shortcut of index)
  console.log(name);//TODO==>This loop gives us the index numbers of the elements in the arrays
}



for (let name in names){
  console.log(name , names[name]);

}


//!==>For of loop

for(let name of names){
  console.log(name);

}

for(let name of names){
  console.log(name , names.indexOf(name));
}

//TODO==>Long story short for in loop gives us the index of array , for of loop gives us the names of the array but if we want we can take both of them 