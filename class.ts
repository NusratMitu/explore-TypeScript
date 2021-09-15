class Car {
    model:string;
    price: number;
    private _millage: number;
    constructor (model:string, price:number) {
        this.model = model;
        this.price = price;
        this._millage = 10000;
    }
    getTotalPrice(tax:number){
        const taxAmount = this.price * tax /100;
        const totalAmount = this.price + taxAmount;
        return totalAmount;
    }
    getActualMillage():number {
        return this._millage + 5000;
    }
}

const toyota = new Car ('toyota', 120000);
const totalPrice:number = toyota.getTotalPrice(25);