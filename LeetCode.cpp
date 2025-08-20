/*
You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string.

 

Example 1:

Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
Example 2:

Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".
Example 3:

Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number.
 

Constraints:

1 <= num.length <= 105
num only consists of digits and does not contain any leading zeros.
Hint 1
In what order should you iterate through the digits?
Hint 2
If an odd number exists, where must the number start from?
*/
#include <bits/stdc++.h>
using namespace std;

class LeetCode {
public:
    string largestOddNumber(string num) {
        int n = num.size();
        string revNum = num;
        reverse(revNum.begin(), revNum.end());
        string ans = "";
        for (int i = 0; i < n; i++) {
            if ( (revNum[i] - '0') % 2 == 1 ) {
                string curr = "";
                for (int j = i; j < n; j++) {
                    curr += revNum[j];
                }
                ans = curr;
                break;
            }
        }
        reverse(ans.begin(), ans.end());
        return ans;
    }
};

int main() {
    LeetCode solution;

    return 0;
}
