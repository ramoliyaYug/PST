/*
Given an encoded string s, decode it by expanding the pattern k[substring], where the substring inside brackets is written k times. k is guaranteed to be a positive integer, and encodedString contains only lowercase english alphabets. Return the final decoded string.

Note: The test cases are generated so that the length of the output string will never exceed 105 .

Examples:

Input: s = "3[b2[ca]]"
Output: "bcacabcacabcaca"
Explanation:
Inner substring “2[ca]” breakdown into “caca”.
Now, new string becomes “3[bcaca]”
Similarly “3[bcaca]” becomes “bcacabcacabcaca” which is final result.
Input: s = "3[ab]"
Output: "ababab"
Explanation: The substring "ab" is repeated 3 times giving "ababab".
Constraints:
1 ≤ |s| ≤ 105 
1 ≤ k ≤ 100
*/
#include <bits/stdc++.h>
using namespace std;

class LeetCode {
public:
    string decodedString(string &s) {
        // code here
        stack<char> st;
        for (int i = 0; i < (int)s.size(); i++) {
            if (s[i] != ']') {
                st.push(s[i]);
            } else {
                string temp;
                while (!st.empty() && st.top() != '[') {
                    temp.push_back(st.top());
                    st.pop();
                }
                reverse(temp.begin(), temp.end());
                st.pop();
                string num;
                while (!st.empty() && isdigit(st.top())) {
                    num.push_back(st.top());
                    st.pop();
                }
                reverse(num.begin(), num.end());
                int number = stoi(num);
                string repeat;
                for (int k = 0; k < number; k++) repeat += temp;
                for (char c : repeat) st.push(c);
            }
        }
        string ans;
        while (!st.empty()) {
            ans.push_back(st.top());
            st.pop();
        }
        reverse(ans.begin(), ans.end());
        return ans;
    }
};

int main() {
    LeetCode solution;

    return 0;
}
