/*
YunQian is standing on an infinite plane with the Cartesian coordinate system on it. In one move, she can move to the diagonally adjacent point on the top right or the adjacent point on the left.

That is, if she is standing on point (x,y)
, she can either move to point (x+1,y+1)
 or point (x−1,y)
.

YunQian initially stands at point (a,b)
 and wants to move to point (c,d)
. Find the minimum number of moves she needs to make or declare that it is impossible.

Input
The first line contains a single integer t
 (1≤t≤104
) — the number of test cases. The description of test cases follows.

The first line and only line of each test case contain four integers a
, b
, c
, d
 (−108≤a,b,c,d≤108
).

Output
For each test case, if it is possible to move from point (a,b)
 to point (c,d)
, output the minimum number of moves. Otherwise, output −1
.

Example
InputCopy
6
-1 0 -1 2
0 0 4 5
-2 -1 1 1
-3 2 -3 2
2 -1 -1 -1
1 1 0 2
OutputCopy
4
6
-1
0
3
3
Note
In the first test case, one possible way using 4
 moves is (−1,0)→(0,1)→(−1,1)→(0,2)→(−1,2)
. It can be proven that it is impossible to move from point (−1,0)
 to point (−1,2)
 in less than 4
 moves.



*/
#include <bits/stdc++.h>
using namespace std;

void solve() {
    int a,b,c,d;
    cin >> a >> b >> c >> d;
    if(b<=d && c <= a+d-b){
        cout << (d-b)+(a+d-b-c) << endl;
    }else{
        cout << -1 << endl;
    }
}

int main() {
    int t=1;
    cin >> t;
    while (t--) {
        solve();
    }
    return 0;
}