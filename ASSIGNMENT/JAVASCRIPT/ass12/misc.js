/*
Question 1: Book Library
You are developing a digital library system to manage books. Each book has a title, author, and year of publication. You want to create a library that can add books, list them, and clone books for editing without altering the original copy.
Create a constructor function to create 'Book' objects with properties: 'title', 'author', and 'year'.
Implement a function 'addBook' to add a book to the library (an array of books).
Implement a function 'listBooks' that lists all books in the library, using a 'for...of' loop.
Use the 'Object.assign()' method to create a clone of a book object, allowing changes to be made without affecting the original.
Test the functions by adding at least 3 books, cloning one, and listing all books.
*/

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

let library = [];

function addBook(book) {
    library.push(book);
}

function listBooks() {
    console.log("Library:");
    for (let book of library) {
        console.log(`${book.title} by ${book.author}, ${book.year}`);
    }
}

let book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
addBook(book1);

let book2 = new Book("1984", "George Orwell", 1949);
addBook(book2);

let book3 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
addBook(book3);
listBooks();

let clonedBook = Object.assign({}, book2);
clonedBook.title = "1984: A Novel";
listBooks();

console.log("Cloned book:", clonedBook.title);


/*
Question 2: Shopping Cart

You are building an online shopping cart where users can add, and view items. Each item has a name, price, and quantity.
1. Create a factory function 'createItem' to generate an item with properties 'name', 'price', and 'quantity'.
2. Implement a 'cart' array to store items.
3. Implement 'addItem' to add items from the cart.
4. Use a 'for...in' loop to iterate over the properties of an item object and display them.
5. Implement a 'calculateTotal' function that uses a 'for...of' loop to calculate the total cost of items in the cart.
*/

function createItem(name, price, quantity) {
    return {
        name: name,
        price: price,
        quantity: quantity
    };
}

let cart = [];

function addItem(item) {
    cart.push(item);
}

let item1 = createItem("Shoes", 100.00, 2);
addItem(item1);

let item2 = createItem("Jacket", 50.00, 1);
addItem(item2);

for (let property in item1) {
    console.log(`${property}: ${item1[property]}`);
}

function calculateTotal() {
    let total = 0;
    for (let item of cart) {
        total += item.price * item.quantity;
    }
    return total;
}

console.log("Total cost:", calculateTotal());

