/*
Largest Rectangle in Histogram
You are given an array 
A
1
,
A
2
,
…
,
A
N
A 
1
​
 ,A 
2
​
 ,…,A 
N
​
  of length 
N
N. 
A
A represents a histogram which mean the height of the 
i
t
h
i 
th
  bar will be 
A
i
A 
i
​
  units and the width of each bar is 
1
1 unit.

Find the area of the largest rectangle in the histogram.

Input Format
The first line of input will contain a single integer 
T
T, denoting the number of test cases.
The first line of each test case contains an integer 
N
N - the length of the array 
A
A.
The second line of each test case contains 
N
N space-separated integers 
A
1
,
A
2
,
…
,
A
N
A 
1
​
 ,A 
2
​
 ,…,A 
N
​
 .
Output Format
For each test case, output on a new line the area of the largest rectangle in the histogram.

Constraints
1
≤
T
≤
100
1≤T≤100
1
≤
N
≤
10
5
1≤N≤10 
5
 
1
≤
A
i
≤
10
9
1≤A 
i
​
 ≤10 
9
 
The sum of 
N
N over all test cases won't exceed 
2
⋅
10
5
2⋅10 
5
 .
Subtasks
Subtask 1 (30 points): 
1
≤
N
≤
1000
1≤N≤1000
Subtask 2 (70 points): No further constraints.
Sample 1:
Input
Output
3
4
2 6 8 4
4
5 10 5 2
2
5 5
12
15
10
Explanation:
Test case 
1
1: Largest rectangle will create using 
A
2
A 
2
​
 , 
A
3
A 
3
​
 . So height will be 
min
⁡
(
6
,
8
)
=
6
min(6,8)=6, width will be 
2
2. So area will be 
12
12.

Test case 
2
2: Largest rectangle will create using 
A
1
A 
1
​
 , 
A
2
A 
2
​
 , 
A
3
A 
3
​
 . So height will be 
min
⁡
(
5
,
10
,
5
)
=
5
min(5,10,5)=5, width will be 
3
3. So area will be 
15
15.

Test case 
3
3: Largest rectangle will create using 
A
1
A 
1
​
 , 
A
2
A 
2
​
 . So height will be 
min
⁡
(
5
,
5
)
=
5
min(5,5)=5, width will be 
2
2. So area will be 
10
10.
*/
import java.lang.*;
import java.util.*;

public class CodeForces {

    static void solve(Scanner sc) {
        int N = sc.nextInt();
	    long[]A = new long[N+1];
	    
	    for(int i=0; i<N; i++) A[i] = sc.nextLong();
	    
	    Stack<Integer> st = new Stack<>();
	    long ans = 0;
	    
	    for(int i=0; i<=N; i++){
	        while(!st.isEmpty() && A[st.peek()]> A[i]){
	            long h = A[st.pop()];
	            int w = st.isEmpty()?i: i -st.peek()-1;
	            ans = Math.max(ans,h*w);
	        }
	        st.push(i);
	    }
	    System.out.println(ans);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int t = 1;
        if (sc.hasNextInt()) {t = sc.nextInt();}
        while (t-- > 0) {
            solve(sc);
        }
    }
}


