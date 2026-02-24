class Product {

    constructor(name, price) {
        this.name=name;
        this.price=price;
    }

    displayProduct(){
        console.log(`Product : ${this.name}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax) ;

    }

}

const salesTax = 0.05;

const product1 = new Product("shirt", 900);
const product2 = new Product("Pants", 900);
const lm = product1.calculateTotal(salesTax) ;

product1.displayProduct();
product2.displayProduct();
console.log("The total price is :"+lm);
