//create a arraylist of natural numbers and then create a method to return the arraylist of even numbers
import java.util.ArrayList;
public class Even {
    static ArrayList<Integer> even(ArrayList<Integer> list){
        ArrayList<Integer> evenList = new ArrayList<Integer>();
        for(int i = 0; i < list.size(); i++){
            if(list.get(i) % 2 == 0){
                evenList.add(list.get(i));
            }
        }
        return evenList;
    }
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        for(int i = 1; i<= 20; i++){
            list.add(i);
        }
        System.out.println(list);
        System.out.println(even(list));
    }
}
