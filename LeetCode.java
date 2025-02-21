/*
The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

 

Example 1:

Input: n = 3, k = 3
Output: "213"
Example 2:

Input: n = 4, k = 9
Output: "2314"
Example 3:

Input: n = 3, k = 1
Output: "123"
 

Constraints:

1 <= n <= 9
1 <= k <= n!
*/

import java.util.List;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Stack;

public class LeetCode {
    public String getPermutation(int n, int k) {
        int[] fact = new int[n];
        List<Integer> nums = new ArrayList<>();
        fact[0] = 1;
        for (int i = 1; i < n; i++) {
            fact[i] = fact[i - 1] * i;
        }
        for (int i = 1; i <= n; i++) {
            nums.add(i);
        }
        k--;
        StringBuilder sb = new StringBuilder();
        for (int i = n - 1; i >= 0; i--) {
            int index = k / fact[i];
            sb.append(nums.get(index));
            nums.remove(index);
            k %= fact[i];
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        LeetCode sol = new LeetCode();
        int n = 3;
        int k = 3;
        System.out.println(sol.getPermutation(n, k));
    }
}
