class sign{
    static int signOfArray(int[] arr){
            int product = 1;
            for(int i:arr){
                product *= i;
            }
            if(product > 0){
                return 1;
            }else if(product < 0){
                return -1;
            }else if(product == 0){
                return 0;
            }
            return 0;
    }
}
public class signOfTheProductOfArray {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        System.out.println(sign.signOfArray(arr));
    }
}
