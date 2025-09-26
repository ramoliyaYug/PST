abstract class Duck{
    swim():string{
        return "I can swim"
    }

    abstract fly():string
    abstract sound():string
}

class IndianDuck extends Duck{
    fly():string{
        return "Indian duck can fly with 5 kmph"
    }
    sound():string{
        return "Indian Quack!! Indian Quack!!"
    }
}

let indianduck:IndianDuck = new IndianDuck();
console.log(indianduck.fly());
console.log(indianduck.sound());
console.log(indianduck.swim());

//helloo cutiee 