public class Last {
    public static void main(String[] args) {
        String word = "Hello World";
        String[] arr = word.split(" ");
        System.out.println(arr[arr.length - 1].length());

        // another approach
        int counter = 0;
        boolean isWordStarted =  false;
        for(int i = word.length() - 1; i >= 0; i--) {
            if(word.charAt(i) != ' ') {
                counter++;
                isWordStarted = true;
            }else if(isWordStarted){
                break;
            }
        }
        System.out.println(counter);
        }    
}
