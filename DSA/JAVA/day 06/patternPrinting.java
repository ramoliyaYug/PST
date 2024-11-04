public class patternPrinting {

    public static void main(String[] args) {
        int n =6;
        for(int i=1;i<=n;i++){
            for(int j=2;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
