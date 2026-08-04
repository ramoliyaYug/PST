/*
Minimum Distance Between Two Nodes
Given an undirected and unweighted graph and two nodes x and y, find the length of the shortest path between the two nodes. If no path exists, return -1.

Input Format
The first line consists of two space separated integers, N and M, representing the number of nodes and edges.
Nodes are numbered from 1 to N.
The subsequent M lines describe the connections, each containing two integers, u and v, describing the edges.
Each edge links two distinct nodes, and at most one edge exists between any two nodes.
The last line consists of two space separated integers, x and y, the given two nodes.
Output Format
If there is a path between x and y, print the shortest distance (i.e., the minimum no. of edges) between them.
If no path exist, return -1.
Constraints
1
≤
N
≤
200000
1≤N≤200000
1
≤
M
≤
N
(
N
−
1
)
/
2
1≤M≤N(N−1)/2
1
≤
u
i
,
v
i
,
x
,
y
≤
N
1≤u 
i
​
 ,v 
i
​
 ,x,y≤N
u
i
≠
v
i
u 
i
​
 =v 
i
​
  for each 
1
≤
i
≤
M
1≤i≤M.
Sample 1:
Input
Output
5 6
1 2
2 3
1 3
3 5
2 4
4 5
2 5
2
*/
import java.lang.*;
import java.util.*;
import java.io.*;
import java.math.*;

public class CodeForces {

    static void solve(Scanner sc) {
        int n = sc.nextInt();
        int m = sc.nextInt();
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i <= n; i++) {
            graph.add(new ArrayList<>());
        }
        for (int i = 0; i < m; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();
            graph.get(u).add(v);
            graph.get(v).add(u);
        }
        int x = sc.nextInt();
        int y = sc.nextInt();

        Queue<Integer> queue = 
        new LinkedList<>();
        boolean[] visited = new boolean[n + 1];
        int[] distance = new int[n + 1];
        
        queue.offer(x);
        visited[x] = true;
        distance[x] = 0;

        while (!queue.isEmpty()) {
            int current = queue.poll();
            for (int neighbor : graph.get(current)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    distance[neighbor] = distance[current] + 1;
                    queue.offer(neighbor);
                }
            }
        }

        if (visited[y]) {
            System.out.println(distance[y]);
        } else {
            System.out.println(-1);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int t = 1;
        // if (sc.hasNextInt()) {t = sc.nextInt();}
        while (t-- > 0) {
            solve(sc);
        }
    }
}