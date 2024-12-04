/*
You are given three digits a
, b
, c
. Two of them are equal, but the third one is different from the other two.

Find the value that occurs exactly once.

Input
The first line contains a single integer t
 (1≤t≤270
) — the number of test cases.

The only line of each test case contains three digits a
, b
, c
 (0≤a
, b
, c≤9
). Two of the digits are equal, but the third one is different from the other two.

Output
For each test case, output the value that occurs exactly once.
*/

import java.util.ArrayList;
import java.util.Scanner;
public class CodeForces {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        ArrayList<Integer> res = new ArrayList<>();
        for (int i = 0; i < t; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();
            if (a != b && a != c) {
                res.add(a);
            } else if (b != a && b != c) {
                res.add(b);
            } else {
                res.add(c);
            }
        }
        for (int i = 0; i < res.size(); i++) {
            System.out.println(res.get(i));
        }
    }
}

