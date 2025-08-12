/*
every number in the array are appear twice except one find that
*/
#include <bits/stdc++.h>
using namespace std;

class LeetCode {
public:
    int maxProduct(int n) {
        vector<int> digits = digitVector(n);
        int res = 0;
        for(int i = 0; i < digits.size(); i++){
            for(int j = i+1; j < digits.size(); j++){
                res = max(res, digits[i]*digits[j]);
            }
        }
        return res;
    }
    vector<int> digitVector(int num){
        vector<int> res;

        while(num>0){
            res.push_back(num%10);
            num/=10;
        }
        return res;
    }
};

int main() {
    LeetCode solution;
}
