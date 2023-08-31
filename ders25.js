//! SWITCH CASE -practise
//? ATM Machine

/*
TODO: 1-Rewiew current balance
TODO: 2-Money withdraw
TODO: 3-Money deposit
TODO: 4-Log out

*/

let newLine = "\r\n";

let currentBalance = 1000;

let text = '1-Rewiew current balance' + newLine
  + '2-Money withdraw' + newLine
  + '3-Money deposit' + newLine
  + '4-Log out' + newLine
  + 'Please select a procces.';

let process = prompt(text);

switch (process) {
  case '1':
    alert(`Your current balance : ${currentBalance}TL`);
    break;

  case '2':
    let withdraw = Number(prompt('Enter your withdraw amount (In TL) :'));

    if (withdraw < currentBalance) {
      let laterWithdraw = (currentBalance - withdraw);
      alert(`You drawed ${withdraw}TL. Your current balance is : ${laterWithdraw}TL`);
    } else if (withdraw > currentBalance) {
      alert('Your balance is not capale for this amount money.Try again with the lower amount');
    }
    break;

  case '3':
    let depositAmount = Number(prompt(`Please enter your deposit amount :`));
    currentBalance = (currentBalance+depositAmount);

    alert(`You deposited ${depositAmount}TL.` + newLine + `Your current balance is ${currentBalance}TL`);
  break;

  case '4':
    alert('You log out sucesfully.');
    break;
}
