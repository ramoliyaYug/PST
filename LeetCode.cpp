/*
A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

 

Example 1:

Input: s = "YazaAay"
Output: "aAa"
Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
"aAa" is the longest nice substring.
Example 2:

Input: s = "Bb"
Output: "Bb"
Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.
Example 3:

Input: s = "c"
Output: ""
Explanation: There are no nice substrings.
 

Constraints:

1 <= s.length <= 100
s consists of uppercase and lowercase English letters.
 
Hint 1
Brute force and check each substring to see if it is nice.
*/
#include <bits/stdc++.h>
using namespace std;

class LeetCode {
public:
    bool isNice(string s){
        unordered_map<char,int> lowerMap;
        unordered_map<char,int> upperMap;
        for(int i=0; i<s.size(); i++){
            if(islower(s[i])){
                lowerMap[s[i]]++;
            }else{
                upperMap[s[i]]++;
            }
        }
        for(int i=0; i<s.size();i++){
            char ch = s[i];
            char lower = tolower(ch);
            char upper = toupper(ch);
            if(lowerMap[lower] == 0 || upperMap[upper] == 0){
                return false;
            }
        }
        return true;
    }
    string longestNiceSubstring(string s) {
        int n = s.size();
        vector<string> substrings;
        for(int i=0; i<n; i++){
            for(int j=i+1; j<=n; j++){
                string substr = s.substr(i,j-i);
                if(isNice(substr)){
                    substrings.push_back(substr);
                }
            }
        }
        int maxLen = 0;
        string ans = "";
        for(int i=0; i<substrings.size(); i++){
            if(substrings[i].size() > maxLen){
                maxLen = substrings[i].size();
                ans = substrings[i];
            }
        }
        return ans;
    }
};

int main() {
    LeetCode solution;

    return 0;
}
