var updateValues = require('./updateValues');

class Product {
    constructor(name, sellIn, price) { //No cambiar
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }
}

class CarInsurance {
    constructor(products = []) {
            this.products = products;
        }
        //funcion para actualizar los precios al final del dia
    updatePrice() {
        for (var i = 0; i < this.products.length; i++) {
            updateValues.updateFunction(this.products[i]);
        }

        return this.products;
    }
}

exports.Product = Product;
exports.CarInsurance = CarInsurance;