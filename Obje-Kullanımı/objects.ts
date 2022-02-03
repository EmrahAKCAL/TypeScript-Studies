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
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
        
    }
}

class Bus implements Vehicle{
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`otobüs X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

//class yapısı bize bir obje üretmek için gerekli olan yapıyı sunar

let taxi_1: Taxi= new Taxi(); //kopya oluşturuldu. normal nesne tanımlar gibi obje tanımlanılamaz.
taxi_1.travelTo({x:1, y:2});

taxi_1.currentLocation={ x: 5, y: 8};
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

//taxi_2 objesi oluşturuldu ve Taxi kopyası oluşturuldu
let taxi_2:Taxi= new Taxi(); 
taxi_2.travelTo({x:3, y:7});

taxi_2.currentLocation={x:6, y:5};
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);


//Otobüs için obje oluşturma kopya oluşturma 
let bus_1:Bus=new Bus();
bus_1.travelTo({x:3, y:5});

bus_1.currentLocation={x:1, y:6};
console.log(bus_1.currentLocation.x);
console.log(bus_1.currentLocation.y);






