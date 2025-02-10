/*
This is the easy version of the problem. In this version, m=1
.

Skibidus has obtained two arrays a
 and b
, containing n
 and m
 elements respectively. For each integer i
 from 1
 to n
, he is allowed to perform the operation at most once:

Choose an integer j
 such that 1≤j≤m
. Set ai:=bj−ai
. Note that ai
 may become non-positive as a result of this operation.
Skibidus needs your help determining whether he can sort a
 in non-decreasing order∗
 by performing the above operation some number of times.

∗
a
 is sorted in non-decreasing order if a1≤a2≤…≤an
.

Input
The first line contains an integer t
 (1≤t≤104
) — the number of test cases.

The first line of each test case contains two integers n
 and m
 (1≤n≤2⋅105
, m = 1
).

The following line of each test case contains n
 integers a1,a2,…,an
 (1≤ai≤109
).

The following line of each test case contains m
 integers b1,b2,…,bm
 (1≤bi≤109
).

It is guaranteed that the sum of n
 and the sum of m
 over all test cases does not exceed 2⋅105
.

Output
For each test case, if it is possible to sort a
 in non-decreasing order, print "YES" on a new line. Otherwise, print "NO" on a new line.

You can output the answer in any case. For example, the strings "yEs", "yes", and "Yes" will also be recognized as positive responses.
*/
import java.util.*;
import java.io.*;

public class CodeForces {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt(); // Number of test cases

        while (t-- > 0) {
            int n = sc.nextInt(); // Number of elements in array a
            int m = sc.nextInt(); // Number of elements in array b (always 1 in this version)

            int[] a = new int[n];
            for (int i = 0; i < n; i++) {
                a[i] = sc.nextInt(); // Reading array a
            }

            int b = sc.nextInt(); // Reading the single element of array b

            // Apply operation: a[i] = b - a[i] for all i
            for (int i = 0; i < n; i++) {
                a[i] = b - a[i];
            }

            // Check if the transformed array is sorted
            boolean sorted = true;
            for (int i = 1; i < n; i++) {
                if (a[i] < a[i - 1]) {
                    sorted = false;
                    break;
                }
            }

            System.out.println(sorted ? "yes" : "no");
        }
    }
}