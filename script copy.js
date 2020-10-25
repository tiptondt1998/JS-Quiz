// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);
        
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
        
//     }, 1000);

// }

// var createQuiz = function(quiz){
//     event.preventDefault();
   
//         document.onload = function () {
//         var fiveMinutes = 60 * 1;
//             display = document.querySelector('#time');
//             startTimer(fiveMinutes, display);
//         }

//     var time_limit = document.createElement("div");
//     time_limit.setAttribute("id", "timer");
//     time_limit.innerHTML = "Time Remaining: <span id='time'>01:00</span> minutes!";
//     document.getElementById("quiz_body").appendChild(time_limit);
//     for(i=0;i<quiz.length;i++){
//     var para = document.createElement("P");
//     para.innerHTML = nextQuestion.question;

//     var dropbox = document.createElement('select');
//     dropbox.setAttribute("id","select-option");
//     dropbox.innerHTML =
//     "<option value='first' id='first-answer'>"+nextQuestion[i].answers[0]
//     +"</option> <option value='second'>"+nextQuestion[i].answers[1]+
//     "</option> <option value='third'>"+nextQuestion[i].answers[2]+"</option>";
//     dropbox.value = nextQuestion.answers[0];
//     var label = document.createElement('label')
//     para.appendChild(dropbox);
//     //appends submit button to question
//     var submitbtn = document.createElement('button');
//     submitbtn.setAttribute("id","submit-btn");
//     submitbtn.innerHTML = "submit";
//     para.appendChild(submitbtn);
//     submitbtn.addEventListener("click",function(){
//     var selected_answer = document.getElementById("select-option");
//     var result = selected_answer.options[selected_answer.selectedIndex].text;
//     window.alert(result);
    
//     });
//     document.getElementById("quiz_body").appendChild(para);
//     createQuiz(quiz[i]);
//     }
// }

correctAnswers = 0;
var questions = [
    { q: 'JSON stands for JavaScript Object Notation.', a: 't' },
    { q: 'Local variables are variables declared in a function that cannot be directly accessed outside of that function.', a: 't' },
    { q: 'An if statement must always have an else statement.', a: 'f' }
  ];

// createQuiz = function(){
//     for(i=0;i<quiz.length;i++){
//         var currentQuestion = quiz[i];
//         var para = document.createElement("P");
//         para.innerHTML = currentQuestion.question;
        
//         var dropbox = document.createElement('select');
//         dropbox.setAttribute("id","select-option");
//         dropbox.innerHTML ="<option value='answer1' id='first-answer'>" + currentQuestion.answer1 + "</option> <option value='answer2' id='second-answer'>" + currentQuestion.answer2 + "</option> <option value='answer2' id='second-answer'>" + currentQuestion.answer3 + "</option>";
//         para.appendChild(dropbox);
//         document.getElementById("quiz_body").appendChild(para);

//     document.getElementById("quiz_body").appendChild(para);        
//        }
//     var submitbtn = document.createElement('button');
//         submitbtn.setAttribute('id','submit-btn');
//         submitbtn.innerHTML = "submit";
//         document.getElementById("quiz_body").appendChild(submitbtn);
//     submitbtn.addEventListener("click", function(){
//         var selected_answer = document.getElementById("select-option");
//         var result = selected_answer.options[selected_answer.selectedIndex].text;
//         window.alert(result);
        
//         for(i = 0; i<1; i++){
//         currentQuestion = quiz[i];
//             if(result == currentQuestion.answer1){
//             window.alert("correct");
//             correctAnswers++;
//             window.alert("Score is " + correctAnswers / quiz.length);
//             }
//             else{
//             window.alert("incorrect");
//             console.log(result);
//             }
//         }
//     });

// var submitbtn = document.createElement('button');
// submitbtn.setAttribute('id','submit-btn');
// submitbtn.innerHTML = "submit";
// para.appendChild(submitbtn);
// }

var createQuiz = function(){
for(i = 0; i<questions.length; i++){
  var answer = confirm(questions[i].q);
  if (
      (answer === true && questions[i].a === 't') ||
      (answer === false && questions[i].a === 'f')
    ) {
      correctAnswers++;
      alert("Correct");
    }else{
      alert("Wrong");
    }
};
alert("Your score: " + correctAnswers +"/" + questions.length);
var score = correctAnswers;
var initials = window.prompt("Please enter your initials to save your score");
localStorage.setItem(initials, score);
window.location.href = "./results.html";
var s = document.getElementById("scores");
s.createElement("ul");
s.innerHTML = "<li>"+ key +"</li>"
document.appendChild(s);
}
var start_btn = document.getElementById("start-btn");
start_btn.addEventListener("click", createQuiz);
