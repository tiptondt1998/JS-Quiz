function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        
    }, 1000);
}
window.onload = function () {
    var fiveMinutes = 60 * 1;
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
}

// function firstQuestion(){

// }

var firstQuestion = {
question:"first question",
answers: ["a1", "a2", "a3"]
}

var createQuiz = function(){
//puts first question in que
event.preventDefault();
var quiz_questions = [firstQuestion, "second", "third"];
var para = document.createElement("P");
para.innerHTML = firstQuestion.question;

//appends dropbox to question
var dropbox = document.createElement('select');
dropbox.setAttribute("id","select-option");
dropbox.innerHTML =
"<option value='first' id='first-answer'>"+firstQuestion.answers[0]
+"</option> <option value='second'>"+firstQuestion.answers[1]+
"</option> <option value='third'>"+firstQuestion.answers[2]+"</option>";
dropbox.value = firstQuestion.answers[0];

var label = document.createElement('label')
para.appendChild(dropbox);

//appends submit button to question
var submitbtn = document.createElement('button');
submitbtn.setAttribute("id","submit-btn");
submitbtn.innerHTML = "submit";

// submitbtn.addEventListener("submit",function(){
// var selected_answer = document.getElementById("select-option");
// var result = selected_answer.options[selected_answer.selectedIndex].text;
// window.alert(result);
// });
para.appendChild(submitbtn);
submitbtn.addEventListener("click",function(){
    var selected_answer = document.getElementById("select-option");
    var result = selected_answer.options[selected_answer.selectedIndex].text;
    window.alert(result);
    });
document.getElementById("question").appendChild(para);

};
document.getElementById("question-btn").addEventListener("click", createQuiz);
