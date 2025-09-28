/* 
SRP problem statement - order management system
you are tasked with building an order management system for an e commerce platform, 
for each order the system neeeds to
claculate the total price of the order including discount,taxes,etc...
save the order details into the database
send a confirmation email to the buyer
update the inventory to reflect the purchased items.
*/

class Order{
    orderId:string;
    quantity:number;
    buyer:string;
    seller:string;

    calculateTotalPrice(){

    }
}

/*
you are building a notification service for an e commerce platform
requirements are
send notification to users via different channels eg, emails and sms
the system should be extensible to support new channles in the future eg. push notification,whatsapp without modifying the existing code.
*/