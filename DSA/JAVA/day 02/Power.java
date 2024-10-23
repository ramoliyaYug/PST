public class Power {
    public static void main(String[] args) {
        double x = 2;
        int m = 3;
        // System.out.println(Math.pow(x, m));
        //using loop
        double res = 1;
        for (int i = 1; i <= m; i++) {
            res = res * x;
        }
        System.out.println(res);
        }
}
