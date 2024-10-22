/*
-Asyptitic analysis:
- not dependent on machine
- order of growth
- nor dependent on code, algo is sufficient
*/

/*
- time complexity
- best case (symbol - omega)
- average case (symbol - theta)
- worst case (symbol - O(n))
*/

// priority of time complexity
// constant < log(log(n)) < log(n) < n^1/3 < n^1/2 < n < n^2 < n^3



public class TimeComplexity {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
        }
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
        }
        /*
        - here the time complexity is n + n = 2n so the time complexity is O(2n) this is linear 
        */

        for(int i=0;i<10;i=i*i){
            System.out.println(i);
        }
        /*
        - here the time complexity is n^2 so the time complexity is O(n^2)
        */

        for(int i=0;i<10;i=Pow(i,2)){
            System.out.println(i);
        }
        /*
        -time complexity is log(log(n))
        */
    }    
}
