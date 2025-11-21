/*
Kuriyama Mirai has killed many monsters and got many (namely n) stones. She numbers the stones from 1 to n. The cost of the i-th stone is vi. Kuriyama Mirai wants to know something about these stones so she will ask you two kinds of questions:

She will tell you two numbers, l and r (1 ≤ l ≤ r ≤ n), and you should tell her .
Let ui be the cost of the i-th cheapest stone (the cost that will be on the i-th place if we arrange all the stone costs in non-decreasing order). This time she will tell you two numbers, l and r (1 ≤ l ≤ r ≤ n), and you should tell her .
For every question you should give the correct answer, or Kuriyama Mirai will say "fuyukai desu" and then become unhappy.

Input
The first line contains an integer n (1 ≤ n ≤ 105). The second line contains n integers: v1, v2, ..., vn (1 ≤ vi ≤ 109) — costs of the stones.

The third line contains an integer m (1 ≤ m ≤ 105) — the number of Kuriyama Mirai's questions. Then follow m lines, each line contains three integers type, l and r (1 ≤ l ≤ r ≤ n; 1 ≤ type ≤ 2), describing a question. If type equal to 1, then you should output the answer for the first question, else you should output the answer for the second one.

Output
Print m lines. Each line must contain an integer — the answer to Kuriyama Mirai's question. Print the answers to the questions in the order of input.

Examples
InputCopy
6
6 4 2 7 2 7
3
2 3 6
1 3 4
1 1 6
OutputCopy
24
9
28
InputCopy
4
5 5 2 3
10
1 2 4
2 1 4
1 1 1
2 1 4
2 1 2
1 1 1
1 3 3
1 1 3
1 4 4
1 2 2
OutputCopy
10
15
5
15
5
5
2
12
3
5
Note
Please note that the answers to the questions may overflow 32-bit integer type.
*/
#include <bits/stdc++.h>
using namespace std;
void solve() {
    int n;
    cin >> n;
    vector<long long> arr(n);
    for(int i = 0;i<n;i++){
        cin >> arr[i];
    }
    vector<long long> sortedArr = arr;
    sort(sortedArr.begin(), sortedArr.end());
    vector<long long> prefixSum(n+1, 0);
    vector<long long> sortedPrefixSum(n+1, 0);
    for(int i = 1;i<=n;i++){
        prefixSum[i] = prefixSum[i-1] + arr[i-1];
        sortedPrefixSum[i] = sortedPrefixSum[i-1] + sortedArr[i-1];
    }
    int m;
    cin >> m;
    for(int i = 0;i<m;i++){
        int type, l, r;
        cin >> type >> l >> r;
        if(type == 1){
            cout << prefixSum[r] - prefixSum[l-1] << endl;
        }else{
            cout << sortedPrefixSum[r] - sortedPrefixSum[l-1] << endl;
        }
    }
}

int main() {
    int t=1;
    // cin >> t;
    while (t--) {
        solve();
    }
    return 0;
}