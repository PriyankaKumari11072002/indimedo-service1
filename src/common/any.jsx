
// import React from 'react'

// const Any = () => {

//   return (
//     <div>any</div>
//   )
// }

// export default Any

function createExam(subject) {
    // Define a variable inside the outer function
    let examQuestions = [];

    // Inner function accessing outer variable
    function addQuestion(question) {
        // Push the question into the outer variable
        examQuestions.push(question);
        console.log(`Question added to ${subject} exam.`);
    }

    function conductExam() {
        console.log(`Welcome to the ${subject} exam!`);
        console.log(`Total questions: ${examQuestions.length}`);
        console.log('Answer the following questions:');

        // Loop through examQuestions array
        examQuestions.forEach((question, index) => {
            console.log(`Question ${index + 1}: ${question}`);
        });
    }

    return {
        addQuestion: addQuestion,
        conductExam: conductExam
    };
}


const jsExam = createExam('JavaScript');


jsExam.addQuestion('What is closure in JavaScript?');
jsExam.addQuestion('Explain the difference between var, let, and const.');


jsExam.conductExam();
