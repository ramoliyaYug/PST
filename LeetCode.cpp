/*
You are given an array arr[] of non-negative numbers. Each number tells you the maximum number of steps you can jump forward from that position.

For example:

If arr[i] = 3, you can jump to index i + 1, i + 2, or i + 3 from position i.
If arr[i] = 0, you cannot jump forward from that position.
Your task is to find the minimum number of jumps needed to move from the first position in the array to the last position.

Note:  Return -1 if you can't reach the end of the array.

Examples : 

Input: arr[] = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
Output: 3 
Explanation: First jump from 1st element to 2nd element with value 3. From here we jump to 5th element with value 9, and from here we will jump to the last. 
Input: arr = [1, 4, 3, 2, 6, 7]
Output: 2 
Explanation: First we jump from the 1st to 2nd element and then jump to the last element.
Input: arr = [0, 10, 20]
Output: -1
Explanation: We cannot go anywhere from the 1st element.
Constraints:
2 ≤ arr.size() ≤ 105
0 ≤ arr[i] ≤ 105


*/
#include <bits/stdc++.h>
using namespace std;

class LeetCode {
public:
    int minJumps(vector<int>& arr) {
        // code here
        int n = arr.size();
        vector<int> dp(n, INT_MAX);
        dp[0] = 0;
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (arr[j] + j >= i) {
                    dp[i] = min(dp[i], dp[j] + 1);
                }
            }
        }
        return dp[n - 1] == INT_MAX ? -1 : dp[n - 1];
    }
};

int main() {
    LeetCode solution;

    return 0;
}
