//parametre kalıpları
interface Point{
    x: number;
    y: number
}

interface Vehicle{
    travelTo(point: Point): void; 
}
class Taxi implements Vehicle{
    //constructor: objenin üretme aşamasında değer göndermek
    constructor(private location:Point, private color?:string){}
    public travelTo(point: Point): void {
        console.log(`${this.color} renkli taksi X: ${this.location.x} Y: ${this.location.y} konumundan X: ${point.x} Y: ${point.y} konumuna gidiyor. `);
        
    }
}

//class yapısı bize bir obje üretmek için gerekli olan yapıyı sunar


//kopya oluşturuldu. normal nesne tanımlar gibi obje tanımlanılamaz.
let taxi_1: Taxi= new Taxi({ x: 5, y: 8}, 'Red'); //location a karşılık gelen
taxi_1.travelTo({x:1, y:2});//point e karşılık gelen



//class yapısı dışında erişilmesi public olayıdır. Önüne public yazılabilir veya yazılmasa da bir public dir. Yani herkes tarafından ulaşılabilir.

//Private: Dışardan ulaşılabilir olmaması. Yani bir kuruma sağlamaktadır. Üretme aşamasında yanlışlıkla değer atmamızın önüne geçer.



