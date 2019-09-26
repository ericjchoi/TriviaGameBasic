/* HW5 Trivia Game Basic */
/* declare variables */
var timeLimitSeconds = 30 + 1;; /* choose time limit in seconds for the game */
var numTotalQuestions = 7; /* total number of questions */
var min = 0;
var sec = 0;
var minutes = 0;
var seconds = 0;
var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;
var numCorrectPercent = 0;
var numIncorrectPercent = 0;
var numUnansweredPercent = 0;
var correctAnswer = [4, 3, 5, 3, 4, 5, 4];
var playerAnswer = [10, 10, 10, 10, 10, 10, 10];
var x = 0; /* for the use of setInterval() and clearInterval() */
/* declare functions */
function initialize() {
    /* hiding questions and choices */
    $("#questionContainer").hide();
    $("#scoreReportContainer").hide();
}
/* calculate minutes-part and seconds-part from remaining time in seconds */
function timeTransform(t) {
    minutes = Math.floor(t / 60);
    seconds = t - (minutes * 60);
    if (minutes < 10) {
        min = "0" + minutes;
    } else {
        min = minutes;
    }
    if (seconds < 10) {
        sec = "0" + seconds;
    } else {
        sec = seconds;
    }
    return min + ":" + sec;
}
function playerAnswering() { /* these repeated codes need to be organized into function later */
    /* question 1 */
    $("#q1choice1").on("click", function () {
        document.getElementById("q1choice2").checked = false;
        document.getElementById("q1choice3").checked = false;
        document.getElementById("q1choice4").checked = false;
        document.getElementById("q1choice5").checked = false;
        playerAnswer[0] = 1;
    });
    $("#q1choice2").on("click", function () {
        document.getElementById("q1choice1").checked = false;
        document.getElementById("q1choice3").checked = false;
        document.getElementById("q1choice4").checked = false;
        document.getElementById("q1choice5").checked = false;
        playerAnswer[0] = 2;
    });
    $("#q1choice3").on("click", function () {
        document.getElementById("q1choice1").checked = false;
        document.getElementById("q1choice2").checked = false;
        document.getElementById("q1choice4").checked = false;
        document.getElementById("q1choice5").checked = false;
        playerAnswer[0] = 3;
    });
    $("#q1choice4").on("click", function () {
        document.getElementById("q1choice1").checked = false;
        document.getElementById("q1choice2").checked = false;
        document.getElementById("q1choice3").checked = false;
        document.getElementById("q1choice5").checked = false;
        playerAnswer[0] = 4;
    });
    $("#q1choice5").on("click", function () {
        document.getElementById("q1choice1").checked = false;
        document.getElementById("q1choice2").checked = false;
        document.getElementById("q1choice3").checked = false;
        document.getElementById("q1choice4").checked = false;
        playerAnswer[0] = 5;
    });
    /* question 2 */
    $("#q2choice1").on("click", function () {
        document.getElementById("q2choice2").checked = false;
        document.getElementById("q2choice3").checked = false;
        document.getElementById("q2choice4").checked = false;
        document.getElementById("q2choice5").checked = false;
        playerAnswer[1] = 1;
    });
    $("#q2choice2").on("click", function () {
        document.getElementById("q2choice1").checked = false;
        document.getElementById("q2choice3").checked = false;
        document.getElementById("q2choice4").checked = false;
        document.getElementById("q2choice5").checked = false;
        playerAnswer[1] = 2;
    });
    $("#q2choice3").on("click", function () {
        document.getElementById("q2choice1").checked = false;
        document.getElementById("q2choice2").checked = false;
        document.getElementById("q2choice4").checked = false;
        document.getElementById("q2choice5").checked = false;
        playerAnswer[1] = 3;
    });
    $("#q2choice4").on("click", function () {
        document.getElementById("q2choice1").checked = false;
        document.getElementById("q2choice2").checked = false;
        document.getElementById("q2choice3").checked = false;
        document.getElementById("q2choice5").checked = false;
        playerAnswer[1] = 4;
    });
    $("#q2choice5").on("click", function () {
        document.getElementById("q2choice1").checked = false;
        document.getElementById("q2choice2").checked = false;
        document.getElementById("q2choice3").checked = false;
        document.getElementById("q2choice4").checked = false;
        playerAnswer[1] = 5;
    });
    /* question 3 */
    $("#q3choice1").on("click", function () {
        document.getElementById("q3choice2").checked = false;
        document.getElementById("q3choice3").checked = false;
        document.getElementById("q3choice4").checked = false;
        document.getElementById("q3choice5").checked = false;
        playerAnswer[2] = 1;
    });
    $("#q3choice2").on("click", function () {
        document.getElementById("q3choice1").checked = false;
        document.getElementById("q3choice3").checked = false;
        document.getElementById("q3choice4").checked = false;
        document.getElementById("q3choice5").checked = false;
        playerAnswer[2] = 2;
    });
    $("#q3choice3").on("click", function () {
        document.getElementById("q3choice1").checked = false;
        document.getElementById("q3choice2").checked = false;
        document.getElementById("q3choice4").checked = false;
        document.getElementById("q3choice5").checked = false;
        playerAnswer[2] = 3;
    });
    $("#q3choice4").on("click", function () {
        document.getElementById("q3choice1").checked = false;
        document.getElementById("q3choice2").checked = false;
        document.getElementById("q3choice3").checked = false;
        document.getElementById("q3choice5").checked = false;
        playerAnswer[2] = 4;
    });
    $("#q3choice5").on("click", function () {
        document.getElementById("q3choice1").checked = false;
        document.getElementById("q3choice2").checked = false;
        document.getElementById("q3choice3").checked = false;
        document.getElementById("q3choice4").checked = false;
        playerAnswer[2] = 5;
    });
    /* question 4 */
    $("#q4choice1").on("click", function () {
        document.getElementById("q4choice2").checked = false;
        document.getElementById("q4choice3").checked = false;
        document.getElementById("q4choice4").checked = false;
        document.getElementById("q4choice5").checked = false;
        playerAnswer[3] = 1;
    });
    $("#q4choice2").on("click", function () {
        document.getElementById("q4choice1").checked = false;
        document.getElementById("q4choice3").checked = false;
        document.getElementById("q4choice4").checked = false;
        document.getElementById("q4choice5").checked = false;
        playerAnswer[3] = 2;
    });
    $("#q4choice3").on("click", function () {
        document.getElementById("q4choice1").checked = false;
        document.getElementById("q4choice2").checked = false;
        document.getElementById("q4choice4").checked = false;
        document.getElementById("q4choice5").checked = false;
        playerAnswer[3] = 3;
    });
    $("#q4choice4").on("click", function () {
        document.getElementById("q4choice1").checked = false;
        document.getElementById("q4choice2").checked = false;
        document.getElementById("q4choice3").checked = false;
        document.getElementById("q4choice5").checked = false;
        playerAnswer[3] = 4;
    });
    $("#q4choice5").on("click", function () {
        document.getElementById("q4choice1").checked = false;
        document.getElementById("q4choice2").checked = false;
        document.getElementById("q4choice3").checked = false;
        document.getElementById("q4choice4").checked = false;
        playerAnswer[3] = 5;
    });
    /* question 5 */
    $("#q5choice1").on("click", function () {
        document.getElementById("q5choice2").checked = false;
        document.getElementById("q5choice3").checked = false;
        document.getElementById("q5choice4").checked = false;
        document.getElementById("q5choice5").checked = false;
        playerAnswer[4] = 1;
    });
    $("#q5choice2").on("click", function () {
        document.getElementById("q5choice1").checked = false;
        document.getElementById("q5choice3").checked = false;
        document.getElementById("q5choice4").checked = false;
        document.getElementById("q5choice5").checked = false;
        playerAnswer[4] = 2;
    });
    $("#q5choice3").on("click", function () {
        document.getElementById("q5choice1").checked = false;
        document.getElementById("q5choice2").checked = false;
        document.getElementById("q5choice4").checked = false;
        document.getElementById("q5choice5").checked = false;
        playerAnswer[4] = 3;
    });
    $("#q5choice4").on("click", function () {
        document.getElementById("q5choice1").checked = false;
        document.getElementById("q5choice2").checked = false;
        document.getElementById("q5choice3").checked = false;
        document.getElementById("q5choice5").checked = false;
        playerAnswer[4] = 4;
    });
    $("#q5choice5").on("click", function () {
        document.getElementById("q5choice1").checked = false;
        document.getElementById("q5choice2").checked = false;
        document.getElementById("q5choice3").checked = false;
        document.getElementById("q5choice4").checked = false;
        playerAnswer[4] = 5;
    });
    /* question 6 */
    $("#q6choice1").on("click", function () {
        document.getElementById("q6choice2").checked = false;
        document.getElementById("q6choice3").checked = false;
        document.getElementById("q6choice4").checked = false;
        document.getElementById("q6choice5").checked = false;
        playerAnswer[5] = 1;
    });
    $("#q6choice2").on("click", function () {
        document.getElementById("q6choice1").checked = false;
        document.getElementById("q6choice3").checked = false;
        document.getElementById("q6choice4").checked = false;
        document.getElementById("q6choice5").checked = false;
        playerAnswer[5] = 2;
    });
    $("#q6choice3").on("click", function () {
        document.getElementById("q6choice1").checked = false;
        document.getElementById("q6choice2").checked = false;
        document.getElementById("q6choice4").checked = false;
        document.getElementById("q6choice5").checked = false;
        playerAnswer[5] = 3;
    });
    $("#q6choice4").on("click", function () {
        document.getElementById("q6choice1").checked = false;
        document.getElementById("q6choice2").checked = false;
        document.getElementById("q6choice3").checked = false;
        document.getElementById("q6choice5").checked = false;
        playerAnswer[5] = 4;
    });
    $("#q6choice5").on("click", function () {
        document.getElementById("q6choice1").checked = false;
        document.getElementById("q6choice2").checked = false;
        document.getElementById("q6choice3").checked = false;
        document.getElementById("q6choice4").checked = false;
        playerAnswer[5] = 5;
    });
    /* question 7 */
    $("#q7choice1").on("click", function () {
        document.getElementById("q7choice2").checked = false;
        document.getElementById("q7choice3").checked = false;
        document.getElementById("q7choice4").checked = false;
        document.getElementById("q7choice5").checked = false;
        playerAnswer[6] = 1;
    });
    $("#q7choice2").on("click", function () {
        document.getElementById("q7choice1").checked = false;
        document.getElementById("q7choice3").checked = false;
        document.getElementById("q7choice4").checked = false;
        document.getElementById("q7choice5").checked = false;
        playerAnswer[6] = 2;
    });
    $("#q7choice3").on("click", function () {
        document.getElementById("q7choice1").checked = false;
        document.getElementById("q7choice2").checked = false;
        document.getElementById("q7choice4").checked = false;
        document.getElementById("q7choice5").checked = false;
        playerAnswer[6] = 3;
    });
    $("#q7choice4").on("click", function () {
        document.getElementById("q7choice1").checked = false;
        document.getElementById("q7choice2").checked = false;
        document.getElementById("q7choice3").checked = false;
        document.getElementById("q7choice5").checked = false;
        playerAnswer[6] = 4;
    });
    $("#q7choice5").on("click", function () {
        document.getElementById("q7choice1").checked = false;
        document.getElementById("q7choice2").checked = false;
        document.getElementById("q7choice3").checked = false;
        document.getElementById("q7choice4").checked = false;
        playerAnswer[6] = 5;
    });
}
function timeRunning() {
    x = setInterval(function () {
        timeLimitSeconds--;
        document.getElementById("timeDisplay").innerHTML = timeTransform(timeLimitSeconds);
        if (timeLimitSeconds <= 0) { /* procedure when time is up */
            clearInterval(x);
            $("#questionContainer").hide();
            $("#scoreReportContainer").show();
            scoreReport();
        }
    }, 1000); /* perform setInterval function every 1 seconds */
}
function scoreReport() {
    for (var i = 0; i < correctAnswer.length; i++) {
        if (playerAnswer[i] === correctAnswer[i]) { /* counting correct answer */
            numCorrect += 1;
        } else if (playerAnswer[i] === 10) { /* counting unanswered */
            numUnanswered += 1;
        } else { /* counting incorrect answer */
            numIncorrect += 1;
        }
    }
    document.getElementById("numCorrect").innerHTML = numCorrect;
    document.getElementById("numIncorrect").innerHTML = numIncorrect;
    document.getElementById("numUnanswered").innerHTML = numUnanswered;
    document.getElementById("numCorrectPercent").innerHTML = ((numCorrect / numTotalQuestions) * 100).toFixed(2);
    document.getElementById("numIncorrectPercent").innerHTML = ((numIncorrect / numTotalQuestions) * 100).toFixed(2);
    document.getElementById("numUnansweredPercent").innerHTML = ((numUnanswered / numTotalQuestions) * 100).toFixed(2);
}
function mainGame() {
    $("#startBtnContainer").on("click", function () { /* procedure after start button clicked */
        $("#startBtnContainer").hide(); /* hide start button */
        $("#questionContainer").show(); /* show questions */
        timeRunning(); /* time starts running */
        playerAnswering();
        $("#doneBtn").on("click", function () {
            clearInterval(x);
            $("#questionContainer").hide();
            $("#scoreReportContainer").show();
            scoreReport();
        });
    });
}
/* main game */
$(document).ready(function () {
    initialize();
    mainGame();
});