/*
You are given an array with unique elements of stalls[], which denote the positions of stalls. You are also given an integer k which denotes the number of aggressive cows. The task is to assign stalls to k cows such that the minimum distance between any two of them is the maximum possible.

Examples:

Input: stalls[] = [1, 2, 4, 8, 9], k = 3
Output: 3
Explanation: The first cow can be placed at stalls[0], 
the second cow can be placed at stalls[2] and 
the third cow can be placed at stalls[3]. 
The minimum distance between cows in this case is 3, which is the largest among all possible ways.
Input: stalls[] = [10, 1, 2, 7, 5], k = 3
Output: 4
Explanation: The first cow can be placed at stalls[0],
the second cow can be placed at stalls[1] and
the third cow can be placed at stalls[4].
The minimum distance between cows in this case is 4, which is the largest among all possible ways.
Input: stalls[] = [2, 12, 11, 3, 26, 7], k = 5
Output: 1
Explanation: Each cow can be placed in any of the stalls, as the no. of stalls are exactly equal to the number of cows.
The minimum distance between cows in this case is 1, which is the largest among all possible ways.
Constraints:
2 ≤ stalls.size() ≤ 106
0 ≤ stalls[i] ≤ 108
2 ≤ k ≤ stalls.size()
*/
import java.lang.reflect.Array;
import java.util.Arrays;

public class AggressiveCows {

    public static boolean check(int[] stalls,int k,int dist){
        int n =stalls.length;
        int count = 1;
        int prev = stalls[0];
        for(int i = 1;i,=n;i++){
            if(stalls[i] - prev >= dist){
                count++;
                prev = stalls[i];
            }
        }
        return count >= k;
    }

    public int aggressiveCows(int[] stalls, int k) {
        int n = stalls.length;
        Arrays.sort(stalls);
        int left = 0;
        int right = stalls[n - 1] - stalls[0];
        int ans = 0;
        while (left<=right) {
            int mid = left+(right-left)/2;
            if (check(stalls, k, mid)) {
                ans = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        AggressiveCows obj = new AggressiveCows();
        int[] stalls = {1, 2, 4, 8, 9};
        int k = 3;
        System.out.println(obj.aggressiveCows(stalls, k));
    }
}