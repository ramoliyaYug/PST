/*
You are building a notification system for a messaging app. Users can receive
messages via Email, SMS, or Push Notification.
Requirements:
● Define a NotificationStrategy interface with send(message: string) method.
● Create concrete strategies: EmailNotification, SMSNotification, PushNotification.
● Implement a NotificationService class that can switch strategies dynamically.
● Users can send messages using the currently selected notification strategy.
Example Input:
● SET Email
● SEND Hello, Alice!
● SET SMS
● SEND Hello, Bob!
● SET Push
● SEND Hello, Charlie!
Expected Output:
● Email sent: Hello, Alice!
● SMS sent: Hello, Bob!
● Push Notification sent: Hello, Charlie!
*/

interface NotificationStrategy{
    send(message:string):void
}

class EmailNotificationStrategy implements NotificationStrategy{
    send(message:string){
        console.log(`Sending Email ${message}`);
    }
}

class SmsNotificationStrategy implements NotificationStrategy{
    send(message:string){
        console.log(`Sending SMS ${message}`);
    }
}

class PushNotificationStrategy implements NotificationStrategy{
    send(message: string) {
        console.log(`Sending Push Notification ${message}`);
    }
}

class Notifications {
    private strategy:NotificationStrategy;

    setStrategy(strategy:NotificationStrategy){
        this.strategy=strategy;
    }

    sendNotification(msg:string):void{
        this.strategy.send(msg);
    }
}

//client code
let notifications = new Notifications();
let emailNotification = new EmailNotificationStrategy();
let smsNotification = new SmsNotificationStrategy();
let pushNotification = new PushNotificationStrategy();
notifications.setStrategy(smsNotification);
notifications.sendNotification("aapki ma kitni cute")
notifications.setStrategy(emailNotification)
notifications.sendNotification("aapki ma kitni cute")