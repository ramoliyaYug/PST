class Infinite{
    static long printNum(long start, long end) {
        while(start <= end) {
            System.out.println(start);
            start++;
        }
        return start;
    }
}
public class Infi {
    public static void main(String[] args) {
        Infinite.printNum(1, 1000000000000000000l);
    }
}
