//write the java program which convers the string to lowercase without using inbuilt function toLowerCase
public class LowerCase {
    public static void main(String[] args) {
        String str = "YUG RAMOLIYA";
        for(int i=0;i<str.length();i++){
            if(str.charAt(i)>='A' && str.charAt(i)<='Z'){
                System.out.print((char)(str.charAt(i)+32));
            }
        }
    }
}