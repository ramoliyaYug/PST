/*
You are given the root of a complete binary tree.

A node x is called dominant if its value is equal to the maximum value among all nodes in the subtree rooted at x.

Return the number of dominant nodes in the tree.

 

Example 1:



Input: root = [5,3,8,2,4,7,1]

Output: 5

Explanation:

The leaf nodes with values 2, 4, 7, and 1 are dominant.
The node with value 8 is dominant because its value is the maximum value in its subtree [8, 7, 1].
Thus, the answer is 5.
Example 2:



Input: root = [1,2,3,1,2]

Output: 4

Explanation:

The leaf nodes with values 1, 2, and 3 are dominant.
The node with value 2 whose subtree is [2, 1, 2] is dominant because its value is the maximum value in its subtree.
Thus, the answer is 4.
 

Constraints:

The number of nodes in the tree is in the range [1, 105].
1 <= Node.val <= 109
The tree is guaranteed to be a complete binary tree.
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
32,462/45K
Acceptance Rate
72.1%
Topics
icon
Companies
Hint 1
Process the tree using postorder traversal, so both child subtrees are handled before their parent.

Hint 2
For each node, compute the maximum value in its subtree from its own value and the maximum values returned by its children.

Hint 3
A node is dominant if its value is equal to this subtree maximum.
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
    int count = 0;
    public int countDominantNodes(TreeNode root) {
        postorder(root);
        return count;
    }
    public int postorder(TreeNode root) {
        if (root == null)
            return Integer.MIN_VALUE;

        int left = postorder(root.left);
        int right = postorder(root.right);

        int subtreeMax = Math.max(root.val, Math.max(left, right));

        if (root.val == subtreeMax)
            count++;

        return subtreeMax;
    }

    public static void main(String[] args) {
        LeetCode solution = new LeetCode();
    }
}