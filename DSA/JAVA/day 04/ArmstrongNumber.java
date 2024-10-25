class ArmNum{
    static boolean isArmstrong(int n){
        int sum = 0;
        int temp = n;
        int len = String.valueOf(n).length();
        while(n>0){
            int rem = n%10;
            sum = sum + (int)Math.pow(rem,len);
            n = n/10;
        }
        if(sum == temp){
            return true;
        }
        return false;
    }
}

public class ArmstrongNumber {
    public static void main(String[] args) {
        int num = 153;
        System.out.println(ArmNum.isArmstrong(num));
    }
}