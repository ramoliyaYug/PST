public class Book {
    String name;
    int price;

    public Book(String title, int mrp) {
        this.name = title;
        this.price = mrp;
    }
    public static void main(String[] args) {
        Book book1 = new Book("Java", 1000);
        System.out.println(book1.name + ":" + book1.price);

        Book book2 = new Book("C++", 2000);
        System.out.println(book2.name + ":" + book2.price);
    }
}
