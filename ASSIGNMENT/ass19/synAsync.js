/*
Question 1:

Create a program that prints numbers from 1 to 10 synchronously, and then prints numbers from 11 to 20 asynchronously using setTimeout
*/
function printNumbers(){
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    
    for (let i = 11; i <= 20; i++) {
        setTimeout(function () {
            console.log(i);
        }, (i - 10) * 1000);
    }
    }
    printNumbers();
    /*
Question 2:

Write a function checkWeather() that resolves with "Sunny" or rejects with "Rainy" randomly. Use .then() to print "Weather is great for a picnic!" if resolved and .catch() to print "It might rain today!" if rejected
*/

function checkWeather() {
    return new Promise((resolve, reject) => {
        let weather = Math.random()> 0.5 ? "sunny" : "rainy";
        setTimeout(()=>{
            if(weather === "sunny"){
                resolve(weather);
            }else{
                reject(weather);
            }
        }, 1000)
    })
}

checkWeather()
.then(()=>{
    console.log("Weather is great for a picnic!");
}).catch(()=>{
    console.log("It might rain today!");
});

/*
Question 3:

Create a function makeDinner() that executes four steps (Boil water, Add pasta, Stir sauce, Serve meal) sequentially, each step taking 1 second, using nested callbacks.
*/

function makeDinner(){
    setTimeout(()=>{
        console.log("Boling Water...");
        setTimeout(()=>{
            console.log("Adding Pasta...");
            setTimeout(()=>{
                console.log("Stirring Sauce...");
                setTimeout(()=>{
                    console.log("Serving Meal...");
                },1000)
            },1000)
        },1000)
    },1000)
}

makeDinner();

/*
Question 4: Basic Stock Price Checker
You need to simulate a basic system that checks the stock price every 2 seconds. If the stock price goes above 400, the system will alert you and stop.

Requirements:
Stock Price Simulation (setInterval):
Write a function that generates a random stock price between 100 and 500 every 2 seconds.

Promise to Alert High Price:
If the stock price goes above 400, the Promise resolves and shows an alert. If not, it keeps checking.

Stop Checking When Price is Too High:
Once an alert is triggered, stop the stock price simulation.
*/

function fetchStockPrice(){
    return Math.floor(Math.random()*(500-100+1))+100
}

function checkPrice(price){
    return new Promise((resolve, reject)=>{
        if(price > 400){
            resolve();
            console.log("Alert : High Price detected! Stops Checks");
        }else{
            reject();
        }
    })
}

function startMonitoring(){
    let intervalId = setInterval(()=>{
        let price = fetchStockPrice();
        console.log(`Price: ${price}`);

        checkPrice(price)
        .then(()=>{
            clearInterval(intervalId);
        }).catch(()=>{
            console.log("Checking Price Again...");
        })
    },2000)
}

startMonitoring();

/*
Question 5:

Write a code using the concept of promise, fetch the json data from https://dummyjson.com/posts and console the data in the terminal.
*/

let data = fetch('https://dummyjson.com/posts');

let response = data.then(data => data.json());
console.log(response);

response.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("Error fetching data", error);
})

