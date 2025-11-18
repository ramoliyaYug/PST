/*
Being a programmer, you like arrays a lot. For your birthday, your friends have given you an array a consisting of n distinct integers.

Unfortunately, the size of a is too small. You want a bigger array! Your friends agree to give you a bigger array, but only if you are able to answer the following question correctly: is it possible to sort the array a (in increasing order) by reversing exactly one segment of a? See definitions of segment and reversing in the notes.

Input
The first line of the input contains an integer n (1 ≤ n ≤ 105) — the size of array a.

The second line contains n distinct space-separated integers: a[1], a[2], ..., a[n] (1 ≤ a[i] ≤ 109).

Output
Print "yes" or "no" (without quotes), depending on the answer.

If your answer is "yes", then also print two space-separated integers denoting start and end (start must not be greater than end) indices of the segment to be reversed. If there are multiple ways of selecting these indices, print any of them.

Examples
InputCopy
3
3 2 1
OutputCopy
yes
1 3
InputCopy
4
2 1 3 4
OutputCopy
yes
1 2
InputCopy
4
3 1 2 4
OutputCopy
no
InputCopy
2
1 2
OutputCopy
yes
1 1
Note
Sample 1. You can reverse the entire array to get [1, 2, 3], which is sorted.

Sample 3. No segment can be reversed such that the array will be sorted.

Definitions

A segment [l, r] of array a is the sequence a[l], a[l + 1], ..., a[r].

If you have an array a of size n and you reverse its segment [l, r], the array will become:

a[1], a[2], ..., a[l - 2], a[l - 1], a[r], a[r - 1], ..., a[l + 1], a[l], a[r + 1], a[r + 2], ..., a[n - 1], a[n].
Note that if from a given sorted array, if reverse a segment, then the remaining array will be arranged in following way. First increasing sequence, then decreasing, then again increasing.

You can find the first position where the sequences start decreasing from the beginning. Call it L.
You can find the first position where the sequences start increasing from the end. Call it R.

Now we just need to reverse the segment between a[L] to a[R].

Here is outline of my solution which is easy to implement. First I map larger numbers to numbers strictly in the range 1, n.
As all the numbers are distinct, no two numbers in the mapping will be equal too.

Let us define L to be smallest index such that A[i]! = i.
Let us also define R to be largest index such that A[i]! = i.

Note that if there is no such L and R, it means that array is sorted already. So answer will be "yes", we can simply reverse any of the 1 length consecutive segment.

Otherwise we will simply reverse the array from [L, R]. After the reversal, we will check whether the array is sorted or not.

Complexity: O(nlogn)
*/
#include <bits/stdc++.h>
using namespace std;
void solve() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; ++i) {
        cin >> arr[i];
    }
    vector<int> sortedArr = arr;
    sort(sortedArr.begin(), sortedArr.end());
    int L = 0, R = n - 1;
    while (L < n && arr[L] == sortedArr[L]) {
        L++;
    }
    while (R >= 0 && arr[R] == sortedArr[R]) {
        R--;
    }
    if (L > R) {
        cout << "yes" << endl;
        cout << "1 1" << endl;
        return;
    }
    reverse(arr.begin() + L, arr.begin() + R + 1);
    if (arr == sortedArr) {
        cout << "yes" << endl;
        cout << L + 1 << " " << R + 1 << endl;
    } else {
        cout << "no" << endl;
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