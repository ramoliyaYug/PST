const prompt = require("prompt-sync")();

let name = prompt("enter your name");
console.log(`welcome ${name}😘`);

let count = 1;
let num = Math.floor(Math.random() * (100 - 1))+1;
while(true){
    let inp = prompt("Guess the number (1-100): ");
    if(inp > num){
        console.log("You entered a bigger number");
    }else if(inp < num){
        console.log("You entered a smaller number");
    }else{
        console.log(`Congratulations! You guessed the correct number in ${count} times!`);
        break;
    }
    count++;
}
