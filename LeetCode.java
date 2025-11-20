/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

 

Example 1:


Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
Example 2:


Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
 

Constraints:

1 <= n <= 200
n == isConnected.length
n == isConnected[i].length
isConnected[i][j] is 1 or 0.
isConnected[i][i] == 1
isConnected[i][j] == isConnected[j][i]
*/

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Queue;
import java.util.LinkedList;

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
    public int findCircleNum(int[][] isConnected) {
        int n = isConnected.length;
        HashSet<Integer> visited = new HashSet<>();
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (!visited.contains(i)) {
                count++;
                dfs(isConnected, visited, i);
            }
        }
        return count;
    }
    public void dfs(int[][] isConnected, HashSet<Integer> visited, int city) {
        visited.add(city);
        for (int j = 0; j < isConnected.length; j++) {
            if (isConnected[city][j] == 1 && !visited.contains(j)) {
                dfs(isConnected, visited, j);
            }
        }
    }
        
    public static void main(String[] args) {
        LeetCode solution = new LeetCode();
    }
}
