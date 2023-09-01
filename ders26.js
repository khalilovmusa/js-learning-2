//!-------UNI EXAM POINT CALCULATOR------


/*

 ?questions
 1-English 40 --each question 4 points
 2-Math 40
 3-Social knowledge 20
 4-religion knowledge


 ---->100 points from OSYM
 ---->The scool max gives 60 points

 */

let englishTrue , englishFalse= 0;
let mathTrue , mathFalse= 0;
let socialTrue , socialFalse= 0;
let religionTrue , religionFalse= 0;

let newLine ="\r\n";

let message1 = "Welcome to the point calculator app" + newLine 
+ "1-Calculate points." + newLine 
+ "2-Log out.";

let chose1 = Number(prompt(message1));

switch (chose1) {

  case 1:
    //calculation
    let subjectText = "Please choose your subject for point calculation:"+newLine +
    "1-English"+newLine 
    +"2-Math" +newLine
    +"3-Social skills" + newLine 
    +"4-Religion knowledge";

    let subjectChose = Number(prompt(subjectText));

    if (subjectChose === 1) {
      let englishTrue = Number(prompt('You selected English subject please enter your true questions in English(Each question is 4 points):'));
      let englishFalse = Number(prompt('Please enter your false questions(Each 4 false questions delete a question from you trues):'));
      if (englishTrue + englishFalse === 40) {

        let calculationEnglish = (englishTrue - (englishFalse / 4)) * 4;
        let deletedQuestionsEnglish = englishFalse/4;
  
        let result = calculationEnglish;
        let resultMessage = `Your false questions : ${englishFalse}` + newLine
        + `Your true questions : ${englishTrue}` + newLine
        +`Deleted true questions : ${deletedQuestionsEnglish}`+newLine
        + `Your result : ${result}points`;

       alert(resultMessage);
      } else {
        alert('There is 40 questions in English subject.Please enter your true and false questions correctly.');
      } 
    } else if (subjectChose === 2) {
      let mathTrue = Number(prompt(`You selected Math subject to calculate your math points.Enter your true questions number from the math subject(Each true gives you 5 point):`));

      let mathFalse = Number(prompt(`Enter your false question number to the below(Each 4 false questions deletes a true question from your trues):`));
      if (mathTrue + mathFalse === 40) {
        let calculationMath = (mathTrue - (mathFalse / 4)) * 5;
        let deletedQuestionsMath = mathFalse / 4;
  
        alert(`Your false questions : ${mathFalse}` + newLine + 
        `Your true questions : ${mathTrue}` + newLine + 
        `Your deleted questions : ${deletedQuestionsMath}` + newLine + 
        `Your math point is : ${calculationMath}`);
      } else {
        alert("The math subject's question number is 40.Please enter your true and false questions number correctly.");
      }

    } else if (subjectChose === 3) {
      let socialTrue = Number(prompt(`You selected social skills subject.Please enter your number correct answers(Each question is 3 points):`));

      let socialFalse = Number(prompt(`Enter your number of incorrect questions(Each 3 incorrect question deletes a true question):`));

      if (socialTrue + socialFalse === 50) {

        let calculationSocial = (socialTrue - (socialFalse / 3)) * 3;
        let deletedQuestionSocial = Math.round(socialFalse / 3);

        alert(`Your number incorrect answers is : ${socialFalse}.` + newLine +
        `Your number of correct answers is : ${socialTrue}.` + newLine + 
        `Your number of deleted correct answers is : ${deletedQuestionSocial}.` + newLine +
        `Your social skills point is : ${calculationSocial}.`);

      } else {
        alert('The question number of social skills subject is 50. Please enter your correct and incorrect numbers of questions correctly.');
      }
    } else if (subjectChose === 4) {
      let religionTrue = Number(prompt(`You selected religion knowledge subject. Please enter your number of correct answers(Each question is 3 points):`));

      let religionFalse = Number(prompt(`Enter your number of incorrect answers(Each 4 incorrect answer deletes a correct answer):`));

      if (religionTrue + religionFalse === 40) {

        let calculationReligion = (religionTrue - (religionFalse / 4)) * 3;
        let deletedQuestionsReligion = religionFalse / 4;

        alert(`Your number of incorrect answers is : ${religionFalse}.` + newLine + 
        `Your number of incorrect answers is : ${religionTrue}.` + newLine +
        `Your number of deleted answers is : ${deletedQuestionsReligion}.` + newLine +
        `Your religion knowledge point is : ${calculationReligion}.`);
      } else {
        alert(`The religion knowledge subject's question number is 40.Please enter your correct and incorrect answers correctly.`);
      }
    }
  break;

  case 2:
    alert('You log out from your account succesfully.');
  break;

  default:
    alert('Please enter a valid process number.');
  break;
}