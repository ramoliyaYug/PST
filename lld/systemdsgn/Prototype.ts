class Soldier {
    name: string;
    weapon: string;

    constructor(name: string, weapon: string) {
        this.name = name;
        this.weapon = weapon;
    }

    // Clone method returns a new Soldier object that is a shallow copy of the current one
    clone(): Soldier {
        // Object.create() creates a new object with the same prototype as 'this'
        // Object.assign() copies all properties from 'this' to the new object
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    // Display details of the soldier
    display(): void {
        console.log(`Soldier: ${this.name}, Weapon: ${this.weapon}`);
    }
}

// ✅ Usage
const soldier1 = new Soldier("Yug", "Phathar");

// Clone soldier1 to create a new soldier (Prototype Pattern)
const soldier2 = soldier1.clone();
soldier2.name = "Raju";
soldier2.weapon = "Rifle";

soldier2.display();  // Soldier: Raju, Weapon: Rifle
soldier1.display();  // Soldier: Yug, Weapon: Phathar