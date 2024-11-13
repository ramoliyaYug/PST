import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class CodeForces {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name = sc.nextLine();
        
        Set<Character> uniqueChars = new HashSet<>();
        
        for (int i = 0; i < name.length(); i++) {
            uniqueChars.add(name.charAt(i));
        }
        
        if (uniqueChars.size() % 2 == 0) {
            System.out.println("CHAT WITH HER!");
        } else {
            System.out.println("IGNORE HIM!");
        }   
    }
}
