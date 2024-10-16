import collage.*; //instead of writing three line just write this to import whole package
// import collage.Book;
// import collage.Mentor;
// import collage.Student;

public class Pst {
    public static void main(String[] args) {
        Book book1 = new Book("Testing1", 100);
        Student student1 = new Student("Yug", 17, 81);
        Mentor mentor1 = new Mentor("Om", 17, 1);

        System.out.println(book1.name + " " + book1.price);
        System.out.println(student1.name + " " + student1.age + " " + student1.rollNo);
        System.out.println(mentor1.name + " " + mentor1.age + " " + mentor1.empId);
    }
}
