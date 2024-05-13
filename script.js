
    const quizForm = document.getElementById('quiz-form');
    const incorrectResultsList = document.getElementById('incorrect-results');
    const correctResultsList = document.getElementById('correct-results');

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Clear previous results
        incorrectResultsList.innerHTML = '';
        correctResultsList.innerHTML = '';
        
        console.log("Form submitted!");
        
        const answers = {
    'q1': 'b', // Question 1 answer
    'q2': 'c', // Question 2 answer
    'q3': 'a', // Question 3 answer
    'q4': 'c', // Question 4 answer
    'q5': 'c', // Question 5 answer
    'q6': 'd', // Question 6 answer
    'q7': 'd', // Question 7 answer
    'q8': 'b'  // Question 8 answer
};


        let score = 0;
        const userAnswers = new FormData(quizForm);
        const userAnswersArray = Array.from(userAnswers.entries());

        console.log("User answers:", userAnswersArray);

        userAnswersArray.forEach(([question, answer]) => {
            if (answers[question] === answer) {
                score++;
            } else {
                const questionNumber = question.slice(1);
                const questionText = document.querySelector(`#quiz-form div:nth-of-type(${questionNumber}) p`).textContent.trim();
                const userAnswer = document.querySelector(`input[name=${question}]:checked`).parentNode.textContent.trim();
                const correctAnswer = document.querySelector(`input[name=${question}][value=${answers[question]}]`).parentNode.textContent.trim();
                const li = document.createElement('ul');
                li.innerHTML = `<strong>Question ${questionText}</strong><br>Your answer: ${userAnswer}<br>Correct answer: ${correctAnswer}<br><br>`;
                incorrectResultsList.appendChild(li);
            }
        });

        const totalQuestions = Object.keys(answers).length;
        const correctAnswers = totalQuestions - (userAnswersArray.length - score);
        const incorrectAnswers = userAnswersArray.length - score;

        // After displaying quiz results
document.getElementById('quiz-results').style.display = 'block';
document.getElementById('retry-btn').style.display = 'inline'; // Display retry button

// Event listener for retry button
document.getElementById('retry-btn').addEventListener('click', function() {
    // Reset quiz form
    quizForm.reset();
    // Clear quiz results
    incorrectResultsList.innerHTML = '';
    correctResultsList.innerHTML = '';
    // Hide quiz results and retry button
    document.getElementById('quiz-results').style.display = 'none';
    this.style.display = 'none';
});


        // userAnswersArray.forEach(([question]) => {
        //     const questionNumber = question.slice(1);
        //     const correctAnswer = document.querySelector(`input[name=${question}][value=${answers[question]}]`).parentNode.textContent.trim();
        //     const li = document.createElement('li');
        //     li.innerHTML = `<strong>Question ${questionNumber}:</strong> Correct answer: ${correctAnswer}`;
        //     correctResultsList.appendChild(li);
        // });

        document.getElementById('quiz-results').style.display = 'block';
    });
