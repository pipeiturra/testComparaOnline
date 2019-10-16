const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

    it("should foo", function() {
        // const coTest = new CarInsurance([new Product("fixme", 0, 0)]);
        // const products = coTest.updatePrice();
        // expect(products[0].name).equal("fixme");

        //productos a agregar
        const productsAtDayZero = [
            new Product('Medium Coverage', 10, 20),
            new Product('Full Coverage', 2, 0),
            new Product('Low Coverage', 5, 7),
            new Product('Mega Coverage', 0, 80),
            new Product('Mega Coverage', -1, 80),
            new Product('Special Full Coverage', 15, 20),
            new Product('Special Full Coverage', 10, 49),
            new Product('Special Full Coverage', 5, 49),
            new Product('Super Sale', 3, 6),
        ];

        //definicion de seguro en base a los productos agregados
        const carInsurance = new CarInsurance(productsAtDayZero);
        const productPrinter = function(product) {
            console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
        };

        //actualizacion de precio y verificacion de calculo
        for (let i = 1; i <= 30; i += 1) {
            console.log(`Day ${i}`);
            console.log('name, sellIn, price');
            carInsurance.updatePrice().forEach(productPrinter);
            console.log('');
        }
    });

});