/*
In Berland, there are two types of coins, having denominations of 2
 and k
 burles.

Your task is to determine whether it is possible to represent n
 burles in coins, i. e. whether there exist non-negative integers x
 and y
 such that 2⋅x+k⋅y=n
.

Input
The first line contains a single integer t
 (1≤t≤104
) — the number of test cases.

The only line of each test case contains two integers n
 and k
 (1≤k≤n≤1018
; k≠2
).

Output
For each test case, print YES if it is possible to represent n
 burles in coins; otherwise, print NO. You may print each letter in any case (YES, yes, Yes will all be recognized as positive answer, NO, no and nO will all be recognized as negative answer).

Example
InputCopy
4
5 3
6 1
7 4
8 8
OutputCopy
YES
YES
NO
YES
Note
In the first test case, you can take one coin with denomination 2
 and one coin with denomination k=3
.

In the second test case, you can take three coins with denomination 2
. Alternatively, you can take six coins with denomination k=1
.

In the third test case, there is no way to represent 7
 burles.

In the fourth test case, you can take one coin with denomination k=8
.


Note that 2
 coins with denomination k
 can be replaced with k
 coins with denomination 2
. So, if the answer exists, then there is also such a set of coins, where there is no more than one coin with denomination k
. Therefore, it is enough to iterate through the number of coins with denomination k
 (from 0
 to 1
) and check that the remaining number is non-negative and even (i. e. it can be represented as some number of coins with denomination 2
).
for _ in range(int(input())):
	n, k = map(int, input().split())
	for x in range(2):
		if n - x * k >= 0 and (n - x * k) % 2 == 0:
			print("YES")
			break
	else:
		print("NO")
*/
#include <bits/stdc++.h>
using namespace std;

void solve() {
    long long n, k;
    cin >> n >> k;
    for (int x = 0; x <= 1; x++) {
        if (n - x * k >= 0 && (n - x * k) % 2 == 0) {
            cout << "YES" << endl;
            return;
        }
    }
    cout << "NO" << endl;
}

int main() {
    int t=1;
    cin >> t;
    while (t--) {
        solve();
    }
    return 0;
}