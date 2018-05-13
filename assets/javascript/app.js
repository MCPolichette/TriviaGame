
// questionArray is for shuffling questions
questionsAsked = 2;
var questionList = [

    // Objects as Trivia Questions
    // Using the term ITEM for starting variable.  because I want to use the term QUESTION for a variable inside the object
    {
        question: "X Will you choose the right answer?",
        answer: "X The right option",
        wrongAnswer1: "X wrong choice two",
        wrongAnswer2: "X wrong choice two",
        wrongAnswer3: "X wrong choice three",
        questionImg: "",
        answerImg: "",
    },
    {
        question: "Choose the right answer",
        answer: "The right option",
        wrongAnswer1: "wrong choice one",
        wrongAnswer2: "wrong choice two",
        wrongAnswer3: "wrong choice three",
        questionImg: "",
        answerImg: "",
    },
    {
        question: "Choose the right answer",
        answer: "The right option2222222222222222222",
        wrongAnswer1: "2wrong choice one",
        wrongAnswer2: "2wrong choice two",
        wrongAnswer3: "2wrong choice three",
        questionImg: "",
        answerImg: "",
    },
    {
        question: "Choose the right answer4444444444444",
        answer: "The right option",
        wrongAnswer1: "3wrong choice one",
        wrongAnswer2: "3wrong choice two",
        wrongAnswer3: "3wrong choice three",
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
var questionIndex = 0;
// Functions:
function gameReset() {
    // resets game
    wrong = 0;
    unanswered = 0;
    correct = 0;
    questionIndex = 0;
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
            nextQuestion();
            $("#confirm").text("YOU RAN OUT OF TIME");
            console.log(questionIndex);
            // questionReset(questionList[questionIndex]);
        }
    }
}
function stop() {
    clearInterval(secondID);
}
function nextQuestion() {
    // where x is the current question
    $(".game").addClass("hidden");
    $("#scoreCard").removeClass("hidden");
    console.log(questionIndex);
    questionIndex++;
    console.log(questionIndex);
    console.log(questionList[questionIndex]);
    setTimeout(function () { questionReset(questionList[questionIndex]) }, 5000);
}


function questionReset(object) {
    if (questionIndex > questionList.length) {
        endGame();
        console.log("GAMEOVER");
    } else {
        $(".game").removeClass("hidden");
        $("#scoreCard").addClass("hidden");
        stop();
        seconds = 10;
        countDownTimer();
        // resets next questsion
        $('#q').text(object.question);
        var answerArray = [object.answer, object.wrongAnswer1, object.wrongAnswer2, object.wrongAnswer3];
        // answerArray is used for shuffling answers
        console.log(object.question);
        shuffle(answerArray);
        console.log(answerArray);

        var displayArray = ["#a1", "#a2", "#a3", "#a4"];
        for (i = 0; i < displayArray.length; i++) {
            $(displayArray[i]).text(answerArray[i]);

        };

        // countDownTimer();
    }
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

function endGame() {
    console("GAMEOVER");
}
// GAME BEGINS HERE.
window.onload =

    $("#start").on('click', function () {
        console.log("gameBegins");

        // set game up
        gameReset();

        $(".game").removeClass("hidden");
        $("#start").addClass("hidden");
        countDownTimer()
        questionReset(questionList[questionIndex])
        $(".possibleAnswer").on('click', function () {
            var click = $(this);
            var check = click.text();

            if (check === questionList[questionIndex].answer) {
                congratsDude(questionList[questionIndex]);
                console.log("correct" + correct);
                setTimeout(nextQuestion(questionList[questionIndex]), 5000);


            } else {
                getYourShitTogether(questionList[1]);
                console.log("wrong" + wrong);
                setTimeout(nextQuestion(questionList[questionIndex]), 5000);

            }


        }
        )
    }











    )