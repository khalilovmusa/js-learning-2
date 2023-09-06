//!<--------Try to do input search app myself--------->

let product1 = {
  name: "Asus gaming",
  price: 4.999

}

let product2 = {
  name: "Asus g15",
  price: 15.999

}

let product3 = {
  name: "Lenovo v14",
  price: 6.999
}

let product4 = {
  name: "Lenovo v15",
  price: 15.455

}

let product5 = {
  name: "Lenovo ideapad",
  price: 5.999
}

let productName = prompt("Please enter your product name :");

let products = [product1,product2,product3,product4,product5];
let searchedProductArray = [];


function filterArray (products) {
  products.forEach(function (product){
    if(product.name.toUpperCase().includes(productName.toUpperCase(),0)){
      searchedProductArray.push(product);
    }
  });
}

function printSearched (products){
  products.forEach(function(product){
    console.log("-------------------------");
    console.log(product.name + "|" + product.price + "|");
  });
}


filterArray(products);
printSearched(searchedProductArray);