class Evenodd {
    static String check(int a){ //so to do that we need to modify the void method which to the data type which we are returning
        if(a%2==0){
            // System.out.println("even");
            return "Even"; //instead of printing this we return this 
        }
        else{
            // System.out.println("odd");
            return "Odd";
        }
    }
    public static void main(String args[]) { // The static keyword allows us to call the check method directly from main without needing an instance of the Evenodd class
        int a = 6;
        check(a);
    }
}