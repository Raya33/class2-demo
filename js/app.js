'use Strict';
score = 0
function answer() {
    var answer = 'yes';
    var answer = prompt('do you think that my name have story ?');
    if (answer.toLowerCase() === 'yes' || answer.toLowerCase === 'y') {
        alert('good, thats right');
        score++;
    }
    else {
        alert('oops');
    }
}
answer()


function answer2() {
    var answer2 = 'yes';
    var answer2 = prompt('does my father have the biggest impact on my childhood?');
    if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase === 'y') {
        alert('coool, thats right');
        score++;

    }
    else {
        alert('oops');
    }
}
answer2()


function answer3() {
    var answer3 = 'yes';
    var answer3 = prompt('Have I ever visited another country?');
    if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase === 'y') {
        alert('thats right');
        score++;

    }
    else {
        alert('oops, i did');
    }
}
answer3()

function answer4() {
    var answer4 = 'yes';
    var answer4 = prompt('Do you think I like horror movies?');
    if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase === 'y') {
        alert('yes , i do');
        score++;

    }
    else {
        alert('oops');
    }
}
answer4()

function answer5() {
    var answer5 = 'yes';
    var aswer5 = prompt('Do you think I like chocolate milkshake?');
    if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase === 'y') {
        alert('great');
        score++;

    }
    else {
        alert('oops');
    }
}
answer5()

function answer6() {
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


        --attempts;

        if (!flag) {
            alert(" You Have " + attempts + " Out Of 4 Attempts Left");
        }



    }
}
answer6()


function answer7() {
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
}
answer7()

confirm('okay thats it ...thank u dear and welcome again!')
