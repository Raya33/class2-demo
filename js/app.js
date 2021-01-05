'use Strict';
var answer = 'yes';
var aswer = prompt('do you think that my name have story ?');
if (answer.toLowerCase() === 'yes' || answer.toLowerCase === 'y') {
    alert('good, thats right');
    console.log('good, thats right');
}
else {
    alert('oops');
}


var answer2 = 'yes';
var answer2 = prompt('does my father have the biggest impact on my childhood?');
if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase === 'y') {
    alert('coool, thats right');
    console.log('coool, thats right');
}
else {
    alert('oops');
}



var answer3 = 'yes';
var answer3 = prompt('Have I ever visited another continent?');
if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase === 'y') {
    alert('thats right');
    console.log(' thats right');
}
else {
    alert('oops, i did');
}


var answer4 = 'yes';
var answer4 = prompt('Do you think I like horror movies?');
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase === 'y') {
    alert('yes , i do');
    console.log('yes , i do');
}
else {
    alert('oops');
}

var answer5 = 'yes';
var aswer5 = prompt('Do you think I like chocolate milkshake?');
if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase === 'y') {
    alert('great');
    console.log('great');
}
else {
    alert('oops');
}

var answer6 = 24;
// var opp = [1, 2, 3, 4];
for (var i = 0; i < 5; i++) {
    var userAnswer = prompt('guess my Age')
    if (Number(userAnswer) === answer6) {
        alert('thats right !');
        break
    } else if (Number(userAnswer) < answer6) {
        alert('too low');
    } else if (Number(userAnswer) > answer6) {
        alert('too high!');
    }
}
alert('the correct answer is 24');



var cars =['Mercedes','FERRARI','PORSCHE','DACIA SANDERO'];
for(var index=0;index<cars.length;index++){
    var answer7=prompt('what is my favorite car?');
    if (answer7.toLowerCase()===cars) {
       alert('thats right!'+answer7+'is one of my favorite cars')
       break
    }else{
        alert('wrong!')
    }
}
alert('my favorite cars are Mercede,FERRARI, PORSCHE,DACIA SANDERO')
confirm('okay thats it ...thank u dear and welcome again!')
