package Packages;
/*  
1. Packages( Similar as Folder)
Basically used to organise Code And Class Files
(i) BuildIn: Already defined packages in Java. Example: Scanner, Until....
(ii) User Defined: We can create our own packages.

2. Create a java file without the main method
at top add package, packageName
to Complile=> javac -d javafileName.java
*/
import java.util.Scanner;
public class first {
public static void main(String[] args){
Scanner ko=new Scanner (System.in);
System.out.print("Enter a number: ");
int a=ko.nextInt();
System.out.println("Here is the number: "+a);
ko.close(); // To Avoid resource leakage
}
}