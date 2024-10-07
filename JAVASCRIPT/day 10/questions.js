//Question 1. create a function car which take an object which has properties car_model, color, year_of_purchase,and a function which will calculate the car how old it is.this function will take one parameter currunt year and display the result (your tesla car is 10 year old)
//1.using factory function
function Car(model, color, year_of_purchase){
    return{
        car_model: model,
        color: color,
        year_of_purchase: year_of_purchase,
        calculateAge: function(current_year){
            return current_year - year_of_purchase;
        }
    }
}

let Tesla = Car("Tesla Model S", "black", 2020);
let age1 = Tesla.calculateAge(2024); //10 year old
console.log(`my ${Tesla.car_model} is ${age1} years old`)

//2.constructor function
function car(car_model, color, year_of_purchase){
    this.car_model = car_model;
    this.color = color;
    this.year_of_purchase = year_of_purchase;
    this.calculateAge = function(current_year){
        return current_year - this.year_of_purchase;
    }
};

let tesla = new car("Tesla Model S", "black", 2020);
let age2 = tesla.calculateAge(2030);

console.log(`my ${tesla.car_model} is ${age2} years old`);


