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
var firstQuestion = {
    question:"first question",
    answers: ["a1", "a2", "a3"]
    }
var secondQuestion = {
    question: "second question",
    answers: ["b1","b2","b3"]
}
var quiz =[firstQuestion, secondQuestion];
var createQuiz = function(){
    event.preventDefault();
   
        document.onload = function () {
        var fiveMinutes = 60 * 1;
            display = document.querySelector('#time');
            startTimer(fiveMinutes, display);
        }

    var time_limit = document.createElement("div");
    time_limit.setAttribute("id", "timer");
    time_limit.innerHTML = "Time Remaining: <span id='time'>01:00</span> minutes!";
    document.getElementById("quiz_body").appendChild(time_limit);
    var para = document.createElement("P");
    para.innerHTML = firstQuestion.question;

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
    para.appendChild(submitbtn);
    submitbtn.addEventListener("click",function(){
    var selected_answer = document.getElementById("select-option");
    var result = selected_answer.options[selected_answer.selectedIndex].text;
    window.alert(result);
    });
    document.getElementById("quiz_body").appendChild(para);
    }
var start_btn = document.getElementById("start-btn");
start_btn.addEventListener("click", createQuiz);