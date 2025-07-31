/*
You are given an n x n grid where we place some 1 x 1 x 1 cubes that are axis-aligned with the x, y, and z axes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of the cell (i, j).

We view the projection of these cubes onto the xy, yz, and zx planes.

A projection is like a shadow, that maps our 3-dimensional figure to a 2-dimensional plane. We are viewing the "shadow" when looking at the cubes from the top, the front, and the side.

Return the total area of all three projections.

 

Example 1:


Input: grid = [[1,2],[3,4]]
Output: 17
Explanation: Here are the three projections ("shadows") of the shape made with each axis-aligned plane.
Example 2:

Input: grid = [[2]]
Output: 5
Example 3:

Input: grid = [[1,0],[0,2]]
Output: 8
 

Constraints:

n == grid.length == grid[i].length
1 <= n <= 50
0 <= grid[i][j] <= 50
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
    public int projectionArea(int[][] grid) {
        int n = grid.length;
        int sum = 0;
        for (int i = 0; i < n; i++) {
            int max = 0;
            for (int j = 0; j < n; j++) {
                if (grid[i][j] > 0) {
                    sum++;
                }
                max = Math.max(max, grid[i][j]);
            }
            sum += max;
        }
        for (int j = 0; j < n; j++) {
            int max = 0;
            for (int i = 0; i < n; i++) {
                max = Math.max(max, grid[i][j]);
            }
            sum += max;
        }
        return sum;
    }


    public static void main(String[] args) {
        LeetCode solution = new LeetCode();
    }
}
