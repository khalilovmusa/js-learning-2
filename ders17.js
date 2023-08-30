let note = Number(prompt('Please write down your note:'));

if (note > 100) {
  alert("This note doesn't exist. Maximum note point is: 100. Try again");
} else if (note < 0) {
  alert("This note doesn't exist. Minimum note point is: 0. Try again");
} else {
  if (note >= 80) {
    alert('Congrulations you passed the exam with a good grade. Your note' + `${note}`);
    console.log('You pass' + `Your note: ${note}`);
  } else if (note >= 50) {
    alert('You passed the exam but work harder for better result.' + `Your note:${note}`);
    console.log(`You passed. Your note: ${note}`);
  } else if (note <= 50) {
    alert("You couldn't pass the exam. You have to work a lot in this sumer." + `Your note: ${note}`);
    console.log('You didnt pass the exam');
  }
}

