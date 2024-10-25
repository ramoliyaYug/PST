class strArr{
    static boolean isEqualStringArray(String[] arr1, String[] arr2){
        return String.join("",arr1).equals(String.join("",arr2));
    }
}
public class StringArray {
    public static void main(String[] args) {
        String[] arr1 = {"ab", "c"};
        String[] arr2 = {"a", "bc"};
        System.out.println(strArr.isEqualStringArray(arr1, arr2));
    }
}

/*
we can also use the for loop but that will increase the time complexity and will also increase the space complexity
*/