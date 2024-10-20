import java.util.Scanner;

// Interface to define account operations
interface AccountOperations {
    void deposit(double amount);
    boolean withdraw(double amount);
}

// Abstract class to provide a basic structure for an account
abstract class AbstractAccount implements AccountOperations {
    protected String accountHolderName;
    protected double balance;
    protected boolean isLoggedIn;

    public abstract void login(String name);
    public abstract void logout();
}

// BankAccount class extends AbstractAccount
class BankAccount extends AbstractAccount {
    private String password;

    public BankAccount(String name, String password, double initialBalance) {
        this.accountHolderName = name;
        this.password = password;
        this.balance = initialBalance;
        this.isLoggedIn = false;
    }

    // Login method
    public void login(String name) {
        if (this.accountHolderName.equals(name)) {
            this.isLoggedIn = true;
            System.out.println("Logged in successfully!");
        } else {
            System.out.println("Login failed. Invalid username.");
        }
    }

    // Logout method
    public void logout() {
        if (this.isLoggedIn) {
            this.isLoggedIn = false;
            System.out.println("Logged out successfully!");
        } else {
            System.out.println("You are not logged in.");
        }
    }

    // Getter for balance
    public double getBalance() {
        return balance;
    }

    // Setter for account holder's name
    public void setAccountHolderName(String name) {
        if (this.isLoggedIn) {
            this.accountHolderName = name;
            System.out.println("Name updated successfully!");
        } else {
            System.out.println("Please log in to update account details.");
        }
    }

    // Deposit method implementation
    @Override
    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
            System.out.println("Deposit successful! New balance: " + this.balance);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    // Withdraw method implementation
    @Override
    public boolean withdraw(double amount) {
        if (!isLoggedIn) {
            System.out.println("Please log in to withdraw money.");
            return false;
        }
        if (balance == 0) {
            System.out.println("Insufficient funds. Cannot withdraw.");
            return false;
        }
        if (amount > balance) {
            System.out.println("Withdrawal amount exceeds balance.");
            return false;
        }
        this.balance -= amount;
        System.out.println("Withdrawal successful! New balance: " + this.balance);
        return true;
    }
}

// Main application class
public class BankApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        BankAccount currentUser = null;

        while (true) {
            System.out.println("1: Create New User");
            System.out.println("2: Login");
            System.out.println("3: Withdraw Money");
            System.out.println("4: Deposit Money");
            System.out.println("5: Logout");
            System.out.println("6: Check Balance");
            System.out.println("7: Exit");

            int choice = scanner.nextInt();
            scanner.nextLine();  // Consume newline

            switch (choice) {
                case 1:
                    System.out.println("Enter your name:");
                    String name = scanner.nextLine();
                    System.out.println("Enter a password:");
                    String password = scanner.nextLine();
                    System.out.println("Enter initial deposit:");
                    double initialDeposit = scanner.nextDouble();
                    scanner.nextLine(); // Consume newline
                    currentUser = new BankAccount(name, password, initialDeposit);
                    System.out.println("Account created successfully!");
                    break;
                case 2:
                    if (currentUser == null) {
                        System.out.println("No user found. Please create an account first.");
                    } else {
                        System.out.println("Enter your name:");
                        String loginName = scanner.nextLine();
                        currentUser.login(loginName);
                    }
                    break;
                case 3:
                    if (currentUser != null) {
                        System.out.println("Enter amount to withdraw:");
                        double withdrawAmount = scanner.nextDouble();
                        scanner.nextLine(); // Consume newline
                        currentUser.withdraw(withdrawAmount);
                    } else {
                        System.out.println("Please create or log in to an account first.");
                    }
                    break;
                case 4:
                    if (currentUser != null) {
                        System.out.println("Enter amount to deposit:");
                        double depositAmount = scanner.nextDouble();
                        scanner.nextLine(); // Consume newline
                        currentUser.deposit(depositAmount);
                    } else {
                        System.out.println("Please create or log in to an account first.");
                    }
                    break;
                case 5:
                    if (currentUser != null) {
                        currentUser.logout();
                    } else {
                        System.out.println("No user is logged in.");
                    }
                    break;
                case 6:
                    if (currentUser != null) {
                        if (currentUser.isLoggedIn) {
                            System.out.println("Your current balance is: " + currentUser.getBalance());
                        } else {
                            System.out.println("Please log in to check your balance.");
                        }
                    } else {
                        System.out.println("No account exists. Please create an account first.");
                    }
                    break;
                case 7:
                    System.out.println("Exiting the application. Goodbye!");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid option. Please try again.");
                    break;
            }
        }
    }
}
