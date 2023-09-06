//!<------------PRODUCT FİNDER APP--------->




let product1 = {
  name : "ACER Swift",
  category : "Technology",
  price : 6.219
}

let product2 = {
  name : "ACER Nitro5",
  category : "Technology",
  price : 15.999
}

let product3 = {
  name : "ACER Gaming",
  category : "Technology",
  price : 13.999
}

let product4 = {
  name: "Lenovo V15",
  category: "Technology",
  price: 10.999
}

let product5 = {
  name : "Lenovo ideapad",
  category: "Technology",
  price: 4.399
}

let product6 = {
  name: "Lenovo v14",
  category: "Technology",
  price: 9.999
}

//TODO: Now we want to put these products into an array

let products = [product1,product2,product3,product4,product5,product6];
let filterProducts = [];
let productName = prompt('Please enter your product name :');

getFilterProducts(products);
printFilterProducts(filterProducts);

function getFilterProducts(products){
  products.forEach(function(product){
    if(product.name.toUpperCase().includes(productName.toUpperCase(),0)){
     filterProducts.push(product);
    }
 });
 
}

function printFilterProducts(products){
  products.forEach(function(product){
    console.log("--------------------------------------");
    console.log("|" + product.name + "|" + product.price)
    console.log("--------------------------------------");
  })
}