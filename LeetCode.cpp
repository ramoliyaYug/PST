/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "foo", t = "bar"

Output: false

Explanation:

The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:

Input: s = "paper", t = "title"

Output: true

 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/
#include <bits/stdc++.h>
using namespace std;

class LeetCode {
public:
    bool isIsomorphic(string s, string t) {
        int sLen = s.size();
        int tLen = t.size();
        if(sLen != tLen) return false;
        map<char, char> mapST;
        map<char, char> mapTS;
        for(int i = 0; i < sLen; i++){
            char sChar = s[i];
            char tChar = t[i];
            if(mapST.find(sChar) != mapST.end() && mapST[sChar] != tChar) return false;
            if(mapTS.find(tChar) != mapTS.end() && mapTS[tChar] != sChar) return false;
            mapST[sChar] = tChar;
            mapTS[tChar] = sChar;
        }
        return true;
    }
};

int main() {
    LeetCode solution;

    return 0;
}
