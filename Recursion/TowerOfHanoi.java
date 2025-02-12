public class TowerOfHanoi {
    public static void main(String[] args) {
        solveHanoi(4, "Source", "Destination", "Helper");
    }

    public static void solveHanoi(int disk, String source, String destination, String helper) {
        if (disk == 0) {
            return;
        }

        solveHanoi(disk - 1, source, helper, destination);
        
        System.out.println("Move disk " + disk + " from " + source + " to " + destination);
        
        solveHanoi(disk - 1, helper, destination, source);
    }
}
