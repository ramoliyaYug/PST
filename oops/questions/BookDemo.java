/*
Write a Java program that demonstrates encapsulation by creating a class Book
with private fields title, author, and price. Implement getter and setter methods for
these fields and write a method applyDiscount(double discount) that applies a
discount to the book price. Display the updated price after applying the discount.
*/

class Book{
    private String title;
    private String author;
    private double price;

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }   

    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }

    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }

    public void applyDiscount(double discount){
        this.price = this.price - (this.price * discount);
    }
}
public class BookDemo {
    public static void main(String[] args) {
        Book book1 = new Book();
        book1.setTitle("Java Programming");
        book1.setAuthor("John Doe");
        book1.setPrice(100.0);

        System.out.println("Title: " + book1.getTitle());
        System.out.println("Author: " + book1.getAuthor());
        System.out.println("Price: $" + book1.getPrice());

        book1.applyDiscount(0.2);
        System.out.println("Price after 20% discount: $" + book1.getPrice());
    }
}
