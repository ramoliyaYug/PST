package OPPs;
class Capsule{
    // If i am using static, public or default instead of private then i can access the variable in the class (EncapsulationPractice).
    public int medPrice=10;
    private int profit=20;
    private int sPrice=medPrice+profit;
    // This is a getter in java (Accesing the private variable inside the class)
    public int getPrice(){
        return sPrice;
    }
}
public class EncapsulationPractice {
    public static void main(String[] args) {
        Capsule obj1=new Capsule();
        System.out.println(obj1.getPrice());
        System.out.println(obj1.medPrice);
    }
}