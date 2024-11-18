

public class LeetCode {
  public static void main(String[] args) {
    System.out.println(myAtoi("1337c0d3"));
  }
  static int myAtoi(String s) {
    String str = s.replaceAll("[^0-9]","");
    return Integer.parseInt(str);
  }
}
