import Packages.Calc.CreatePack;
import java.util.Scanner;
class UsePack {
    public static void main(String[] args) {
        CreatePack obj = new CreatePack();
        Scanner Input=new Scanner(System.in);
        System.out.print("Enter the First number: ");
        int a=Input.nextInt();
        System.out.print("Enter the Second number: ");
        int b=Input.nextInt();
        System.out.println("What would you like to do?");
        System.out.println("1. Add");
        System.out.println("2. Subtract");
        System.out.println("3. Multiply");
        System.out.println("4. Divide");
        System.out.print("Enter your choice: ");

        int choice=Input.nextInt();
        switch(choice) {
            case 1:
                obj.add(a,b);
                break;
            case 2:
                obj.sub(a,b);
                break;
            case 3:
                obj.mul(a,b);
                break;
            case 4:
                obj.div(a,b);
                break;
            default:
                obj.add(a,b);
                break;
        }
        Input.close();
    }
}
