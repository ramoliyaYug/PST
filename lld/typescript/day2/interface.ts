interface IDuck{
    fly():string;
    sound():string;
    swim():string;
}
class IndianDuck implements IDuck{
    fly(): string {
        return "Indian duck can fly with 5 kmph";
    }
    sound(): string {
        return "Indian Quack!! Indian Quack!!";
    }
    swim(): string {
        return "Indian Style Swimming";
    }
}

let indianDuck:IndianDuck = new IndianDuck();
console.log(indianDuck.fly());
console.log(indianDuck.sound());
console.log(indianDuck.swim());

class AmericanDuck implements IDuck{
    fly(): string {
        return "American duck can fly with 10 kmph";
    }
    sound(): string {
        return "American Quack!! American Quack!!";
    }
    swim(): string {
        return "American Style Swimming";
    }
}

class rubberDuck implements IDuck{
    fly(): string {
        throw new Error("Method not implemented.");
    }
    sound(): string {
        throw new Error("Method not implemented.");
    }
    swim(): string {
        throw new Error("Method not implemented.");
    }

}