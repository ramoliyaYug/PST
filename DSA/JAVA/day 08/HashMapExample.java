/*
- stores data in the key value pair

- syntax:
    HashMap<key datatype, value datatype> map = new HashMap<>();

- methods:
mapName.put(key, value): adds a new key-value pair to the map or updates the value associated with the given key

mapName.get(key): returns the value associated with the given key

mapName.remove(key): removes the key-value pair associated with the given key

mapName.size(): returns the number of key-value pairs in the map

mapName.isEmpty(): returns true if the map is empty, false otherwise

mapName.clear(): removes all key-value pairs from the map

mapName.containsKey(key): returns true if the map contains the given key, false otherwise

mapName.containsValue(value): returns true if the map contains the given value, false otherwise

mapName.keySet(): returns a set of all the keys in the map

mapName.values(): returns a set of all the values in the map

mapName.entrySet(): returns a set of all the key-value pairs in the map

mapName.toString(): returns a string representation of the map
*/

import java.util.*;

public class HashMapExample {  // Renamed class
    public static void main(String[] args) {

        HashMap<String, Integer> map = new HashMap<>();
        map.put("John", 30);
        map.put("Jane", 25);
        map.put("Bob", 40);
        map.put("Alice", 35);
        System.out.println(map);

        System.out.println(map.get("John"));

        map.remove("Bob");
        System.out.println(map);

        System.out.println(map.size());

        System.out.println(map.isEmpty());

        System.out.println(map);
        
        System.out.println(map.containsKey("John"));
        
        System.out.println(map.containsValue(25));
        
        System.out.println(map.keySet());
        
        System.out.println(map.values());
        
        System.out.println(map.entrySet());
        
        System.out.println(map.toString());

        map.clear();

        System.out.println(map);
    }
}

