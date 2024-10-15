public class Printprime {
    static boolean checkPrime(int a){
        if(a<2){
            return false;
        }
        for(int i=2;i<a;i++){
            if(a%i==0){
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        for(int i=0;i<50;i++){
            if(checkPrime(i)){
                System.out.println(i);
            }
        }
    }
}