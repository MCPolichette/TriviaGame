
// questionArray is for shuffling questions
var questionList = [

    // Objects as Trivia Questions
    // Using the term ITEM for starting variable.  because I want to use the term QUESTION for a variable inside the object
    item1 = {
        question: "X Will you choose the right answer?",
        answer: "X The right option",
        wrongAnswer2: "X wrong choice two",
        wrongAnswer3: "X wrong choice three",
        questionImg: "",
        answerImg: "",

    },
    item2 = {
        question: "Choose the right answer",
        answer: "The right option",
        wrongAnswer1: "wrong choice one",
        wrongAnswer2: "wrong choice two",
        wrongAnswer3: "wrong choice three",
        questionImg: "",
        answerImg: "",

    },

]
// global timer variables:
var seconds = 10;
var secondID;
var timerOn = false;
// global score variables:
var correct = 0;
var wrong = 0;
var unanswered = 0;

// Functions:
function gameReset() {
    // resets game
    wrong = 0;
    unanswered = 0;
    correct = 0;
}
function shuffle(array) {
    // shuffles any array
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}

// timer functions 
function countDownTimer() {
    timerOn = true
    secondID = setInterval(decrement, 1000);
    function decrement() {
        seconds--;
        $('#countDown').html("<h5>" + seconds + " seconds</h5>");
        console.log(seconds);
        if (seconds === 0) {
            timerOn = false;
            console.log(timerOn);
            stop();
        }
    }
}
function stop() {
    clearInterval(secondID);
}

function questionReset(item) {
    // resets next questsion
    $('#q').text(item.question);
    var answerArray = [item.answer, item.wrongAnswer1, item.wrongAnswer2, item.wrongAnswer3];
    // answerArray is used for shuffling answers
    console.log(item.question);
    shuffle(answerArray);
    console.log(answerArray);

    var displayArray = ["#a1", "#a2", "#a3", "#a4"];
    for (i = 0; i < displayArray.length; i++) {
        $(displayArray[i]).text(answerArray[i]);
    };

    console.log("test")
}
// console.log("does this work?" + displayArray[i]);
function congratsDude(object) {
    // follows up correct answer choice
    correct++;



    // add class "alert-success" 
    // add class "alert-danger"

}
function getYourShitTogether(object) {
    // follows choosing wrong number
    wrong++

}
// GAME BEGINS HERE.
window.onload =
    $("#start").on('click', function () {
        console.log("gameBegins");
        // set game up
        gameReset();
        currentQuestion = questionList[0];
        $(".card").removeClass("hidden");
        $("#start").addClass("hidden");
        countDownTimer();
        questionReset(currentQuestion)
        $(".possibleAnswer").on('click', function () {
            var click = $(this);
            var check = click.text();
            if (check === currentQuestion.answer) {
                congratsDude(currentQuestion);
                console.log("correct" + correct);
                questionReset(currentQuestion);

            } else {
                getYourShitTogether(questionList[1]);
                console.log("wrong" + wrong);
                questionReset(questionList[1]);
            }


        }
        )
    }











    )