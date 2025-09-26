class Duck{
    swim():string{
        return "I can swim"
    }
    fly():string{
        return "I can fly"
    }
}

class IndianDuck extends Duck{
    fly():string{
        return "Indian duck can fly with 5 kmph"
    }
}

class AmericanDuck extends Duck{
    fly():string{
        return "i cannot fly"
    }
}

let indianduck:IndianDuck = new IndianDuck();
console.log(indianduck.fly());
console.log(indianduck.swim());

let americanduck:AmericanDuck = new AmericanDuck();
console.log(americanduck.fly());
console.log(americanduck.swim());