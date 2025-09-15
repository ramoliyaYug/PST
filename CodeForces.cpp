/*
A number is called almost prime if it has exactly two distinct prime divisors. For example, numbers 6, 18, 24 are almost prime, while 4, 8, 9, 42 are not. Find the amount of almost prime numbers which are between 1 and n, inclusive.

Input
Input contains one integer number n (1 ≤ n ≤ 3000).

Output
Output the amount of almost prime numbers between 1 and n, inclusive.

Examples
InputCopy
10
OutputCopy
2
InputCopy
21
OutputCopy
8
This is a straightforward implementation problem: factor every number from 1 to n into product of primes and count the number of distinct prime divisors.
*/ 
#include <bits/stdc++.h>
using namespace std;

unordered_set<int> prime_factors(int n) {
    unordered_set<int> factors;
    for (int i = 2; i * i <= n; i++) {
        while (n % i == 0) {
            factors.insert(i);
            n /= i;
        }
    }
    if (n > 1) {
        factors.insert(n);
    }
    return factors;
}
void solve() {
    int n;
    cin >> n;
    int ans = 0;
    for (int i = 1; i <= n; i++) {
        if (prime_factors(i).size() == 2) {
            ans++;
        }
    }
    cout << ans << endl;
}

int main() {
    int t=1;
    // cin >> t;
    while (t--) {
        solve();
    }
    return 0;
}