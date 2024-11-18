//check all the values are only alphanumeic or not in a given string
//ex: a9h6->true; a9h6@->false
public class AlphaNumeric{
    public static void main(String[] args) {
        String str = "a@h6";
        for(int i=0;i<str.length();i++){
            if(str.charAt(i)>='A' && str.charAt(i)<='Z' || str.charAt(i)>='a' && str.charAt(i)<='z' || str.charAt(i)>='0' && str.charAt(i)<='9'){
                continue;
            }else{
                System.out.println("false");
                break;
            }
        }
        System.out.println("true");
    }
}