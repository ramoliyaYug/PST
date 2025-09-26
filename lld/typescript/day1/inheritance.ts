class Shape{
    name:string;
    constructor(name:string){
        this.name=name;

    }
}
class Circle extends Shape{
    radius:number;

    constructor(name:string,raduis:number){
        super(name);
        this.radius=raduis
    }
area():string{
    return `Shape ${this.name} with ${this.radius} has area ${this.radius*this.radius * 2}`
}
}
let c:Circle = new Circle("myCircle",2);
console.log(c.name);
console.log(c.area);