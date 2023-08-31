//-----BODY MASS INDEX------


let height = Number(prompt('Please enter your height(in metres) : '));
let weight = Number(prompt('please enter your current weight : '));

let result = weight / (height*height);

//TODO: for calculate body mass use kq/m(square) 

bodyMass(height, weight);

function bodyMass(height, weight) {
  if (height != '' && weight != '') {
    if (result < 18.5) {
      alert('Your bodymass is lower than the ideal bodymass.' + `Your bodymass percentage ${Math.round(result)}%`);
      return;
    }
    if (result > 18.5 || result < 24.9) {
      alert('Your bodymass is ideal.' + `Your bodymass percentage ${Math.round(result)}%`);
      return;
    }
    if (result > 25 || result < 39.9) {
      alert('Your bodymass is higher than the ideal bodymass.' + `Your bodymass percentage ${Math.round(result)}%`);
      return;
    }
    if (result > 40) {
      alert(`You're obese do some exercises.` + `Your bodymass percentage ${Math.round(result)}%`);
    }
  } else if (height == '' && weight == '') {
    alert('Please enter your informations correctly.');
    return;
  }
  else if (height == '') {
    alert('Please enter your bodyheight correctly.');
  } else if (weight == '') {
    alert('Please enter your weight correctly.');
  }
}