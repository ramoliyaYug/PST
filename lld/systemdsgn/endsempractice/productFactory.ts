/*Q3. Product Factory
Problem:
Use the Factory Design Pattern to create different types of products (Laptop, Phone,
Tablet) implementing a common Product interface.
interface Product {
name: string;
price: number;
getDescription(): string;
}
Create a ProductFactory class with a static method createProduct(type: string):
Product.
Example:
const laptop = ProductFactory.createProduct("laptop");
console.log(laptop.getDescription()); // "Laptop with high performance
specs"*/

interface Product{
    name: string;
    price: number;
    getDescription(): void;
}

class Laptop implements Product{
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    getDescription():void{
        console.log(`${this.name} laptop with ${this.price} price`);
    }
}

class Phone implements Product{
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    getDescription(): void {
        console.log(`${this.name} phone with ${this.price} price`);
    }
}

class Tablet implements Product{
    name:string
    price:number
    constructor(name:string,price:number) {
        this.name = name;
        this.price = price;
    }
    getDescription():void{
        console.log(`${this.name} tablet with ${this.price} price`);
    }
}
class ProductFactory{
    static createProduct(type:string):Product{
        switch (type) {
            case "Laptop": return new Laptop("HP omen" , 130000)
            case "Phone" : return new Phone("Samsung S23", 40000)
            case "Tablet" : return new Tablet("Samsung galexy tab A", 20000)
            default: throw new Error("Unrecognized type")
        }
    }
}

const laptop = ProductFactory.createProduct("Laptop")
const phone = ProductFactory.createProduct("Phone")
const tablet = ProductFactory.createProduct("Tablet")

laptop.getDescription()
phone.getDescription()
tablet.getDescription()