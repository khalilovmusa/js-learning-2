//!==>keyboard events

//keypress

//keydown

//keyup

document.addEventListener("keypress" , run);//!==> Keypress can't read capslock numlock or arrows that you pushed but keydown can this is the only difference between keypress and keydown

document.addEventListener("keydown" , run);//!==> This code works on every one of the keys

document.addEventListener("keyup" , run);//!==> This code runs when we release the button we pushed

function run (e){
  console.log(e.type);
  console.log(e.key);//!==> This code catches the key that you pushed
  console.log(e.keyCode);//!==> Ascii Table
  console.log(e.which)//!==> Also ascii table
}