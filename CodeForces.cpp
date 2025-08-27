/*
You have an array a1,a2,…,an
. Answer q
 queries of the following form:

If we change all elements in the range al,al+1,…,ar
 of the array to k
, will the sum of the entire array be odd?
Note that queries are independent and do not affect future queries.
Input
Each test contains multiple test cases. The first line contains the number of test cases t
 (1≤t≤104
). The description of the test cases follows.

The first line of each test case consists of 2
 integers n
 and q
 (1≤n≤2⋅105
; 1≤q≤2⋅105
) — the length of the array and the number of queries.

The second line of each test case consists of n
 integers ai
 (1≤ai≤109
) — the array a
.

The next q
 lines of each test case consists of 3
 integers l,r,k
 (1≤l≤r≤n
; 1≤k≤109
) — the queries.

It is guaranteed that the sum of n
 over all test cases doesn't exceed 2⋅105
, and the sum of q
 doesn't exceed 2⋅105
.

Output
For each query, output "YES" if the sum of the entire array becomes odd, and "NO" otherwise.

You can output the answer in any case (upper or lower). For example, the strings "yEs", "yes", "Yes", and "YES" will be recognized as positive responses.

Example
InputCopy
2
5 5
2 2 1 3 2
2 3 3
2 3 4
1 5 5
1 4 9
2 4 3
10 5
1 1 1 1 1 1 1 1 1 1
3 8 13
2 5 10
3 8 10
1 10 2
1 9 100
OutputCopy
YES
YES
YES
NO
YES
NO
NO
NO
NO
YES
Note
For the first test case:

If the elements in the range (2,3)
 would get set to 3
 the array would become {2,3,3,3,2}
, the sum would be 2+3+3+3+2=13
 which is odd, so the answer is "YES".
If the elements in the range (2,3)
 would get set to 4
 the array would become {2,4,4,3,2}
, the sum would be 2+4+4+3+2=15
 which is odd, so the answer is "YES".
If the elements in the range (1,5)
 would get set to 5
 the array would become {5,5,5,5,5}
, the sum would be 5+5+5+5+5=25
 which is odd, so the answer is "YES".
If the elements in the range (1,4)
 would get set to 9
 the array would become {9,9,9,9,2}
, the sum would be 9+9+9+9+2=38
 which is even, so the answer is "NO".
If the elements in the range (2,4)
 would get set to 3
 the array would become {2,3,3,3,2}
, the sum would be 2+3+3+3+2=13
 which is odd, so the answer is "YES".
 Note that for each question, the resulting array is
[a1,a2,…,al−1,k,…,k,ar+1,ar+2,…,an].

So, the sum of the elements of the new array after each question is
a1+⋯+al−1+(r−l+1)⋅k+ar+1+⋯+an.

We can compute a1+⋯+al−1
 and ar+1+⋯+an
 in O(1)
 time by precomputing the sum of all prefixes and suffixes, or alternatively by using the prefix sums technique. So we can find the sum each time in O(1)
 per question, and just check if it's odd or not. The time complexity is O(n+q)
.
*/ 
#include <bits/stdc++.h>
using namespace std;

void solve() {
    int n, q;
    cin >> n >> q;

    vector<long long> arr(n+1);
    vector<long long> prefix(n+1, 0);

    for (int i = 1; i <= n; i++) {
        cin >> arr[i];
        prefix[i] = prefix[i-1] + arr[i];
    }

    long long totalSum = prefix[n];

    while (q--) {
        int l, r, k;
        cin >> l >> r >> k;

        long long oldRangeSum = prefix[r] - prefix[l-1];

        long long newSum = totalSum - oldRangeSum + 1LL * (r-l+1) * k;

        if (newSum % 2 == 1) cout << "YES\n";
        else cout << "NO\n";
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