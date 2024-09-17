/*
loops:
- used when we need to do repeated increament or decreament

types of loops:
1. for loop
2. while loop
3. do-while loop

for loop:
    for (initialization; condition; increment/decrement) {
        code block
    }
        
while loop:
    while (condition) {
        code block
    }
        
do-while loop:
    do {
        code block
    } while (condition);
*/

//print first 20 natural numbers:

for(i = 0; i<=20; i++) {
    console.log(i);
}

//print odd numbers:

for(i = 1; i<=20; i+=2) {
    console.log(i);
}

//print prime numbers:
function againPrime(x){
    if (x<2){
        return false;
    } else if (x==2){
        return true;
    }for (let z=0;z<=x/2;z++){
        if (x%z==0){
            return false;
        }
    }
    return true;
}

for(i = 0; i<=20; i++) {
    if(againPrime(i) == true){
        console.log(i);
    }
}


 