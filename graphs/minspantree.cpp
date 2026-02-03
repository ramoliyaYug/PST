/*
Given a weighted, undirected, and connected graph with V vertices and E edges, your task is to find the sum of the weights of the edges in the Minimum Spanning Tree (MST) of the graph. The graph is provided as a list of edges, where each edge is represented as [u, v, w], indicating an edge between vertex u and vertex v with edge weight w.

Input: V = 3, E = 3, Edges = [[0, 1, 5], [1, 2, 3], [0, 2, 1]]
 
Output: 4
Explanation:

The Spanning Tree resulting in a weight
of 4 is shown above.
Input: V = 2, E = 1, Edges = [[0 1 5]]

 

Output: 5 
Explanation: Only one Spanning Tree is possible which has a weight of 5.
Constraints:
2 ≤ V ≤ 1000
V-1 ≤ E ≤ (V*(V-1))/2
1 ≤ w ≤ 1000
The graph is connected and doesn't contain self-loops & multiple edges.

steps:
We use a priority queue (min-heap) to always select the edge with the smallest weight.
Push the first vertex and its weight into the queue.
While the queue is not empty, extract the minimum-weight edge.
If the vertex is unvisited, add its weight to a variable (res) and mark it as visited.
Push all unvisited adjacent vertices of this vertex into the queue.
After all vertices are processed, return the total weight stored in res.
*/
#include <bits/stdc++.h>
using namespace std;

class LeetCode {
    public:
    int spanningTree(int V, vector<vector<int>>& edges) {
        // code here
        int ans = 0;
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        vector<vector<pair<int, int>>> adj(V);
        vector<bool> visited(V, false);
        for (auto& edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int w = edge[2];
            adj[u].push_back({v, w});
            adj[v].push_back({u, w});
        }
        pq.push({0, 0}); 
        while(!pq.empty()){
            auto [weight, vertex] = pq.top();
            pq.pop();
            if(visited[vertex]) continue;
            visited[vertex] = true;
            ans += weight;
            for(auto& [neighbor, w] : adj[vertex]){
                if(!visited[neighbor]){
                    pq.push({w, neighbor});
                }
            }
        }
        return ans;
    }
};

int main() {
    LeetCode solution;
    return 0;
}