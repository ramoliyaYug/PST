public class CodeForces {
    public static void main(String[] args) {

        String[] arr1 = {"ab", "c"};
        String[] arr2 = {"a", "bc"};
        System.out.println(isEqualStringArray(arr1, arr2));
    }
    static boolean isEqualStringArray(String[] arr1, String[] arr2){
        return String.join("",arr1).equals(String.join("",arr2));
    }
}
