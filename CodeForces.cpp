/*
Divisible and not divisible
In order to beat the evil monster, you need to answer 
T
T of its queries. In each query, the monster gives you 3 positive integers 
X
X, 
Y
Y and 
Z
Z. For each of the monsters query you need to find the smallest positive integer 
K
K such that:

K
K is strictly greater than 
X
X
K
K is divisible by 
Y
Y
K
K is not divisible by 
Z
Z
Or determine that there is no such 
K
K

Input Format
The first line contains 
T
T - number of queries. Then the queries follow.
The first and only line of each query contains three space-separated positive integers 
X
X, 
Y
Y and 
Z
Z
Output Format
For each query output the smallest positive integer 
K
K, described as in the statement.

If no such 
K
K exists, output -1.

Constraints
1
≤
T
≤
500
1≤T≤500
1
≤
X
,
Y
,
Z
≤
10
18
1≤X,Y,Z≤10 
18
 
Subtasks
20 points : 
1
≤
X
,
Y
,
Z
≤
1000
1≤X,Y,Z≤1000
60 points : 
1
≤
X
,
Y
,
Z
≤
10
9
1≤X,Y,Z≤10 
9
 
20 points : original constraints
Sample 1:
Input
Output
3
5 2 3
4 2 3
10 7 1
8
8
-1
Explanation:
In the first query:

6
6 is divisible by 
2
2, but it is also divisible by 
3
3 - so it's not an answer
7
7 is not divisible by 
2
2 - so it’s not an answer
8
8 is divisible by 
2
2 and it is not divisible by 
3
3 - so it is the answer
In the second query: The trick here is to see that 
4
4 is divisible by 
2
2 and not divisible by 
3
3. However, 
4
4 is not strictly greater than 
X
=
4
X=4 - so it’s not an answer. The answer is the same as in the first query - 
8
8.

In the third query: Every positive integer number is divisible by 
1
1, so the answer surely doesn’t exist - therefore we output 
−
1
−1.
*/ 
#include <bits/stdc++.h>
using namespace std;

bool validNum(int num, int x, int y, int z) {
    return num > x && num % y == 0 && num % z != 0;
}
void solve() {
    int x,y,z;
    cin >> x >> y >> z;
    int num = x + 1;
    while (true) {
        if (validNum(num, x, y, z)) {
            cout << num << endl;
            return;
        }
        num++;
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