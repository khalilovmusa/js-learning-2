//!--More simpler exam point calculator

/*
 1-English 40 --each question 4 points
 2-Math 40 --each question 4 points
 3-Social knowledge 20 --each question 4 points
 4-religion knowledge --each question 4 points


 ---->100 points from OSYM
 ---->The scool max gives 60 points

*/

let englishTrue , englishFalse = 0;
let mathTrue , mathFalse = 0;
let socialTrue,socialFalse = 0;
let religionTrue,religionFalse = 0;

let newLine = "\r\n";

let message = "Welcome to the point calculator app." + newLine +
"1-Point calculator." + newLine + 
"2-Log out from the account.";

let choice = Number(prompt(message));

switch (choice) {
  case 1:
    //!--------GETTING INFORMATION FROM THE USER------------

    let schoolPoint = Number(prompt(`Please enter your school point(max: 60)`));

    englishTrue = Number(prompt('Please enter the number of your correct answers in English:'));
    englishFalse = Number(prompt('Please enter the number of your incorrect answers in English:'));

    mathTrue = Number(prompt(`Please enter thr number of your correct answers in Math:`));
    mathFalse = Number(prompt(`Pease enter the number of your incorect answers in Math:`));

    socialTrue = Number(prompt(`Please enter the number of your correct answers in Social skills:`));
    socialFalse = Number(prompt(`Please enter the number of your incorrenct answers in Social skills:`));

    religionTrue = Number(prompt(`Please enter the number of your correct answers in Religion subject:`));
    religionFalse = Number(prompt(`Please enter the number of your incorrect answers in Religion subject:`));

    //!-----CALCULATION PART--------
    if (schoolPoint <= 60 && englishTrue + englishFalse <= 40 && mathTrue + mathFalse <= 40 && religionTrue + religionFalse <= 40 && socialTrue + socialFalse <= 40) {

      let correctAnswersTotal = englishTrue + mathTrue + socialTrue + religionTrue;
      let incorrectAnswersTotal = englishFalse + mathFalse + socialFalse + religionFalse;
  
      let calculationPoint = ((correctAnswersTotal - (incorrectAnswersTotal / 4)) * 4);
      let calculationTotal = calculationPoint + 100;

      let emptyAnswers = (40-(englishTrue + englishFalse)) + (40-(mathTrue + mathFalse)) + (40-(religionTrue + religionFalse)) + (40-(socialTrue + socialFalse));
  
      alert (`The number of your total correct answers : ${correctAnswersTotal}` + newLine + 
      `The number of your total incorrect answers : ${incorrectAnswersTotal}` + newLine + 
      `The number of blank answers : ${emptyAnswers}`+ newLine +
      `Your exam point is : ${calculationPoint}` + newLine + 
      `Your OSYM point is : 100` + newLine +
      `Your school point is : ${schoolPoint}` + newLine + 
      `Your final exam point is : ${calculationTotal}`);
    } else {
      alert('Please enter your correct and incorrect answers correctly.(The max school point is 60, and each subject has 40 questions)');
    }


    break;

  case 2:
    alert(`You log out from your account sucesfully.`);
    break;

  default: 
    alert(`Please enter a valid process number.`);
    break;
}