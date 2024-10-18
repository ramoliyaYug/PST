class Parent{
    public void add(int a,int b){
        System.out.println("this is yug: "+(a+b));
    }
}
class Child extends Parent{
    public void add(int a,int b){
        System.out.println("this is om: "+(a+b));
    }
}
public class RunTimeTest {
    public static void main(String[] args) {
        Child obj = new Child();
        obj.add(7,5);
    }
}
/*
compiler: it checks the syntax and data types
interpreter: it does invokes the methods

so when there is no difference in the data types and variables then compiler cannot differentiate between them so in runtime interpreter will invoke the method at that time the difference will be noticed and the java interpreter will invoke the child method. this is called the runtime polymorphism
*/