import java.util.Scanner;

public class Game {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            String playerName;
            while (true) {
                System.out.println("Enter Full Name:");
                playerName = scanner.nextLine();
                if (playerName.length() > 0) {
                    break;
                }
                System.out.println("Invalid Input");
            }
        
        System.out.println("Welcome " + playerName + " to the game!");
        
        int randomNum = (int) (Math.random() * 100) + 1;
        
        while (true) {
            System.out.println("Guess a number between 1 and 100:");
            int guess = scanner.nextInt();
            
            if (guess > randomNum) {
                System.out.println("Too high!");
            } else if (guess < randomNum) {
                System.out.println("Too low!");
            } else {
                System.out.println("Congratulations! You guessed the correct number.");
                break;
            }
        }
        
        scanner.close();
    }
}
}
