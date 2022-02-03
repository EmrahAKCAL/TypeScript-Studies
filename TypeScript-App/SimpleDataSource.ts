import { Product } from "./Products";

export class SimpleDataSource {
    private products: Array<Product>;

    constructor(){
        this.products= new Array<Product>(
            new Product(1, 'Samsung S5', 'Telefon', 1000),
            new Product(2, 'Samsung S6', 'Telefon', 1500),
            new Product(3, 'Samsung S7', 'Telefon', 2500),
            new Product(4, 'Samsung S8', 'Telefon', 3000),
            new Product(5, 'Samsung S9', 'Telefon', 5000)
        );
    }
    getProducts(): Product[]{
        return this.products;
    }
}