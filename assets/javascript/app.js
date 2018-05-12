
// questionArray is for shuffling questions
var questionList = [

    // Objects as Trivia Questions
    // Using the term ITEM for starting variable.  because I want to use the term QUESTION for a variable inside the object
    item1 = {
        question: "Will you choose the right answer?",
        answer: "The right option",
        wrongAnswer1: "wrong choice one",
        wrongAnswer2: "wrong choice two",
        wrongAnswer3: "wrong choice three",
        questionImg: "",
        answerImg: "",
        isCorrect: false,
    },
    item2 = {
        question: "Choose the right answer",
        answer: "The right option",
        wrongAnswer1: "wrong choice one",
        wrongAnswer2: "wrong choice two",
        wrongAnswer3: "wrong choice three",
        questionImg: "",
        answerImg: "",
        isCorrect: false,
    },

]
console.log(questionList.length)
var correct = 0;
var wrong = 0;
var total = 0;

console.log(questionList[1].answer)
// Functions Below here
function gameReset() {
    // resets game
    wrong = 0;
    total = 0;
    correct = 0;
}
function shuffle(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}


function countDownTimer() {
    // timer function    
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

    }
}
// console.log("does this work?" + displayArray[i]);
function congratsDude(object) {
    // follows up correct answer choice
    correct++;
    object.isCorrect = true;


}
function getYourShitTogether() {
    // follows choosing wrong number
    wrong--

}
// GAME BEGINS HERE.
window.onload = questionReset(questionList[1]);
