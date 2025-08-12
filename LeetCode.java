/*
Given a positive integer n, there exists a 0-indexed array called powers, composed of the minimum number of powers of 2 that sum to n. The array is sorted in non-decreasing order, and there is only one way to form the array.

You are also given a 0-indexed 2D integer array queries, where queries[i] = [lefti, righti]. Each queries[i] represents a query where you have to find the product of all powers[j] with lefti <= j <= righti.

Return an array answers, equal in length to queries, where answers[i] is the answer to the ith query. Since the answer to the ith query may be too large, each answers[i] should be returned modulo 109 + 7.

 

Example 1:

Input: n = 15, queries = [[0,1],[2,2],[0,3]]
Output: [2,4,64]
Explanation:
For n = 15, powers = [1,2,4,8]. It can be shown that powers cannot be a smaller size.
Answer to 1st query: powers[0] * powers[1] = 1 * 2 = 2.
Answer to 2nd query: powers[2] = 4.
Answer to 3rd query: powers[0] * powers[1] * powers[2] * powers[3] = 1 * 2 * 4 * 8 = 64.
Each answer modulo 109 + 7 yields the same answer, so [2,4,64] is returned.
Example 2:

Input: n = 2, queries = [[0,0]]
Output: [2]
Explanation:
For n = 2, powers = [2].
The answer to the only query is powers[0] = 2. The answer modulo 109 + 7 is the same, so [2] is returned.
 

Constraints:

1 <= n <= 109
1 <= queries.length <= 105
0 <= starti <= endi < powers.length
The powers array can be created using the binary representation of n.
Hint 2
Once powers is formed, the products can be taken using brute force.
*/
import java.util.*;
import java.io.*;
import java.math.*;
import java.util.stream.*;
import java.util.function.*;
import java.util.regex.*;
import java.lang.*;
import java.lang.reflect.Array;
import java.time.*;

public class LeetCode {
    public int[] productQueries(int n, int[][] queries) {
        ArrayList<Integer> powers = new ArrayList<>();
        int mod = 1000000007;
        int pow = 1;
        while (n>0) {
            if(n%2 == 1) {
                powers.add(pow);
            }
            n /= 2;
            pow *= 2;
        }
        ArrayList<Long> ans = new ArrayList<>();
        for (int i = 0; i < queries.length; i++) {
            long product = 1;
            for (int j = queries[i][0]; j <= queries[i][1]; j++) {
                product = (product * powers.get(j)) % mod;
            }
            ans.add(product);
        }
        int[] result = new int[ans.size()];
        for (int i = 0; i < ans.size(); i++) {
            result[i] = (int) (ans.get(i) % mod);
        }
        return result;
    }


    public static void main(String[] args) {
        LeetCode solution = new LeetCode();
    }
}
