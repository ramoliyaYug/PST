/*
Chef has a binary string 
S
S of length 
N
N. Chef can perform the following operation on 
S
S:

Insert any character (
0
0 or 
1
1) at any position in 
S
S.
Find the minimum number of operations Chef needs to perform so that no two consecutive characters are same in 
S
S.

Input Format
The first line contains a single integer 
T
T — the number of test cases. Then the test cases follow.
The first line of each test case contains an integer 
N
N — the length of the binary string 
S
S.
The second line of each test case contains a binary string 
S
S of length 
N
N containing 
0
0s and 
1
1s only.
Output Format
For each test case, output on a new line the minimum number of operations Chef needs to perform so that no two consecutive characters are same in 
S
S.

Constraints
1
≤
T
≤
100
1≤T≤100
1
≤
N
≤
1000
1≤N≤1000
Sample 1:
Input
Output
3
2
11
4
0101
5
00100
1
0
2
Explanation:
Test case 1: We can perform the following operations: 
11
→
1
0
‾
1
11→1 
0
​
 1.

Test case 2: We do not need to perform any operations.

Test case 3: We can perform the following operations: 
00100
→
0
1
‾
0100
→
01010
1
‾
0
00100→0 
1
​
 0100→01010 
1
​
 0.
*/
#include <bits/stdc++.h>
using namespace std;

void solve() {
    int n;
    cin >> n;
    string s;
    cin >> s;
    int ans = 0;
    for(int i = 0; i < n - 1; i++) {
        if(s[i] == s[i + 1]) {
            ans++;
        }
    }
    cout << ans << endl;
}

int main() {
    int t=1;
    cin >> t;
    while (t--) {
        solve();
    }
    return 0;
}