interface PaymentStrategy {
    performPayment(amount: number): void;
}

class CardPay implements PaymentStrategy {
    performPayment(amount: number): void {
        console.log(`Paid ₹${amount} using Card`);
    }
}

class Payment {
    private paymentstrat: PaymentStrategy;

    constructor(paymentstrat: PaymentStrategy) {
        this.paymentstrat = paymentstrat;
    }

    pay(amount: number): string {
        this.paymentstrat.performPayment(amount);
        return "payment successfull";
    }
}

// client code
let cardPay = new CardPay();
let payment = new Payment(cardPay);
console.log(payment.pay(100));
