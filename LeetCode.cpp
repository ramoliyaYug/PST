/*

*/
#include <bits/stdc++.h>
using namespace std;

class LeetCode {
    public:
    void backtrack(vector<int>& nums, vector<int>& temp, vector<vector<int>>& res, vector<bool>& used){
        if(temp.size() == nums.size()){
            res.push_back(temp);
            return;
        }else{
            for(int i = 0; i < nums.size(); i++){
                if(!used[i]){
                    if(i > 0 && nums[i] == nums[i-1] && !used[i-1]) continue;
                    used[i] = true;
                    temp.push_back(nums[i]);
                    backtrack(nums, temp, res, used);
                    temp.pop_back();
                    used[i] = false;
                }
            }
        }
    }
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        int n = nums.size();
        vector<vector<int>> res;
        vector<int> temp;
        vector<bool> used(n, false);
        sort(nums.begin(), nums.end());
        backtrack(nums,temp,res,used);
        return res;
    }
};

int main() {
    LeetCode solution;
    return 0;
}