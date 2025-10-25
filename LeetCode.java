/*
Given the root of a Binary Search Tree, a target value, and an integer k. Your task is to find the k values in the BST that are closest to the target.

The closest value is taken by choosing the one that gives minimum absolute difference from target.

Note: In case two values have same absolute difference from target, choose the smaller one. The target may or may not be present in BST.
You can return the values in any order the driver code will print them in sorted order only.

Examples:

Input: root = [20, 8, 22, 4, 12, N, N, N, N, 10, 14], target = 17, k = 3
     
Output: [14, 20, 12]
Explanation: Absolute difference of 17 wrt 14 and 20 is 3 and 3, but we choose the smaller value in case of same absolute difference. So, 14 coes first and then 20. Then, 12 and 22 have same absolute difference, i.e., 5 from 17. But we choose the smaller value, i.e., 12.
     
Input: root = [5, 4, 8, 1], target = 5, k = 2
     
Output: [5, 4]
Explanation: The absolute difference of 5 wrt 5 is 0, and for 4, the absolute difference is 1.
    
Constraints:
1 ≤ number of nodes, k ≤ 104
1 ≤ node->data, target ≤ 104


*/

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

class Node {
    int data;
    Node left, right;
    Node(int val) {
        data = val;
        left = right = null;
    }
}
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
    public ArrayList<Integer> getKClosest(Node root, int target, int k) {
        // code here
        ArrayList<Integer> list = new ArrayList<>();
        inorder(root, list);
        ArrayList<Integer> result = new ArrayList<>();
        Collections.sort(list, (a, b) -> {
            int diffA = Math.abs(a - target);
            int diffB = Math.abs(b - target);
            if (diffA != diffB) {
                return diffA - diffB;
            } else {
                return a - b;
            }
        });
        for (int i = 0; i < k; i++) {
            result.add(list.get(i));
        }
        return result;
    }
    public static ArrayList<Integer> inorder(Node root, ArrayList<Integer> list) {
        if (root == null) {
            return list;
        }
        inorder(root.left, list);
        list.add(root.data);
        inorder(root.right, list);
        return list;
    }

    public static void main(String[] args) {
        LeetCode solution = new LeetCode();
    }
}
