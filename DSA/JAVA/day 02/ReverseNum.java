public class ReverseNum {

    public static void main(String[] args) {

        int num = 12345;
        int res = 0;
        while(num > 0){ 
            int rem = num % 10;
            res = res * 10 + rem;
            num = num / 10;
        }
        System.out.println(res);
    }    
}
