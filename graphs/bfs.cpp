#include <bits/stdc++.h>
using namespace std;
using ll = long long;

void bfs(int source , vector<vector<int>>& adj,vector<bool>& visited){
    vector<int> distance(adj.size(),0);
    queue<int> q;
    visited[source] = true;
    q.push(source);
    while(!q.empty()){
        int node = q.front();
        q.pop();
        for(auto &neighbor: adj[node]){
            if(!visited[neighbor]){
                visited[neighbor] = true;
                distance[neighbor] = distance[node] + 1;
                q.push(neighbor);
            }
        }
    }
}

int main(){
    return 0;
}