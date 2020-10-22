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


createQuiz = function(){

    var firstQuestion = {
        question:"first question",
        answer1: "a1",
        answer2: "a2",
        answer3: "a3"
        }
    var secondQuestion = {
        question: "second question",
        answer1: "b1", answer2: "b2", answer3: "b3"
    }
    var quiz =[firstQuestion, secondQuestion];

    for(i=0;i<quiz.length;i++){
        var currentQuestion = quiz[i].question;
        var para = document.createElement("P");
        para.innerHTML = currentQuestion;
        
        var dropbox = document.createElement('select');
        dropbox.setAttribute("id","select-option");
        dropbox.innerHTML ="<option value='answer1' id='first-answer'>" + currentQuestion.answer1 + "</option> <option value='answer2' id='second-answer'>" + currentQuestion.answer2 + "</option>";
        para.appendChild(dropbox);
        document.getElementById("quiz_body").appendChild(para);
        // var dropbox = document.createElement('select');
        // dropbox.setAttribute("id","select-option");
        // dropbox.innerHTML =
        // "<option value='first' id='first-answer'>"+currentQuestion.answer1
        // +"</option> <option value='second'>"+currentQuestion.answer2+<option value='answer1' id='first-answer'" + currentQuestion.answer1 + "</option>
        // "</option> <option value='third'>"+currentQuestion.answer3+"</option>";
        // dropbox.value = currentQuestion.answer1;
        // var label = document.createElement('label')
        // para.appendChild(dropbox);
        // //appends submit button to question
        var submitbtn = document.createElement('button');
        submitbtn.setAttribute("id","submit-btn");
        submitbtn.innerHTML = "submit";
        para.appendChild(submitbtn);
        submitbtn.addEventListener("submit",function(){
        var selected_answer = document.getElementById("select-option");
        var result = selected_answer.options[selected_answer.selectedIndex].text;
        window.alert(result);
        
        });
        document.getElementById("quiz_body").appendChild(para);
    }
}

var start_btn = document.getElementById("start-btn");
start_btn.addEventListener("click", createQuiz);
