/*
QUESTION 1:
You have been given the task of building a function that converts a temperature value from Fahrenheit to Celsius.
Fahrenheit and Celsius are units of Temperature. The formula to convert Fahrenheit to Celsius is as follows:
Celsius value = (Fahrenheit value - 32) * 5/9
Your task is to implement the `convertToCelsius` function that accepts a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
*/

function convertToCelsius(fahrenheit) {
    let  temperatureInCelsius = (fahrenheit - 32) * (5/9);
    return temperatureInCelsius;
}

console.log(convertToCelsius(68)); //output:20
console.log(convertToCelsius(32)); //output:0
console.log(convertToCelsius(100)); //output:37.77777777777778

/*
QUESTION 2:
You have been given the task of building a function that calculates the area of a circle based on its radius.
The formula to calculate the area of a circle is as follows:
Area = 3.14 * radius * radius
Your task is to implement the `calculateCircleArea` function that accepts the radius of a
circle and returns its area.
*/

function calculateCircleArea(radius) {
    let area = 3.14 * radius * radius;
    return area;
}

console.log(calculateCircleArea(5)); //output:78.5
console.log(calculateCircleArea(10)); //output:314
console.log(calculateCircleArea(0)); //output:0