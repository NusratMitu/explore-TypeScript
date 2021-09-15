"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 10000;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const totalAmount = this.price + taxAmount;
        return totalAmount;
    }
    getActualMillage() {
        return this._millage + 5000;
    }
}
const toyota = new Car('toyota', 120000);
const totalPrice = toyota.getTotalPrice(25);
