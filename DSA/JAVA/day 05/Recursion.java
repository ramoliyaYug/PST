class Rec{
    static long printNum(long start, long end) {
        System.out.println(start);
        if(start == end) {
            return end;
        }
        return printNum(start+1, end);
    }
}
public class Recursion {
    public static void main(String[] args) {
        Rec.printNum(1, 1000000000000000000l);
    }
}
