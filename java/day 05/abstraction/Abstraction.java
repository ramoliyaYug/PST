/*
we use abstract to define the set of rules so the all the classes should follow the same rules.
abstraction is the process of hiding the implementation details and showing only the essential features of an object.
-abstract keyword or interface
- hiding unnessary details:
 - through abstract class is blue print that contains same abstract methods that child/sub class has to follow and same concate methods
*/
abstract class Baap {
    abstract public void language();
    public void message(){
        System.out.println("I  am concrete method");
    }
}

class beta extends Baap{
    public void language(){
        System.out.println("I  am language");
    }
    public void plan(){
        System.out.println("will play with friends");
        message();
    }
    @Override
    public void greetings(){
        System.out.println("namaste");
    }
}
public class Abstraction {
    public static void main(String[] args) {
        beta obj = new beta();
        obj.language();
        obj.message();
        obj.plan();
    }
}
