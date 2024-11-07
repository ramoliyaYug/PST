// ArrayList is a part of Java's Collection Framework and is dynamic in size
// It's found in the java.util package

import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        
        // Create an ArrayList of strings
        ArrayList<String> list = new ArrayList<String>();
        
        // Add elements to the ArrayList
        list.add("apple");
        list.add("banana");
        list.add("cherry");

        // Add element at specific index
        list.add(1, "mango");  // Inserts "mango" at index 1

        // Print the ArrayList
        System.out.println("ArrayList after adding elements: " + list);

        // Get an element at a specific index
        String fruit = list.get(2);  // Gets element at index 2
        System.out.println("Element at index 2: " + fruit);

        // Modify an element
        list.set(0, "orange");  // Replaces "apple" with "orange"
        System.out.println("ArrayList after modifying index 0: " + list);

        // Remove an element by index
        list.remove(3);  // Removes the element at index 3
        System.out.println("ArrayList after removing index 3: " + list);

        // Remove an element by value
        list.remove("banana");  // Removes "banana" from the list
        System.out.println("ArrayList after removing 'banana': " + list);

        // Check if the list contains an element
        boolean containsCherry = list.contains("cherry");
        System.out.println("Does the list contain 'cherry'? " + containsCherry);

        // Size of the ArrayList
        int size = list.size();
        System.out.println("Size of ArrayList: " + size);

        // Clear all elements
        list.clear();
        System.out.println("ArrayList after clearing all elements: " + list);
    }
}
