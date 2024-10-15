public class Printevenodd {
    static void check(int a){
        if(a%2==0){
            System.out.println(a);
        }
    }

    public static void main(String[] args) {
        for(int i=0;i<20;i++){
            check(i);
        }
    }
}
