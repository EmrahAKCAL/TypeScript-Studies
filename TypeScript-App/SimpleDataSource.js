"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Products_1 = require("./Products");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Products_1.Product(1, 'Samsung S5', 'Telefon', 1000), new Products_1.Product(2, 'Samsung S6', 'Telefon', 1500), new Products_1.Product(3, 'Samsung S7', 'Telefon', 2500), new Products_1.Product(4, 'Samsung S8', 'Telefon', 3000), new Products_1.Product(5, 'Samsung S9', 'Telefon', 5000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
