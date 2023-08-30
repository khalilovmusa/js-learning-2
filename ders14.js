//! ------ conditional structures -------

/* 
  if(condition) {
    ?codespace
  } else if(another condition) {
    ?another codespace
  } else {
    ?another codespace
  }
*/

let question = confirm("Did you pass the exam?");


if (question === true) {
  let note = prompt("how many questions did u answer?");
  if (note >= 50) {
    alert("congrulations you passed the exam");
  } else {alert("work harder");
}
} else if(question === false) {
  alert("work harder");
}