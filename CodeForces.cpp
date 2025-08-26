/*
Welcome to Rockport City!

It is time for your first ever race in the game against Ronnie. To make the race interesting, you have bet a
 dollars and Ronnie has bet b
 dollars. But the fans seem to be disappointed. The excitement of the fans is given by gcd(a,b)
, where gcd(x,y)
 denotes the greatest common divisor (GCD) of integers x
 and y
. To make the race more exciting, you can perform two types of operations:

Increase both a
 and b
 by 1
.
Decrease both a
 and b
 by 1
. This operation can only be performed if both a
 and b
 are greater than 0
.
In one move, you can perform any one of these operations. You can perform arbitrary (possibly zero) number of moves. Determine the maximum excitement the fans can get and the minimum number of moves required to achieve it.

Note that gcd(x,0)=x
 for any x≥0
.

Input
The first line of input contains a single integer t
 (1≤t≤5⋅103
) — the number of test cases.

The first and the only line of each test case contains two integers a
 and b
 (0≤a,b≤1018
).

Output
For each test case, print a single line containing two integers.

If the fans can get infinite excitement, print 0 0.

Otherwise, the first integer must be the maximum excitement the fans can get, and the second integer must be the minimum number of moves required to achieve that excitement.

Example
InputCopy
4
8 5
1 2
4 4
3 9
OutputCopy
3 1
1 0
0 0
6 3
Note
For the first test case, you can apply the first operation 1
 time to get a=9
 and b=6
. It can be shown that 3
 is the maximum excitement possible.

For the second test case, no matter how many operations you apply, the fans will always have an excitement equal to 1
. Since the initial excitement is also 1
, you don't need to apply any operation.

For the third case, the fans can get infinite excitement by applying the first operation an infinite amount of times.

For the fourth test case, you can apply the second operation 3
 times to get a=0
 and b=6
. Since, gcd(0,6)=6
, the fans will get an excitement of 6
.



*/ 
#include <bits/stdc++.h>
using namespace std;

void solve() {
    int a,b;
    cin >> a >> b;
    if(a==b){
        cout<<0<<" "<<0<<endl;
    }else{
        int g = abs(a - b);
        int r = a % g;
        int minOps = min(r, g - r);
        cout << g << " " << minOps << endl;
    }
}

int main() {
    int t=1;
    cin >> t;
    while (t--) {
        solve();
    }
    return 0;
}

// int ansFromTheOperation1 = INT_MIN;
    // int ansFromTheOperation2 = INT_MIN;
    // int numberOfOperations1 = 0;
    // int numberOfOperations2 = 0;
    // int aCopy = a;
    // int bCopy = b;
    // while(a>0 && b>0){
    //     ansFromTheOperation1 = max(ansFromTheOperation1,gcd(a,b));
    //     numberOfOperations1++;
    //     a++;
    //     b++;
    // }
    // while(aCopy>0 && bCopy>0){
    //     ansFromTheOperation2 = max(ansFromTheOperation2,gcd(aCopy,bCopy));
    //     numberOfOperations2++;
    //     aCopy--;
    //     bCopy--;
    // }
    // int finalAnswer = max(ansFromTheOperation1,ansFromTheOperation2);
    // int finalNumberOfOperations = min(numberOfOperations1,numberOfOperations2);
    // if(finalAnswer==INT_MIN){
    //     cout<<0<<" "<<0<<endl;
    // }else{
    //     cout<<finalAnswer<<" "<<finalNumberOfOperations<<endl;
    // }