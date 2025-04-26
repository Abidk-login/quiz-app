// Email for contact: abii33157@gmail.com

// Sample Questions
const questions = [
    {
      question: "What is the capital of Pakistan?",
      options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
      answer: "Islamabad"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    },
    {
      question: "What language is used to style web pages?",
      options: ["HTML", "Python", "CSS", "JavaScript"],
      answer: "CSS"
    }
  ];
  
  // DOM Elements
  const startBtn = document.getElementById('start-btn');
  const nextBtn = document.getElementById('next-btn');
  const restartBtn = document.getElementById('restart-btn');
  const startScreen = document.getElementById('start-screen');
  const quizScreen = document.getElementById('quiz-screen');
  const resultScreen = document.getElementById('result-screen');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options');
  const scoreText = document.getElementById('score-text');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Start Quiz
  startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
  });
  
  // Show Question
  function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
  
    currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', selectOption);
      optionsContainer.appendChild(button);
    });
  }
  
  // Option Selected
  function selectOption(e) {
    const selectedOption = e.target.textContent;
    if (selectedOption === questions[currentQuestionIndex].answer) {
      score++;
    }
    nextBtn.style.display = 'block';
  }
  
  // Next Question
  nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    nextBtn.style.display = 'none';
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  // Show Result
  function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    scoreText.textContent = `Your Score: ${score} / ${questions.length}`;
  }
  
  // Restart Quiz
  restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
  });
  