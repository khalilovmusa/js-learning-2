let choosenPath = prompt('Please select a road number from 1 to 3:');


if (choosenPath <= 0) {
  alert('This road is not avaliable. Please try again');
} else if (choosenPath >= 4) {
  alert('This road is not avaliable. Please try again');
}else {
  if (choosenPath === '1') {
    alert('You selected path ' + `${choosenPath}.`);
  } else if (choosenPath === '2') {
    alert('You selected path ' + `${choosenPath}.`);
  } else if (choosenPath === '3') {
    alert('You selected path ' + `${choosenPath}.`);
  }
}