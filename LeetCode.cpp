/*
You are given a 0-indexed 2D integer array nums representing the coordinates of the cars parking on a number line. For any index i, nums[i] = [starti, endi] where starti is the starting point of the ith car and endi is the ending point of the ith car.

Return the number of integer points on the line that are covered with any part of a car.

 

Example 1:

Input: nums = [[3,6],[1,5],[4,7]]
Output: 7
Explanation: All the points from 1 to 7 intersect at least one car, therefore the answer would be 7.
Example 2:

Input: nums = [[1,3],[5,8]]
Output: 7
Explanation: Points intersecting at least one car are 1, 2, 3, 5, 6, 7, 8. There are a total of 7 points, therefore the answer would be 7.
 

Constraints:

1 <= nums.length <= 100
nums[i].length == 2
1 <= starti <= endi <= 100
 
Seen this question in a real interview before?
1/5
Yes
No
Accepted
67,413/92.4K
Acceptance Rate
73.0%
Topics
icon
Companies
Hint 1
Sort the array according to first element and then starting from the 0th index remove the overlapping parts and return the count of non-overlapping points. 

*/
#include <bits/stdc++.h>
using namespace std;

class LeetCode {
public:
    int numberOfPoints(vector<vector<int>>& nums) {
        sort(nums.begin(), nums.end());
        int ans = 0;
        int start = nums[0][0];
        int end = nums[0][1];
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i][0] <= end) {
                end = max(end, nums[i][1]);
            } else {
                ans += (end - start + 1);
                start = nums[i][0];
                end = nums[i][1];
            }
        }
        ans += (end - start + 1);
        return ans;
    }
};

int main() {
    LeetCode solution;

    return 0;
}
