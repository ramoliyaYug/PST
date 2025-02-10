public class Factorial {
    public static void main(String[] args) {
        System.out.println(printFact(5));
    }

    public static int printFact(int n){
        if(n==0){
            return 1;
        }
        return n*printFact(n-1);
    }
}
