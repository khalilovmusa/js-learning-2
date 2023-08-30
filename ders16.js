//-------DERS ORTAlAMASI BULMA-------

//vise %30 , vize2 30% final %40

let note1 = Number(prompt('Vize 1 notunuzu giriniz:'));
let note2 = Number(prompt('Vize 2 notunuzu giriniz:'));

let final = Number(prompt('Final notunuzu giriniz:'));


let avarage = (note1 * 0.3) + (note2 * 0.3) + (final * 0.4);

if (avarage >= 60) {
  alert('Congrulations you passed the exam.Your avarage point:' + avarage);
} else {
  alert ('You counldnt pass the exam. Work harder. Your avarage point:' + avarage);
}