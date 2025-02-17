import java.util.ArrayList;

public class PrintSubSeq {
    public static void main(String[] args) {
        System.out.println(getSubSeq("abc"));
    }

    public static ArrayList<String> getSubSeq(String str) {
        if(str.length() == 0) {
            ArrayList<String> base = new ArrayList<>();
            base.add("");
            return base;
        }
        ArrayList<String> myAns = new ArrayList<>();
        char ch = str.charAt(0);
        String remString = str.substring(1);
        ArrayList<String> remSubSeq = new ArrayList<>();
        remSubSeq = getSubSeq(remString);
        for(String s : remSubSeq) {
            myAns.add(s+"");
            myAns.add(ch+s);
        }
        return myAns;
    }

    public static boolean isSubSeq(String s1, String s2) {
        if(s1.length() == 0) {
            return true;
        }
        if(s2.length() == 0) {
            return false;
        }
        if(s1.charAt(0) == s2.charAt(0)) {
            return isSubSeq(s1.substring(1), s2.substring(1));
        }
        return isSubSeq(s1, s2.substring(1));
    }
}
