package OPPs;
class Parent{
    String property="5Cr";
}
class Child extends Parent{
    String childProperty=property;
}
public class InheritancePractice {
    public static void main(String[] args) {
        Child obj1=new Child();
        System.out.println(obj1.childProperty);
        System.out.println(obj1.property);
    }
}
