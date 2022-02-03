"use strict";
exports.__esModule = true;
var Products_1 = require("./Products");
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1.ProductService();
var result;
//result =_productService.getProducts(); //ekli olan product listesi
result = _productService.getById(2); // 2 numaralı eleman
var p = new Products_1.Product(); //Yeni bir ürün oluşturma
p.id = 2;
p.name = "IPhone 6";
p.category = "Phone";
p.price = 4000;
_productService.saveProduct(p);
//_productService.deleteProduct(result) //2 numaralı liste elemanını siler.
result = _productService.getProducts();
console.log(result);
