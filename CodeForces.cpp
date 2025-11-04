/*
Vasya has found a strange device. On the front panel of a device there are: a red button, a blue button and a display showing some positive integer. After clicking the red button, device multiplies the displayed number by two. After clicking the blue button, device subtracts one from the number on the display. If at some point the number stops being positive, the device breaks down. The display can show arbitrarily large numbers. Initially, the display shows number n.

Bob wants to get number m on the display. What minimum number of clicks he has to make in order to achieve this result?

Input
The first and the only line of the input contains two distinct integers n and m (1 ≤ n, m ≤ 104), separated by a space .

Output
Print a single number — the minimum number of times one needs to push the button required to get the number m out of number n.

Examples
InputCopy
4 6
OutputCopy
2
InputCopy
10 1
OutputCopy
9
Note
In the first example you need to push the blue button once, and then push the red button once.

In the second example, doubling the number is unnecessary, so we need to push the blue button nine times.

There is, however, an even faster solution. The problem can be reversed as follows: we should get the number n starting from m using the operations "add 1 to the number" and "divide the number by 2 if it is even".
*/
#include <bits/stdc++.h>
using namespace std;
void solve() {
    int n,m;
    cin >> n >> m;
    int ans = 0;
    while (m > n) {
        if (m % 2 == 0) {
            m /= 2;
        } else {
            m += 1;
        }
        ans++;
    }
    cout << ans + (n - m) << endl;
}

int main() {
    int t=1;
    // cin >> t;
    while (t--) {
        solve();
    }
    return 0;
}