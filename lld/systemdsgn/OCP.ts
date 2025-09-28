//ocp violation
class NotificationService{
    send(type:string,message:string):void{
        if(type==="email"){
            //send email
            console.log(`email sent to ${message}`);
        }
        else if(type==="sms"){
            //send sms 
            console.log(`sms sent to ${message}`);
        }
    }
}

class NotificationSender{
    send(notificationObj:NotificationserviceInterface,message:string):void{
        notificationObj.notify(message);
    }
}

interface NotificationserviceInterface{
    notify(message:string):void;
}

class EmailNotificationService implements NotificationserviceInterface{
    notify(message: string): void {
        console.log(`email sent to ${message}`);
    }

}

class SmsNotificationService implements NotificationserviceInterface{
    notify(message: string): void {
        console.log(`sms sent to ${message}`);
    }
}
