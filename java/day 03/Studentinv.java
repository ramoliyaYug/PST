import java.util.*;
public class Studentinv {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of students:");
        int n = sc.nextInt();
        String names[] = new String[n];
        for (int i = 0; i < n; i++) {
            Scanner s = new Scanner(System.in);
            System.out.println("Enter the name of student " + (i + 1) + ":");
            names[i] = s.nextLine();
        }
        System.out.println("The names of students are:" + Arrays.toString(names));
    }
}
