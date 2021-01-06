'use Strict';
score = 0
var answer = 'yes';
var aswer = prompt('do you think that my name have story ?');
if (answer.toLowerCase() === 'yes' || answer.toLowerCase === 'y') {
    alert('good, thats right');
    score++;
    console.log('good, thats right');
}
else {
    alert('oops');
}


var answer2 = 'yes';
var answer2 = prompt('does my father have the biggest impact on my childhood?');
if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase === 'y') {
    alert('coool, thats right');
    score++;
    console.log('coool, thats right');
}
else {
    alert('oops');
}



var answer3 = 'yes';
var answer3 = prompt('Have I ever visited another country?');
if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase === 'y') {
    alert('thats right');
    score++;
    console.log(' thats right');
}
else {
    alert('oops, i did');
}


var answer4 = 'yes';
var answer4 = prompt('Do you think I like horror movies?');
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase === 'y') {
    alert('yes , i do');
    score++;
    console.log('yes , i do');
}
else {
    alert('oops');
}

var answer5 = 'yes';
var aswer5 = prompt('Do you think I like chocolate milkshake?');
if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase === 'y') {
    alert('great');
    score++;
    console.log('great');
}
else {
    alert('oops');
}

// var answer6 = 24;
// // var opp = [1, 2, 3, 4];
// for (var i = 0; i < 5; i++) {
//     var userAnswer = prompt('guess my Age')
//     if (Number(userAnswer) === answer6) {
//         alert('thats right !');
//         score++;
//         break
//     } else if (Number(userAnswer) < answer6) {
//         alert('too low');
//     } else if (Number(userAnswer) > answer6) {
//         alert('too high!');
//     }
// }
// alert('the correct answer is 24');



var answer6 = 24, attempts = 4, question6, flag = false;

while (attempts > 0 && !flag) {

    question6 = prompt("Guess my Age ?");

    switch (true) {
        case (question6 == answer6):
            alert('thats correct!');
            flag = true;
            score++;
            break;
        case (question6 < 10):
            alert('too low!');
            break;
        case (question6 > 40):
            alert('too high!');
            break;

        case (question6 > 20 && question6 < 30):
            alert('Very Close! ');
            break;
        default:
            alert('Inter a number');
            break;
    }

    // if(flag){

    //     break;
    // }

    --attempts;

    if (!flag) {
        alert(" You Have " + attempts + " Out Of 4 Attempts Left");
    }



}


var cars = ['Mercedes', 'FERRARI', 'PORSCHE', 'DACIA SANDERO'];
var answer7;
var attempts = 6;
var flag = true
while (attempts > 0 && flag == true) {
    answer7 = prompt('what is my favorite car?')
    for (var index = 0; index < cars.length; index++) {



        if (cars[index].toLowerCase() === answer7.toLowerCase()) {
            alert('correct answer!');
            score++;
            flag = false;
            break;

        }




    }

    --attempts;
    alert(" You Have " + attempts + " out of 6 Attempts Left");

}
alert("You Scored " + score + " out of 7 ")

confirm('okay thats it ...thank u dear and welcome again!')
