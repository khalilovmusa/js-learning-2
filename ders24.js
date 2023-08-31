//!----Switch case practise----

let newLine = "\r\n";
let text = '1-Monday'+ newLine
+ '2-Tuesday'+ newLine
+ '3-Wednesday'+ newLine
+ '4-Thirsday'+ newLine
+ '5-Friday' + newLine
+ '6-Saturday'+ newLine
+ '7-Sunday' + newLine
+'Please select a day of the week';

let value = prompt(text);

switch (value) {

  case '1':
    alert('You selected Monday');
  break;

  case '2':
    alert('You selected Tuesday');
  break;

  case '3':
    alert('You selected Wednesday');
  break;

  case '4':
    alert('You selected Thirsday');
  break;

  case '5':
    alert('You selected Friday');
  break;

  case '6':
    alert('You selected Saturday');
  break;

  case '7':
    alert('You selected Sunday');
  break;

  default:
    alert('Please select a valid week day');
  break;
}