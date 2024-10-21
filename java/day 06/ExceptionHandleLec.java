public class ExceptionHandleLec {

    public static void main(String[] args) {
        try{
            int a = 5/0;
            int b = 6/2;
        }
        catch(ArithmeticException e){
            System.out.println("Exception in code");
        }

        finally{
            System.out.println("all resourses detached");
        }
        System.out.println("server not crashed");

        /*
        throw keyword
        - used to throw custom exception
        
        throws keyword:
        -exception class is exytended and then we want to throw exception
        */
    }    
}
