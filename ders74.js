//!==>Iinput events

//focus
//blur
//copy
//paste
//cut
//select


const todo = document.querySelector("#todoName");

// console.log(todo);
todo.addEventListener("focus" , run); //!==> This event works when we focus on any element on the page such as inputs
todo.addEventListener("blur" , run); //!==> This event works when we focus out any element on the page
todo.addEventListener("copy" , run); //!==> This event works when you copy anythins in the any element like input 
todo.addEventListener("paste" , run); //!==> This event works when you paste something into elements on the webpage
todo.addEventListener("cut" , run); //!==> This event woeks when you cut anything in the element
todo.addEventListener("select" , run); //!==> This event works when you select anything in the element

function run(e){
  console.log(e.type);
  
}