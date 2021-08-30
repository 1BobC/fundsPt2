// const button= document.querySelector('button');

// button.onclick= function(){
//     let name= prompt('What is your name? ');
//     alert('Hello ' + name + ', nice to see  you! ');
// }

let song = 'Hintern Steuer';
let score = '9';
let highestScore = '10';

output = `I like the song ${song}. I gave it ${score} out of ${highestScore}.`;
console.log(output);
document.getElementById("bob1").innerHTML= (`A - I like the song ${song}. I gave it ${score} out of ${highestScore}.`);

//Q - What is the syntax for a ternary operator?
let greeting = person =>{
    let name = person ? person.name : `stranger`
    return `A - Howdy ${name}`
}
    console.log(greeting({name: `Alice`}));
    document.getElementById('bob2').innerHTML= greeting({name: `June`});

    console.log(greeting(null));
    document.getElementById('bob3').innerHTML= greeting(null);

//Q - What is the syntax for an if/else conditional?
const hour = new Date().getHours(); 
let acknowledge;

if (hour < 18) {
  acknowledge = "Good day";
} else {
  acknowledge = "Good evening";
}
    console.log(acknowledge);
    document.getElementById("bob4").innerHTML = acknowledge;

//Q - What is the syntax for a switch statement?
function myFunction() {
    var text;
    var fruits = document.getElementById("myInput").value;
  
    switch(fruits) {
      case "Banana":
        text = "Banana is good!";
      break;
      case "Orange":
      text = "I am not a fan of orange.";
      break;
      case "Apple":
      text = "How you like them apples?";
      break;
      default:
      text = "I have never heard of that fruit...";
    }
    console.log(text);
    document.getElementById("bob5").innerHTML = text;
  }