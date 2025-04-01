// 3. Polymorphism (Method Overriding & Overloading)
// Scenario: You are creating a payment gateway that supports multiple payment methods like CreditCard and PayPal. Each method has a pay(amount) function, but the implementation is different.

// TODO:
// Create a base class Payment with a pay(amount) method.
// Extend it into CreditCard and PayPal, overriding pay() to print different messages.
// Implement method overloading by adding a pay() method that either:
// Takes only an amount, or
// Takes an amount and currency (e.g., pay(100, "USD")).
// Tip: Since JavaScript does not support traditional method overloading, use default parameters or checking arguments length inside the method.

class Payment{

    pay(amount, currency){
        this.amount = amount;
        this.currency = currency
    }
}

class CreditCard extends Payment{
    pay(amount, currency = 'USD'){
        document.writeln('Payment through Creadit Card <br>');
        document.writeln(`Amount: ${amount} <br>`);
        document.writeln(`Currency: ${currency} <br> <br>`);
    }
}

class PayPal extends Payment{
    pay(amount, currency = 'INR'){
        document.writeln('Payment through Pay pal <br>');
        document.writeln(`Amount: ${amount} <br>`);
        document.writeln(`Currency: ${currency} <br> <br>`);
    }
}

const credit_card = new CreditCard();
const pay_pal = new PayPal();

credit_card.pay(100);
pay_pal.pay(100);
