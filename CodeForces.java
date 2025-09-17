/*
*/
import java.lang.*;
import java.util.*;

public class CodeForces {

    static void solve(Scanner sc) {
        int x = sc.nextInt();
        int n = sc.nextInt();
        if(n%2==0){
            System.out.println(0);
        }else{
            System.out.println(x);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int t = 1;
        if (sc.hasNextInt()) {t = sc.nextInt();}
        while (t-- > 0) {
            solve(sc);
        }
    }
}


