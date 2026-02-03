/*
Given two arrays, val[] and wt[] , representing the values and weights of items, and an integer capacity representing the maximum weight a knapsack can hold, determine the maximum total value that can be achieved by putting items in the knapsack. You are allowed to break items into fractions if necessary.
Return the maximum value as a double, rounded to 6 decimal places.

Examples :

Input: val[] = [60, 100, 120], wt[] = [10, 20, 30], capacity = 50
Output: 240.000000
Explanation: By taking items of weight 10 and 20 kg and 2/3 fraction of 30 kg. Hence total price will be 60+100+(2/3)(120) = 240
Input: val[] = [500], wt[] = [30], capacity = 10
Output: 166.670000
Explanation: Since the item’s weight exceeds capacity, we take a fraction 10/30 of it, yielding value 166.670000.
Constraints:
1 ≤ val.size = wt.size ≤ 105
1 ≤ capacity ≤ 109
1 ≤ val[i], wt[i] ≤ 104


*/
#include <bits/stdc++.h>
using namespace std;

class LeetCode {
    public:
    double fractionalKnapsack(vector<int>& val, vector<int>& wt, int capacity) {
        // code here
        int n = val.size();
        vector<pair<double, int>> ratio;
        for (int i = 0; i < n; i++) {
            double r = (double)val[i] / wt[i];
            ratio.push_back({r, wt[i]});
        }
        sort(ratio.begin(), ratio.end(), greater<pair<double, int>>());
        double totalValue = 0.0;
        for (int i = 0; i < n; i++) {
            if (capacity == 0) break;
            double r = ratio[i].first;
            int w = ratio[i].second;
            if (w <= capacity) {
                totalValue += r * w;
                capacity -= w;
            } else {
                totalValue += r * capacity;
                capacity = 0;
            }
        }
        return totalValue;
    }
};

int main() {
    LeetCode solution;
    return 0;
}