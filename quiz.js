(function (){

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('quiz_submit');

const myQuestions = [
  {
    question: "What is your favorite subject in School?",
    answers: {
      a: "How can I pick just one?", 
      // {
      //   house: "Ravenclaw"
      // }
      b: "Lunch",
      // {
      //   house: "Hufflepuff"
      // },
      c: "History or Civics",
      // {
      //   house: "Slytherin"
      // },
      d: "PE, or anything physical",
      // {
      //   house: "Gryffindor"
      // }
    },
    ravenclawAnswer: '${letter} a',
    gryffindorAnswer: '${letter} d',
    hufflepuffAnswer: '${letter} b',
    slytherinAnswer: '${letter} c'

  },
  {
    question: "You are challenged to a Wizard's duel. What is your spell of choice?",
    answers: {
      a: "An obscure spell you found in a textbook that prevents them from casting",

      b: "Disarm them, you don't want to fight",

      c: "A spell that will hurt them, so they don't challenge you ever again",
        
      d: "Knock them down, end the fight quickly"
       
    },
    ravenclawAnswer: '${letter} a',
    gryffindorAnswer: '${letter} d',
    hufflepuffAnswer: '${letter} b',
    slytherinAnswer: '${letter} c'
  },
  {
    question: "You forgot to study for a test in charms class, what do you do?",
    answers: {
        
      a: "This question is ridiculous, I never forget to study",
      b: "Try my hardest to do well, and see if I can get extra credit later if I bomb.",
      c: "Get a little help by peeking on your neightbor's test", 
      d: "Wing it. Who really needs charms anyway?"
        
    }, 
       
    ravenclawAnswer: '${letter} a',
    gryffindorAnswer: '${letter} d',
    hufflepuffAnswer: '${letter} b',
    slytherinAnswer: '${letter} c'
  },

  {
    question: "It's career day, what pamphlet interests you most?",
    answers: {
      
      a: "Wizarding Education: Professors, aides and general know-it-alls",
       
      b: "Muggle Relations: They may be stupid, but they're sweet",

      c: "Magical governing and law: You're important, and your cool badge confirms it",
      
      d:  "Aurors: Catching bad wizards, coining cool catchphrases"
       
    },

    ravenclawAnswer: '${letter} a',
    gryffindorAnswer: '${letter} d',
    hufflepuffAnswer: '${letter} b',
    slytherinAnswer: '${letter} c'
  
  }
];

function buildQuiz(){
  const output = [];
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      const answers = [];
      for(letter in currentQuestion.answers){
        answers.push(
          `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]} 
          </label>`
          );
        }
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>` 
        
        );
      }
    );
  quizContainer.innerHTML = output.join('');
}
 // first: see that the value of the house is there
 // second: push those values into some array upon submit
 // third: count all the instances of that house in the array


function showResults(){
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numRavenclaw = 0;
  let numGryffindor = 0;
  let numHufflepuff = 0;
  let numSlytherin = 0;
  myQuestions.forEach( (currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'+questionNumber+']:checked'; 
    const userAnswer = (answerContainer.querySelector(selector) || {})

    // if(userAnswer===currentQuestion.ravenclawAnswer){
    //   numRavenclaw++;
    // } else if(userAnswer===currentQuestion.slytherinAnswer){
    //   numSlytherin++;
    // } else if(userAnswer===currentQuestion.hufflepuffAnswer){
    //   numHufflepuff++;
    // } else (userAnswer===currentQuestion.gryffindorAnswer) 
    //   numGryffindor++;

    if(answers.includes("a",0)) {
      numRavenclaw++;
    } 
    }
  );
  resultsContainer.innerHTML = numRavenclaw +' = Ravenclaw ' + numSlytherin + ' = Slytherin ' + numHufflepuff + ' = Hufflepuff ' + numGryffindor + ' = Gryffindor';
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
})();