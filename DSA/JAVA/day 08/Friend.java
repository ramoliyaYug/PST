import java.util.ArrayList;
import java.util.Scanner;
public class Friend {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList <String> Friends = new ArrayList<String>();    

        System.out.println("Enter the name of friends: ");
        boolean isContinue = true;
        while (isContinue) {
            String name = sc.nextLine();
            if (name.equals("exit")) {
                isContinue = false;
            } else {
                Friends.add(name);
                System.out.println("Enter new friend name(type exit to end process): ");
            }
        }

            System.out.println(Friends);
            //removing last element
            Friends.remove(Friends.size()-1);
            System.out.println(Friends);

            //finding best friend whoever comes at 0th index
            System.out.println(Friends.get(0));
    }
}
