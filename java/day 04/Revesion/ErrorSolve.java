package Revesion;
import java.util.Scanner;
public class ErrorSolve {
    public static void main(String[] args) {
    Scanner input=new Scanner(System.in);
    System.out.println("Enter Your Name: ");
    String name=input.nextLine();
    System.out.println("Enter Your Roll No: ");
    int rollno=input.nextInt();
    // This problem occurs only when input is already taken before the nextline input.
    // This is used to consume the \n of the previous input.
    input.nextLine(); // if i am not using this one then code will be skipping the Carzy input as the next line to compatible with others as other generates a \n automaticlly ex using nextInt().
    System.out.println("Enter Something Crazy: ");
    String crazy=input.nextLine();
    System.out.println("Name: "+name);
    System.out.println("Roll No: "+rollno);
    System.out.println("Something Crazy: "+crazy);
    input.close();
    }
}
