window.onload = function () {
  
  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {
    
     clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  

}

let count = 0
const value = document.querySelector('#value')
const btns= document.querySelectorAll(".btn")
btns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")){
      count--;
    }else if(styles.contains("increase")){
      count++;
    }else{
      count= 0;
    }
    if(count>0){
      value.style.color= "green";
    }
    if(count<0){
      value.style.color= "red"
    }
    if(count===0){
      value.style.color= "black"
    }
    value.textContent= count;
  })

})
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
    
      button.dataset.correct = answer.correct
   
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'How many times does the average person laugh in a day?',
    answers: [
      { text: '13', correct: true },
      { text: '22', correct: false },
      { text: '18', correct: false},
    ]
  },
  {
    question: ' What is the Italian word for pie?',
    answers: [
      { text: 'Picas', correct: false },
      { text: 'picasso', correct: false },
      { text: 'pizza', correct: true },
    
    ]
  },
  {
    question: 'How many months have 28 days in them?',
    answers: [
      { text: '12', correct: true },
      { text: '1', correct: false},
      { text: '4', correct: false}
    ]
  },
  {
    question: 'True or false: You can sneeze in your sleep?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: false },
      { text: 'Um no', correct: true },
     
    ]
  },
  {
    question: 'What is the collective noun for a group of pandas?',
    answers: [
      { text: 'troop', correct: false },
      { text: 'embarassment', correct: true },
      { text: 'bunch', correct: false },
    ]
  },
  {
    question:  'In Georgia (the state), it’s illegal to eat what with a fork?',
    answers: [
      { text: 'sphagetti', correct: false },
      { text: 'bananas', correct: false},
      { text: 'fried chicken', correct: true },
     
    ]
  },
  {
    question: 'Who is NOT a god in the greek methology?',
    answers: [
      { text: 'poseidon', correct: false },
      { text: 'Hadish', correct: true },
      { text: 'Aphrodite', correct: false },
     
    ]
  },
  {
    question: 'Which sea creature has three hearts?',
    answers: [
      { text: 'Seal', correct: false },
      { text: 'octopus', correct: true },
      { text: 'crab', correct: false },
     
    ]
  },
  {
    question: "Madonna's real name is Madonna?",
    answers: [
      { text: 'false', correct: false },
      { text: 'true', correct: true },
    ]
     
  },
  {
    question: 'Ariana Grande is 25 years old or under',
    answers: [
      { text: 'true', correct: false },
      { text: 'false', correct: true },
    
    ]
  },

]


