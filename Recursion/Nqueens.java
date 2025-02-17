import java.util.Scanner;
public class Nqueens {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] chess = new int[n][n];
        printNqueens(0, chess, "");
    }

    public static void printNqueens(int row, int[][] chess, String ans) {
        // Base case: If all rows are processed, print the solution
        if (row == chess.length) {
            System.out.println(ans);
            return;
        }

        // Try placing the queen in each column of the current row
        for (int col = 0; col < chess.length; col++) {
            if (isSafe(chess, row, col)) {
                chess[row][col] = 1; // Place the queen
                printNqueens(row + 1, chess, ans + "(" + row + "," + col + ") "); // Recur for the next row
                chess[row][col] = 0; // Backtrack: remove the queen
            }
        }
    }

    public static boolean isSafe(int[][] chess, int row, int col) {
        // Check upside
        for (int i = row - 1; i >= 0; i--) {
            if (chess[i][col] == 1) {
                return false;
            }
        }

        // Check upright diagonal
        for (int i = row - 1, j = col + 1; i >= 0 && j < chess.length; i--, j++) {
            if (chess[i][j] == 1) {
                return false;
            }
        }

        // Check upleft diagonal
        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (chess[i][j] == 1) {
                return false;
            }
        }

        return true;
    }
}