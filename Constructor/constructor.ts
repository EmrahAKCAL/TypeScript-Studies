//parametre kalıpları
interface Point{
    x: number;
    y: number
}

interface Vehicle{
    currentLocation: Point;
    travelTo(point: Point): void; 
}
class Taxi implements Vehicle{
    //constructor: objenin üretme aşamasında değer göndermek
    color:string;
    constructor(location:Point, color?:string){
        this.currentLocation=location;
        this.color=color;
    }
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi X: ${point.x} Y: ${point.y} konumuna gidiyor. `);
        
    }
}

//class yapısı bize bir obje üretmek için gerekli olan yapıyı sunar


//kopya oluşturuldu. normal nesne tanımlar gibi obje tanımlanılamaz.
let taxi_1: Taxi= new Taxi({ x: 5, y: 8}); 
taxi_1.travelTo({x:1, y:2});
console.log(taxi_1.currentLocation);

let taxi_2: Taxi= new Taxi({ x: 1, y: 9}, 'Red'); 
taxi_2.travelTo({x:1, y:9});
console.log(taxi_2.currentLocation);



