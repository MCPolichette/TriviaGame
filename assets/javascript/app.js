
// questionArray is for shuffling questions
questionsAsked = 4;
var questionList = [
    // Objects as Trivia Questions
    {
        question: "which of the following is a lager?",
        answer: "Pilsner",
        wrongAnswer1: "IPA",
        wrongAnswer2: "Ale",
        wrongAnswer3: "Stout",
        questionImg: "",
        answerImg: "",
    },
    {
        question: "Which country has the most individual beer brands?",
        answer: "Belgium",
        wrongAnswer1: "United States",
        wrongAnswer2: "Norway",
        wrongAnswer3: "Germany",
        questionImg: "",
        answerImg: "",
    },
    {
        question: "What is Cenosillicaphobia?",
        answer: "The fear of an empty glass",
        wrongAnswer1: "Latin term for fermenting yeast",
        wrongAnswer2: "A region in central Europe where beer was invented",
        wrongAnswer3: "A made up word for a beer quiz",
        questionImg: "",
        answerImg: "",
    },
    {
        question: "What American City goes by the nickname, 'Beervana' because of all the microbreweries in the area?",
        answer: "Portland, Oregon",
        wrongAnswer1: "Denver, Colorado",
        wrongAnswer2: "Brooklyn, New York",
        wrongAnswer3: "Reno, Nevada",
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
            unanswered++;
            $("#confirm").text("YOU RAN OUT OF TIME");
            console.log(questionIndex);
            $("#prompt").text("the correct answer was");
            $("#correctAnswer").text(questionList[questionIndex].answer);

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
    setTimeout(function () { questionIndex++ }, 1500);
    console.log(questionIndex);
    console.log(questionList[questionIndex]);
    setTimeout(function () { questionReset(questionList[questionIndex]) }, 5000);
}


function questionReset(object) {
    if (questionIndex >= questionsAsked) {
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
    stop();
    nextQuestion();
    $("#confirm").text("YOU ARE CORRECT");
    console.log(questionIndex);
    $(".isWrong").addClass("hidden");
}
function getYourShitTogether(object) {
    // follows choosing wrong number
    wrong++
    stop();
    nextQuestion();
    $(".isWrong").removeClass("hidden");
    $("#confirm").text("YOU ARE WRONG");
    console.log(questionIndex);
    $("#prompt").text("the correct answer was");
    $("#correctAnswer").text(questionList[questionIndex].answer);
}

function endGame() {
    console.log("GAMEOVER");
    $(".game").addClass("hidden");
    $("#scoreCard").removeClass("hidden");
    $(".score").removeClass("hidden");
    $("#totalCorrect").text("Correct:  " + correct);
    $("#totalWrong").text("Wrong:  " + wrong);
    $("#totalUnanswered").text("Unanswered:  " + unanswered);
    $("#start").removeClass("hidden")
    $("#start").text("TRY AGAIN?");
    $(".isWrong").addClass("hidden");


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



            } else {
                getYourShitTogether(questionList[1]);
                console.log("wrong" + wrong);


            }


        }
        )
    }











    )