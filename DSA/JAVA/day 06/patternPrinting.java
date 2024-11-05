public class patternPrinting {

    public static void main(String[] args) {
        int n =6;
        for(int i=1;i<=n;i++){
            for(int j=2;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }

        //printing the hollow rectangle
        for (int i = 1; i <= n; i++) { // Loop for each row
            for (int j = 1; j <= n; j++) { // Loop for each column
                // Print '*' for border elements, otherwise print space
                if (i == 1 || i == n || j == 1 || j == n) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println(); // Move to the next line after each row
        }

    }
}
