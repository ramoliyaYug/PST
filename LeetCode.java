/*
You are given a set of activities, each with a start time and a finish time, represented by the arrays start[] and finish[], respectively. A single person can perform only one activity at a time, meaning no two activities can overlap. Your task is to determine the maximum number of activities that a person can complete in a day.

Examples:

Input: start[] = [1, 3, 0, 5, 8, 5], finish[] = [2, 4, 6, 7, 9, 9]
Output: 4
Explanation: A person can perform at most four activities. The maximum set of activities that can be executed is {0, 1, 3, 4}
Input: start[] = [10, 12, 20], finish[] = [20, 25, 30]
Output: 1
Explanation: A person can perform at most one activity.
Input: start[] = [1, 3, 2, 5], finish[] = [2, 4, 3, 6]
Output: 3
Explanation: A person can perform activities 0, 1 and 3.
Constraints:
1 ≤ start.size() = finish.size() ≤ 2*105
0 ≤ start[i] ≤ finish[i] ≤ 109
*/

import java.lang.*;
import java.util.*;
import java.io.*;
import java.math.*;

// class Node {
//     int data;
//     Node left, right;
//     Node(int val) {
//         data = val;
//         left = right = null;
//     }
// }
class TreeNode {
     int val;
     TreeNode left;
     TreeNode right;
     TreeNode() {}
     TreeNode(int val) { this.val = val; }
     TreeNode(int val, TreeNode left, TreeNode right) {
         this.val = val;
         this.left = left;
         this.right = right;
    }
}
// class Pair{
//     int first;
//     int second;
//     Pair(int first, int second){
//         this.first = first;
//         this.second = second;
//     }
// }
public class LeetCode {
    public int activitySelection(int[] start, int[] finish) {
        // code here
        int n = start.length;
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < n; i++) {
            map.put(finish[i], start[i]);
        }
        int ans = 1;
        int lf = finish[0];
        for(int i = 1; i < n; i++) {
            if(map.get(finish[i]) > lf) {
                ans++;
                lf = finish[i];
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        LeetCode solution = new LeetCode();
    }
}