//String pool in java:
//if you make many strings with the same value then the memory is allocated only once and it is stored in the string pool.
//multiple variable with the same input string will not take the new memory location.

//string builder:
/*
mutable sequence of characters.
syntax:
StringBuilder str = new StringBuilder("");
*/

//string buffer:
/*
mutable sequence of characters.
syntax:
StringBuffer str = new StringBuffer("");
*/
//string methods:
/*
.length()->returns the length of the string
.charAt(index)->returns the character at the specified index
.toUpperCase()->converts the string to uppercase
.toLowerCase()->converts the string to lowercase
.equals()->compares two strings
.concat()->concatenates two strings
.toCharArray()->converts the string to a char array
*/

//string builder methods:
/*
.toString()->convert the string builder to string
.append()->appends the string, adds string to last
.delete()->deletes the character at the specified index
.reverse()->reverses the string
*/
public class StringMethod {
    public static void main(String[] args) {
        String str = "Hello";
        System.out.println(str);
        // str.concat("world"); 
        System.out.println(str.concat(" world"));
        System.out.println();

        StringBuilder sb = new StringBuilder("Hello");
        System.out.println(sb);
        sb.append(" world");
        System.out.println(sb);
        System.out.println();

        StringBuffer sf = new StringBuffer("Hello");
        System.out.println(sf);
        sf.append(" world");
        System.out.println(sf);
    }    
}
