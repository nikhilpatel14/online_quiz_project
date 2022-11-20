// Js code goes here  
// Run json server on http://localhost:3000 before running the code
// Run json server on http://localhost:3000 before running the code
// Run json server on http://localhost:3000 before running the code
// Run json server on http://localhost:3000 before running the code
// Run json server on http://localhost:3000 before running the code
// Run json server on http://localhost:3000 before running the code
// Run json server on http://localhost:3000 before running the code



loader=document.getElementById("loader-view")
loader.style.display="none";
quiz=document.getElementById("quiz")
quiz.style.display="none"

async function fetchQuestion(){
  document.getElementById("current-question-id").value =Math.floor(Math.random() * 7);
  currentId=document.getElementById("current-question-id").value
  console.log(currentId);
  let currentUrl="http://localhost:3000/data/"+currentId
  const response=await fetch(currentUrl)
  const questionData=await response.json()
  // console.log(questionData);
  loader.style.display='none'
  setAns(questionData.answer)
  showQuiz(questionData)  
}

startButton=document.getElementById("start-button");
startButton.addEventListener("click", function()    
    {   
    loader.style.display="block";
    let instruction=document.getElementById("pre-quiz-instructions")
    instruction.style.display='none';
    startButton.style.display='none'
    fetchQuestion();
    })



ansi=0
function setAns(ans){
  ansi=ans
}


function showQuiz(questionData){
  quizData=document.getElementById("quiz")
  quizData.style.display='block'
  showQuestion(questionData)
  submitButton=document.getElementById("submit-button")
  submitButton.setAttribute("disabled",true)

}

function showQuestion(que_data){
  questionDiv=document.getElementById("question")
  questionDiv.innerHTML=`${que_data.question}`
  showOptions(que_data)
}


function showOptions(que_data){
  optionDiv=document.getElementById("options-container")
  options=que_data.options
  for(let i=0;i<options.length;i++){
  
optionDiv.innerHTML+=`<div id=${i}  style="border-style: solid black; padding: 10px; margin: 10px 10px 10px 10px;"><li>${options[i]}</li></div>`
  }
setEvents();
}

function setEvents(){
option0=document.getElementById("0")
option1=document.getElementById("1")
option2=document.getElementById("2")
option3=document.getElementById("3")
options=[option0,option1,option2,option3]


option0.addEventListener("click",function(){
  submitButton.removeAttribute("disabled")
  options.forEach(opt=>opt.classList.remove("user-answer"))
  this.classList.add("user-answer")
  userAns=0;
  
})

option1.addEventListener("click",function(){
  submitButton.removeAttribute("disabled")
 
  options.forEach(opt=>opt.classList.remove("user-answer"))
  this.classList.add("user-answer")
  userAns=1;
  
  
})


option2.addEventListener("click",function(){
  submitButton.removeAttribute("disabled")
  options.forEach(opt=>opt.classList.remove("user-answer"))
  this.classList.add("user-answer")
  userAns=2;
})

option3.addEventListener("click",function(){
  submitButton.removeAttribute("disabled")
  options.forEach(opt=>opt.classList.remove("user-answer"))
  this.classList.add("user-answer")
  userAns=3;
  
})
submitButton=document.getElementById("submit-button")
submitButton.addEventListener("click",function(){
    questionSubmitStatus=true;
    userAnswered=userAns;
    correctAns=ansi;  
    correctAnsElement=document.getElementById(correctAns)
    userAnsElement=document.getElementById(userAnswered)
  
    correctAnsElement.classList.add("correct-answer")
    if(correctAns!=userAnswered){
      userAnsElement.classList.add("wrong-answer")
      
    }
    setInterval("location.reload(true);", 1000);
}

)

}




