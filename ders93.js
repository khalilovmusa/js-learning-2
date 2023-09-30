//!==>Spread operator (...)

let numbers =[10,20,30,40];
function add(a,b,c,d){
  console.log(a+b+c+d);
}


//?==>Old method
add(numbers[0],numbers[1],numbers[2],numbers[3]);


//?==>New method

add(...numbers);

//TODO==>Explanation of this code

//!===> ...numbers --- numbers[0],numbers[1],numbers[2],numbers[3]



//TODO==>More examples

const langs1 = ["Java" , "C#"];
//const langs2 = ["Php" , "Phyton" , langs1[0] , langs1[1]];//!==>The old way
const langs2 = ["Php" , "Phyton" , ...langs1];//?==>The new way

console.log(langs2);


const number = [1,2,3,4,5,6,7,8,9];

let [a,b, ...leftNumbers] = number;

console.log(a,b,leftNumbers);


//TODO==> Copying an array

const array1 = ["Musa" , "Mamed" , "Murad" , "Mehman"];
//The old way
// array2[0] = array1[0]
// array2[1] = array1[1]...
const array2 = [...array1];


console.log(array2);