const prompt = require("prompt-sync")();

let name = prompt("enter your name");
console.log(`welcome ${name}🤡`);

let num = Math.floor(Math.random() * (100 - 1))+1;
function againPrime(x){
    if (x<2){
        console.log(`Hint : Number is composite number`);
        return false;
    }
    if (x==2){
        console.log(`Hint : Number is prime number`);
        return true;
    }
        for (let z=2;z<=x/2;z++){
        if (x%z==0){
            console.log(`Hint : Number is composite number`);
            return false;
        }
    }

    console.log(`Hint : Number is prime number`);
    return true;
}

againPrime(num);


let count = 1;
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


if(count <=4 && count >=1){
    console.log(`you are li-gend`);
}else if(count >4 && count<=6){
    console.log(`you are good player`);
}else{
    console.log(`well played ${name} better luck next time`)
}