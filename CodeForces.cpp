/*
for _ in range(int(input())):
	x, k = map(int, input().split())
	if x % k != 0:
		print(1)
		print(x)
	else:
		print(2)
		print(1, x - 1)
*/
#include <bits/stdc++.h>
using namespace std;

void solve() {
    int x, k;
    cin >> x >> k;
    if (x % k != 0) {
        cout << 1 << endl;
        cout << x << endl;
    } else {
        cout << 2 << endl;
        cout << 1 << " " << x - 1 << endl;
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