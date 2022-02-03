import { Product } from "./Products";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result;
//result =_productService.getProducts(); //ekli olan product listesi
result =_productService.getById(2); // 2 numaralı eleman
let p= new Product();//Yeni bir ürün oluşturma
p.id=2;
p.name= "IPhone 6";
p.category="Phone";
p.price=4000;
_productService.saveProduct(p); //elemanı güncelleme
//_productService.deleteProduct(result) //2 numaralı liste elemanını siler.
result =_productService.getProducts();
console.log(result);
