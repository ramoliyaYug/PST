class Meal {
    mainDish: string;
    side?: string;
    dessert?: string;

    constructor(mainDish: string, side?: string, dessert?: string) {
        this.mainDish = mainDish;
        this.side = side;
        this.dessert = dessert;
    }

    display(): void {
        // Build a readable message based on what's present
        let mealDescription = `Your meal is ${this.mainDish}`;
        if (this.side) mealDescription += ` with ${this.side}`;
        if (this.dessert) mealDescription += ` and dessert: ${this.dessert}`;
        
        console.log(mealDescription);
    }
}

class MealBuilder {
    private mainDish!: string;  // definite assignment
    private side?: string;
    private dessert?: string;

    setMainDish(mainDish: string): this {
        this.mainDish = mainDish;
        return this;
    }

    setSide(side: string): this {
        this.side = side;
        return this;
    }

    setDessert(dessert: string): this {
        this.dessert = dessert;
        return this;
    }

    build(): Meal {
        return new Meal(this.mainDish, this.side, this.dessert);
    }
}

// ✅ Usage
const meal = new MealBuilder()
    .setMainDish("Steak")
    .setSide("Fries")
    .setDessert("Ice Cream")
    .build();

meal.display(); // Output: Your meal is Steak with Fries and dessert: Ice Cream

