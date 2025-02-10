/*
Problem Statement
There are 
N people numbered from 
1 to 
N.

Person 
i is wearing a bib with the number 
Q 
i
​
  and is staring at person 
P 
i
​
 .

For each 
i=1,2,…,N, find the number written on the bib of the person that the person wearing the bib with number 
i is staring at.

Constraints
2≤N≤3×10 
5
 
1≤P 
i
​
 ≤N
The values of 
P 
i
​
  are distinct.
1≤Q 
i
​
 ≤N
The values of 
Q 
i
​
  are distinct.
All input values are integers.
Input
The input is given from Standard Input in the following format:

N
P 
1
​
  
P 
2
​
  
… 
P 
N
​
 
Q 
1
​
  
Q 
2
​
  
… 
Q 
N
​
 
Output
Let 
S 
i
​
  be the number written on the bib of the person that the person wearing the bib with number 
i is staring at.
Print 
S 
1
​
 ,S 
2
​
 ,…,S 
N
​
  in this order, separated by a single space.

Sample Input 1
Copy
4
4 3 2 1
2 3 1 4
Sample Output 1
Copy
3 4 1 2
Person 
3 is wearing the bib with the number 
1, and the person that person 
3 is staring at, person 
2, is wearing the bib with the number 
3. Thus, the answer for 
i=1 is 
3.

Figure

Sample Input 2
Copy
10
2 6 4 3 7 8 9 10 1 5
1 4 8 2 10 5 7 3 9 6
Sample Output 2
Copy
4 8 6 5 3 10 9 2 1 7

*/
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] P = new int[N];
        int[] Q = new int[N];
        for (int i = 0; i < N; i++) {
            P[i] = sc.nextInt();
        }
        for (int i = 0; i < N; i++) {
            Q[i] = sc.nextInt();
        }
        for (int i = 0; i < N; i++) {
            System.out.print(Q[P[i] - 1] + " ");
        }
    }
}