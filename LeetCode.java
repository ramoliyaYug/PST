/*
There are n children standing in a line. Each child is assigned a rating value given in the integer array arr[]. You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating than their neighbors get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute.

Note: The answer will always fit into a 32-bit integer.

Examples:

Input: arr[] = [1, 0, 2]
Output: 5
Explanation: Children at index 0 and 2 will get 2 candies each as their rating is higher than index 1, and index 1 will get 1 candy. Thus total candies = 2 + 1 + 2 = 5.
Input: arr[] = [1, 2, 2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively. The third child gets 1 candy because it satisfies the above two conditions.
Constraints:
1 ≤ arr.size() ≤ 105
0 ≤ arr[i] ≤ 109
Iterate twice over the ratings array, first from left end and then from right end.
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
public class LeetCode {
    

    public static void main(String[] args) {
        LeetCode solution = new LeetCode();
    }
}