
// questionArray is for shuffling questions
questionsAsked = 5;
var questionList = [
    // Objects as Trivia Questions
    {
        question: "which of the following is a lager?",
        answer: "Pilsner",
        wrongAnswer1: "IPA",
        wrongAnswer2: "Ale",
        wrongAnswer3: "Stout",
        questionImg: "",
        answerImg: "assets/images/giphy(7).gif",
    }, {
        question: "Which country has the most individual beer brands?",
        answer: "Belgium",
        wrongAnswer1: "United States",
        wrongAnswer2: "Norway",
        wrongAnswer3: "Germany",
        questionImg: "assets/images/homersdream",
        answerImg: "assets/images/giphy(6).gif",
    }, {
        question: "What is Cenosillicaphobia?",
        answer: "The fear of an empty glass",
        wrongAnswer1: "Latin term for fermenting yeast",
        wrongAnswer2: "A region in central Europe where beer was invented",
        wrongAnswer3: "A made up word for a beer quiz",
        questionImg: "",
        answerImg: "assets/images/giphy(5).gif",
    }, {
        question: "What American City goes by the nickname, 'Beervana' because of all the microbreweries in the area?",
        answer: "Portland, Oregon",
        wrongAnswer1: "Denver, Colorado",
        wrongAnswer2: "Brooklyn, New York",
        wrongAnswer3: "Reno, Nevada",
        questionImg: "",
        answerImg: "assets/images/giphy(4).gif",
    }, {
        question: "Which two states legalized homebrewing in 2013?",
        answer: "Mississippi and Alabama",
        wrongAnswer1: "New York and Oklahoma",
        wrongAnswer2: "Utah and Idaho",
        wrongAnswer3: "South Dakota and Maine",
        questionImg: "",
        answerImg: "assets/images/giphy(7).gif",
    },
    {
        question: "Which country drinks the most Guinness?",
        answer: "Nigeria",
        wrongAnswer1: "United States",
        wrongAnswer2: "Ireland",
        wrongAnswer3: "China",
        questionImg: "assets/images/homersdream",
        answerImg: "assets/images/giphy(6).gif",
    }, {
        question: "A barrel of beer contains how many gallons?",
        answer: "31 gallons",
        wrongAnswer1: "55 gallons",
        wrongAnswer2: "42 gallons",
        wrongAnswer3: "5 gallons",
        questionImg: "",
        answerImg: "assets/images/giphy(7).gif",
    }, {
        question: "What is a Labeorphilist?",
        answer: "a collector of beer bottles",
        wrongAnswer1: "a brewing historian",
        wrongAnswer2: "an axe wielding maniac",
        wrongAnswer3: "an alcohol expert",
        questionImg: "assets/images/homersdream",
        answerImg: "assets/images/giphy(6).gif",
    },

];
successImages = ["assets/images/cheers1.gif"]
endImages = ["assets/images/end1.gif", "assets/images/end2.gif", "assets/images/end3.gif", "assets/images/end4.gif", "assets/images/end5.gif", "assets/images/end6.gif"]
failImages = ["assets/images/fail1.gif", "assets/images/fail2.gif", "assets/images/fail3.gif", "assets/images/fail4.gif", "assets/images/fail5.gif", "assets/images/fail6.gif"]
function randomImage(array) {
    i = (Math.floor(Math.random() * array.length));
    $("#imagePlace").attr("src", array[i]);
}
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
    $(".score").addClass("hidden");
    shuffle(questionList);
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
            $('audio#times_up')[0].play();
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
    setTimeout(function () { questionReset(questionList[questionIndex]) }, 5500);
}

function questionReset(object) {
    if (questionIndex >= questionsAsked) {
        endGame();
    } else {
        $('#countDown').html("<h5>10 seconds</h5>")
        $(".game").removeClass("hidden");
        $("#scoreCard").addClass("hidden");
        stop();
        seconds = 10;
        countDownTimer();
        $('audio#pour_me')[0].play();
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
    }
}
// console.log("does this work?" + displayArray[i]);
function congratsDude(object) {
    // follows up correct answer choice
    correct++;
    stop();
    nextQuestion();
    $("#confirm").text("YOU ARE CORRECT");
    $(".isWrong").addClass("hidden");
    randomImage(successImages);
    $('audio#correct_answer')[0].play();
    console.log(object.answerImg)
}
function losingHappens(object) {
    // follows choosing wrong number
    wrong++
    stop();
    randomImage(failImages);
    nextQuestion();
    $(".isWrong").removeClass("hidden");
    $("#confirm").text("YOU ARE WRONG");
    console.log(questionIndex);
    $("#prompt").text("the correct answer was");
    $("#correctAnswer").text(questionList[questionIndex].answer);
    $('audio#horn_fail')[0].play();
}

function endGame() {
    console.log("GAMEOVER");
    stop();
    $(".game").addClass("hidden");
    $("#scoreCard").removeClass("hidden");
    $(".score").removeClass("hidden");
    $("#totalCorrect").text("Correct:  " + correct);
    $("#totalWrong").text("Wrong:  " + wrong);
    $("#totalUnanswered").text("Unanswered:  " + unanswered);
    $("#start").removeClass("hidden");
    $("#start").text("TRY AGAIN?");
    $(".isWrong").addClass("hidden");
    randomImage(endImages);
    $('audio#end_game_song')[0].play();
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
                losingHappens(questionList[1]);
                console.log("wrong" + wrong);


            }
        })
    })