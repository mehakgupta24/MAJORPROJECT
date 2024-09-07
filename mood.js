const questions = [
    "How often do you feel sad or down?",
    "Do you have trouble sleeping at night?",
    "Are you feeling tired or fatigued most of the time?",
    // Add more questions here
];

let answers = [];
let currentIndex = 0;

const questionContainer = document.getElementById("questionContainer");
const submitButton = document.getElementById("submitButton");
const resultContainer = document.getElementById("resultContainer");

// Function to display current question
function displayQuestion() {
    questionContainer.innerHTML = `
        <div class="question">${questions[currentIndex]}</div>
        <input type="radio" name="answer" value="1" checked> Not at all<br>
        <input type="radio" name="answer" value="2"> Sometimes<br>
        <input type="radio" name="answer" value="3"> Often<br>
        <input type="radio" name="answer" value="4"> Always<br>
    `;
}

// Function to calculate mood result based on answers
function calculateResult() {
    const total = answers.reduce((acc, curr) => acc + parseInt(curr), 0);
    const average = total / answers.length;
    if (average < 2.5) {
        return "You seem to be in a good mood.";
    } else if (average >= 2.5 && average < 3.5) {
        return "You appear to be feeling neutral.";
    } else {
        return "You seem to be in a low mood. It's recommended to consult a doctor.";
    }
}

// Event listener for submit button click
submitButton.addEventListener("click", function() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        answers.push(selectedAnswer.value);
        currentIndex++;
        if (currentIndex < questions.length) {
            displayQuestion();
        } else {
            const result = calculateResult();
            resultContainer.innerHTML = `<div class="result">${result}</div>`;
            resultContainer.style.display = "block";
            submitButton.style.display = "none";
            if (result.includes("consult")) {
                resultContainer.innerHTML += `<button class="consult-button">Consult a Doctor</button>`;
                const consultButton = document.querySelector(".consult-button");
                consultButton.addEventListener("click", function() {
                    // Redirect to doctor consultation page or take appropriate action
                    window.location.href = "consulation.htm";
                });
            }
        }
    }
});

// Initial display of the first question
displayQuestion();
