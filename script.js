// MCQ Questions
const questions = [
    {
      question: "When did I first texted you?(for the very FIRST time)",
      options: ["23 December 2021", "23 November 2021", "24 December 2021", "24 November 2021"],
      correctAnswer: 1
    },
    {
      question: "When did you reply to my texts?(FIRST time)",
      options: ["23 December 2021", "23 November 2021", "24 December 2021", "24 November 2021"],
      correctAnswer: 2
    },
    {
      question: "When did we FIRST started dating?",
      options: ["11 February 2021", "8 February 2022", "8 February 2021", "11 February 2022"],
      correctAnswer: 1
    },
    {
      question: "Which brand t-shirt did you gift me for the FIRST time?",
      options: ["Levi's", "MxM", "Adidas", "Nike"],
      correctAnswer: 1
    },
    {
      question: "When was our very FIRST kiss?",
      options: ["18 February 2022", "11 February 2022", "15 February 2022", "16 February 2022"],
      correctAnswer: 0
    },
    {
      question: "Which team's jersey did I give you?",
      options: ["AS Roma", "Man U", "Tottenham", "Juventus"],
      correctAnswer: 3
    },
    {
      question: "How much do I love you?",
      options: ["100", "100000", "100000000", "♾️+1"],
      correctAnswer: 3
    },
    {
      question: "How much do you love me?",
      options: ["0", "0.15", "0.78", "♾️+1"],
      correctAnswer: 1
    },
    {
      question: "Check and move on to next level!?",
      options: ["YES!", "no"],
      correctAnswer: 0
    }
  ];
  
  // Initialize score
  let score = 0;
  
  // Render MCQ Questions
  function renderQuestions() {
    const questionContainer = document.getElementById('questions');
    questionContainer.innerHTML = '';
  
    questions.forEach((question, index) => {
      const div = document.createElement('div');
      div.classList.add('question');
  
      div.innerHTML = `
        <p>${question.question}</p>
        ${question.options.map((option, i) => 
          `<label><input type="radio" name="q${index}" value="${i}"> ${option}</label>`
        ).join('')}
      `;
      
      questionContainer.appendChild(div);
    });
  }
  
  // Check MCQs and calculate score
  function checkMCQs() {
    const userAnswers = [];
    let isValid = true;
    score = 0; // Reset score
  
    questions.forEach((question, index) => {
      const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
      if (selectedOption) {
        userAnswers.push(parseInt(selectedOption.value));
        if (parseInt(selectedOption.value) === question.correctAnswer) {
          score++;
        }
      } else {
        isValid = false;
      }
    });
  
    if (!isValid) {
      alert("Please answer all the questions!");
      return;
    }
  
    if (score === questions.length) {
      window.location.href = 'questionnaire.html';  // Redirect to questionnaire page
    } else {
      alert("You didn't get all answers correct. The quiz will restart.");
      renderQuestions();  // Restart quiz if score is not 10/10
    }
  }
  
  // Initialize page
  renderQuestions();
  
