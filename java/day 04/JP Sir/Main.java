import people.Person;
import people.Employee;
public class Main{
    public static void main(String[] args)
    {
        Person obj=new Person();
        
        //public 
        System.out.println(obj.name);
        obj.getname();


        //protected
        //  System.out.println(obj.age); error because this protected properites cannot possible
        //  obj.getage();


        // private 
        //  System.out.println( obj.Atmpin); error because this private properites can't be accessed from outside the class

      //employee object
        Employee obj1=new Employee();
        obj1.getdetails();
    }
}