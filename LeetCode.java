//return all possible substrings of a string
import java.util.ArrayList;
imort java.util.HashSet;
public class LeetCode {
    public static void main(String[] args) {
        String s = "abcde";
        System.out.println(substrings(s));
        System.out.println(isUnique(s));
        System.out.println(isUniqueUsingHashSet(s));
        //printing unique substring
    }

    public static ArrayList<String> substrings(String s) {
        ArrayList<String> res = new ArrayList<>();
        for (int i = 0; i < s.length(); i++) {
            for (int j = i + 1; j <= s.length(); j++) {
                res.add(s.substring(i, j));
            }
        }
        return res;
    }
    //method to check if string has all unique characters or not
    public static boolean isUnique(String s) {
        for (int i = 0; i < s.length(); i++) {
            for (int j = i + 1; j < s.length(); j++) {
                if (s.charAt(i) == s.charAt(j)) {
                    return false;
                }
            }
        }
        return true;
    }

    //using hashset
    public static boolean isUniqueUsingHashSet(String s) {
        HashSet<Character> set = new HashSet<>();
        for (int i = 0; i < s.length(); i++) {
            if (set.contains(s.charAt(i))) {
                return false;
            }
            set.add(s.charAt(i));
        }
        return true;
    }
}
