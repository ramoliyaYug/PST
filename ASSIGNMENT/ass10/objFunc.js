/*
Question 1: Write a factory function in JavaScript that creates a person object with name and age properties. And then print them on console by function calling.
*/

function createPerson(name, age) {
    return{
        name: name,
        age: age,
    }; 
}

function printPersonDetails(person) {
    console.log(`name: ${person.name}`);    
    console.log(`age: ${person.age}`);    
}

const person1 = createPerson("Alice", 30);
printPersonDetails(person1);

/*
Question 2: Create a function called printPersonInfo that takes a person object as an argument and prints its details (name and age) on the console. Create a person object and use the printPersonInfo function to display its information.
*/

function printPersonInfo(name2, age2) {
    this.name2 =name2;
    this.age2 =age2;
}

const person3 = new printPersonInfo("Sarah",35)
console.log("person3: ");
console.log(person3);
/*
Question 3: Create a constructor function called Book that takes title and author as parameters and assigns them as properties to the book object. Then, create two book objects using the Book constructor and display their details on the console.
*/

function Book(title, author) {
    this.title = title;
    this.author = author;
}

const book1 = new Book("The catcher in the rye", "J. D. Salinger");
console.log("Book1: ");
console.log(book1);
const book2 = new Book("1984", "George Orwell");
console.log("Book2: ");
console.log(book2);