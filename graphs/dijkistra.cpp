//dijkistra algorithm to find the shortest path in a weighted graph
#include <bits/stdc++.h>
using namespace std;

int dijkstra(int V, vector<vector<pair<int, int>>>& adj, int S, int D) {
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    vector<int> dist(V, INT_MAX);
    pq.push({0, S});
    dist[S] = 0;

    while (!pq.empty()) {
        auto [currentDist, u] = pq.top();
        pq.pop();

        if (currentDist > dist[u]) continue;

        for (auto& [v, weight] : adj[u]) {
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }

    return dist[D] == INT_MAX ? -1 : dist[D];
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    return 0;
}