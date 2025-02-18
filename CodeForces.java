/*

*/
import java.util.*;

public class CodeForces {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int sum = 0;
        //find the sum of the first and last digit of the num
        sum = n%10;
        while(n>0){
            if(n<10){
                sum += n;
                break;
            }
            n = n/10;
        }
        System.out.println(sum);
    }
}

