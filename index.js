var readlineSync = require("readline-sync");

const chalk = require('chalk');
var score =0;
 
var userName = readlineSync.question("what is your name?:");

console.log(chalk.red("Welcome "+userName+ " to  Game of Thrones Quiz"));

var highScores=[{

name:"Muneeb",
score: 10,
},

]

function play(question, answer){
 var userAnswer = readlineSync.question(question);
 if (userAnswer.toUpperCase() === answer.toUpperCase()){
   console.log(chalk.blue("Right!"));
   score= score+1;
 }
 else {
 console.log(chalk.green("Wrong!"));

 }
 console.log("current score:",score);
}

  var questionBank= [
  {

question: `
	In the TV show, what was Hodor called before he got his tragic door-holding nickname?
  a: Wylis
  b: Horys
  c: Myrys
  d: Gladys\n`, 
  answer: "a"
  },
  {
    question: `
    Who said: 'I don’t plan on knitting by the fire while men fight for me'?
    a :Lyanna Mormont
    b: Sansa Stark
    c: Ser Brienne of Tarth
    d: Olenna Tyrell\n`, 
    answer: "a"
  },
  {
    question:`
    Who was the leader of the Golden Company sellswords when Dany ransacked King’s Landing?
    a: Wes Borland
    b: Harry Strickland
    c: Kiefer Sutherland
    d: Robert Westland\n`, 
    answer:"b"
  },
  {
    question: `
    Who was responsible for the creation of the Night King?
    a: The Lord of Light
    b: The Children of the Forest
    c: The Drowned God
    d: The First Men\n`, 
    answer: "b"
  },
  {
    question: `Where is the House of Black and White, the training temple of the Faceless Men?
    a: Qarth
    b: Braavos
    c: Meereen
    d: No one knows\n`,
    answer: "b"
  },
  {
    question: ` How did Daenerys Targaryen eventually hatch her dragon eggs?
     a: In a lightning storm
     b:In a funeral pyre
     c: In a fireplace
     d:  In a frozen cave\n`,
     answer:"b"
  },
  {
    question: `
    The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:
    a: Valar Dohaeris or 'all men must serve'
    b: Valar Rohnas or 'all men must live'
    c: Valar GoGo or 'all men must dance'\n`,
    answer :"a"
  },
  {
    question:`
    How many times has Beric Dondarrion been brought back to life?
    a: Three times
    b:  Five times
    c: Six times
    d: Seven times\n`, 
    answer: "c"
  },
  {
    question : `
    Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?
     a: Ghost
     b: Lady
     c:  Nymeria
     d:  Summer\n`, 
     answer: "b"
  },
  {
    question: `
    'It's nothing' were the last words of this infamous character:
     a: Renly Baratheon
     b: Tywin Lannister
     c: Robb Stark
     d: King Joffrey\n`,
     answer: "d"
  },

 ];
for(i=0;i<questionBank.length;i++)
{
  var currentQuestion= questionBank[i];
  play(currentQuestion.question, currentQuestion.answer) 

}
console.log(chalk.green("Wow,you scored",score));

  