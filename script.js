

 const questions = [
    {
        question:"Which country is called the “Land of Prophets”? ",
        answers : [
            {text:"Saudi Arabia",correct:false},
            {text:" Syria",correct:false},
            {text:"Palestine",correct:true},
            {text:"Iraq",correct:false} ,                                                                     
      
        ]
    },
    {
        question:"Cave Hira is in the mountain",
        answers : [
            {text:"As-Safa",correct:false},
            {text:"Sil",correct:false},
            {text:"Uhud",correct:false},
            {text:"An-Noor",correct:true} ,                                                                     
      
        ]
    },
    
    {
        question:"Which Surah of Quran has Bismillah twice",
        answers : [
            {text:"Aal-e-Imraan",correct:false},
            {text:" Al-Namal",correct:true},
            {text:"Yaaseen",correct:false},
            {text:"  Muhammad ",correct:false},
            
        ]  
    },
    {
        question:"The name “Muhammad” has been mentioned times in the Holy Quran",
        answers : [
            {text:"1",correct:false},
            {text:" 2",correct:false},
            {text:"3",correct:false},
            {text:"4",correct:true},
            
        ]     
    }
 ];


 

 //timer 
//  const timerDisplay=()=>{
//     countdown =setInterval(() => {
//         count--;
//         timeLeft.innerHTML=`${count}s`;
//         if(count===0){
//             clearInterval(countdown); 
//             displayNext()
//         }
//     },1000);
//  }

 const questionElement= document.getElementById("question");
 const answerElements = document.getElementById("answer-buttons");
 const nextButton =document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz(){
  currentQuestionIndex=0;
  number =0;
  nextButton.innerHTML = "Next";
  showQuestion();
 }

 function showQuestion(){
    resetstate()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1 ;
    questionElement.innerHTML= questionNo + " ." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button= document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerElements.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
 }

  function resetstate(){
    nextButton.style.display ="none";
    while(answerElements.firstChild){
        answerElements.removeChild(answerElements.firstChild)
    }
};

    function selectAnswer(e){
        const selectedbtn = e.target;
        const isCorrect=selectedbtn.dataset.correct=== "true";
        
        if(isCorrect){
            selectedbtn.classList.add("correct") ;
            score++;      
          }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerElements.children).forEach(button=>{
        if(button.dataset.correct=== "true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display= "block";

};

function showScore(){
    resetstate();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play again";
    nextButton.style.display="block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

//timer
var count= 10
var interval= setInterval(function(){
    document.getElementById('count').innerHTML=count;
    count--;
    if(count===0){
        clearInterval(interval)
        document.getElementsByid('count').innerHTML= 'done';

    }
},1000)
 
 startQuiz();




