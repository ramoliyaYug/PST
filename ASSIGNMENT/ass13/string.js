/*
Question 1: Text Parser
You are building a simple text processing application in JavaScript. Implement a function that takes a string as input and performs the following tasks using various string methods:
Convert the string to lowercase.
Remove all spaces from the string.
Check if the resulting string contains the word "javascript" (case insensitive).
Count the number of occurrences of the letter 'a' in the string.
Replace all occurrences of the letter 'e' with 'X' in the string.
*/

function textParser(input) {
    let lowerCaseStr = input.toLowerCase();

    let noSpaceStr = lowerCaseStr.replace(/ /gi, '');

    let containsJavaScript = noSpaceStr.includes('javascript');

    let countA = 0;
    for (let i = 0; i < noSpaceStr.length; i++) {
        if (noSpaceStr[i] === 'a') {
            countA++;
        }
    }

    let replacedStr = noSpaceStr.replace(/e/gi, 'X');

    return {
        lowerCaseStr,
        noSpaceStr,
        containsJavaScript,
        countA,
        replacedStr
    };
}

console.log(textParser("javascript is an excellent programming language"));