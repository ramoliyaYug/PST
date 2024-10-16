import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

public class Datetest {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        LocalTime current = LocalTime.now();
        LocalDateTime dt = LocalDateTime.now();
        LocalDate date1 = LocalDate.of(2007, 2, 11);
        System.out.println(today);
        System.out.println(current);
        System.out.println(dt);
        System.out.println(date1);
        System.out.println(date1.getYear());
        System.out.println(date1.getMonth());
        System.out.println(date1.getMonthValue());
        System.out.println(date1.getDayOfMonth());
        System.out.println(date1.getDayOfWeek());
        System.out.println(date1.getDayOfYear());
        System.out.println(date1.lengthOfMonth());
        System.out.println(date1.lengthOfYear());
        System.out.println(date1.isLeapYear());
    }
}
