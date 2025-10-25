/*
You are given a string s consisting of lowercase English letters ('a' to 'z').

Your task is to:

Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
Find the consonant (all other letters excluding vowels) with the maximum frequency.
Return the sum of the two frequencies.

Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

The frequency of a letter x is the number of times it occurs in the string.
 

Example 1:

Input: s = "successes"

Output: 6

Explanation:

The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
The output is 2 + 4 = 6.
Example 2:

Input: s = "aeiaeia"

Output: 3

Explanation:

The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2). The maximum frequency is 3.
There are no consonants in s. Hence, maximum consonant frequency = 0.
The output is 3 + 0 = 3.
 

Constraints:

1 <= s.length <= 100
s consists of lowercase English letters only.
*/
#include <bits/stdc++.h>
using namespace std;

class LeetCode {
    public:
    int maxFreqSum(string s) {
        int n = s.length();
        unordered_map<char, int> vowelCount;
        unordered_map<char, int> consonantCount;
        unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u'};
        for(int i = 0; i < n; i++) {
            char ch = s[i];
            if(vowels.find(ch) != vowels.end()) {
                vowelCount[ch]++;
            } else {
                consonantCount[ch]++;
            }
        }
        int maxVowelFreq = 0, maxConsonantFreq = 0;
        for(auto it : vowelCount) {
            maxVowelFreq = max(maxVowelFreq, it.second);
        }
        for(auto it : consonantCount) {
            maxConsonantFreq = max(maxConsonantFreq, it.second);
        }
        return maxVowelFreq + maxConsonantFreq;
    }
};

int main() {
    LeetCode solution;
    return 0;
}