import java.util.HashMap;

//given a array of name s find which name is coming most frequently
public class MostFreq {
    public static void main(String[] args) {
        String[] names ={"yug" , "om", "anvita", "yug", "kanishka", "yug", "yug", "anvita"};
        HashMap<String, Integer> map = new HashMap<>();
        for(String i:names){
            System.out.println(map);
            map.put(i, map.getOrDefault(i, 0) + 1);
            System.out.println(map);
        }
        System.out.println(map);
        int max = 0;
        String ans = "";
        for(String i:map.keySet()){
            if(map.get(i) > max){
                max = map.get(i);
                ans = i;
            }
        }
        System.out.println(ans);
    }
}
