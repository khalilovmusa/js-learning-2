/* 
    !-------------TYPE CHANGES----------
    ?primitive data types:
    strings,numbers,booleans,undefined and null.
    ?non-primitive data types:
    object , function

*/

let a = 5;
let b = "10";

console.log(a+b);//==> 510

let c = Number(b);

console.log(a + c);//==> 15

let d = parseInt("8");

let e = parseFloat("12.6");

console.log(d + e);


let result = true ;
console.log(result);
console.log(typeof result);

let result2 = String(true);
console.log(result2);
console.log(typeof result2);