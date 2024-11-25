/*
Given a two-digit positive integer n
, find the sum of its digits.

Input
The first line contains an integer t
 (1≤t≤90
) — the number of test cases.

The only line of each test case contains a single two-digit positive integer n
 (10≤n≤99
).

Output
For each test case, output a single integer — the sum of the digits of n
.
*/
import java.util.Scanner;

public class CodeForces {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        int[] res = new int[t];
        
        for (int i = 0; i < t; i++) {
            int n = sc.nextInt();
            int sum = 0;
            while (n > 0) {
                int rem = n % 10;
                sum += rem;
                n = n / 10;
            }
            res[i] = sum;
        }
        for (int i = 0; i < t; i++) {
            System.out.println(res[i]);
        }
    }
}

