package Packages;
import java.util.Scanner;

public class second {
    public static int add(int a,int b){
        return(a+b);
    }
    public static void main(String [] args){
        Scanner Num=new Scanner(System.in);
        System.out.print("Enter the First number: ");
        int a=Num.nextInt();
        System.out.print("Enter the Second number: ");
        int b=Num.nextInt();
        Num.close();
        int hello=add(a,b);
        System.out.println("Here is the Sum: "+hello);
    }
}
