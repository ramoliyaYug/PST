/*

*/
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
      crazy(3,4,5);
    }
    public static void crazy(int n,int a,int b){
      if(n<=0){
        return;
      }
      crazy(n-1,a,b+n);

      System.out.println(n+" "+a+" "+b);
      crazy(n-1, b, a+n);
    }
}