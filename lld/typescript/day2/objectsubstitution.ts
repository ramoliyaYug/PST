class Duck{
    fly():string{
        return "parent duck is flying"
    }
}


class ChildDuck1 extends Duck{
    fly():string{
        return "child duck 1 is flying"
    }
}

class ChildDuck2 extends Duck{
    fly():string{
        return "child duck 2 is not flying"
    }
}

function makeDuckFly(duck:Duck){
    console.log(duck.fly());
}

let p:Duck = new Duck();
let childDuck1:ChildDuck1 = new ChildDuck1();
let childDuck2:ChildDuck2 = new ChildDuck2();

makeDuckFly(childDuck1);
makeDuckFly(childDuck2);
makeDuckFly(p);
