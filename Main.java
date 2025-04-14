class Solution {
  public String makeLargestSpecial(String s) {
      if (s.length() <= 2) return s;

      ArrayList<String> specials = new ArrayList<>();
      int count = 0, start = 0;

      // Step 1: Split the string into special binary substrings
      for (int i = 0; i < s.length(); i++) {
          count += (s.charAt(i) == '1') ? 1 : -1;
          if (count == 0) { // Found a special binary string
              String sub = "1" + makeLargestSpecial(s.substring(start + 1, i)) + "0";
              specials.add(sub);
              start = i + 1;
          }  
      }

      // Step 2: Sort substrings in descending order
      Collections.sort(specials, Collections.reverseOrder());

      // Step 3: Concatenate substrings
      StringBuilder result = new StringBuilder();
      for (String str : specials) {
          result.append(str);
      }

      return result.toString();
  }
}