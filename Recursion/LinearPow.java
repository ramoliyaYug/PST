public class LinearPow {
    public static void main(String[] args) {
        System.out.println(linearPow(2,3));
    }

    public static int linearPow(int x, int n) {
        if(n==0){
            return 1;
        }
        return x*linearPow(x,n-1);
    }
}