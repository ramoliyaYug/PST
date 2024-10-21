public class ExceptionHandle {
    public static void main(String[] args) throws ArithmeticException {
        try{
            if(5>4){
                throw new ArithmeticException("custom exception");
            }
        }
        catch(ArithmeticException a){
            System.out.println(a);
        }

        finally{
            System.out.println("common process");
        }
    } 
}
