//parametre kalıpları
interface Point{
    x: number;
    y: number
}

interface Vehicle{
    currentLocation: Point;
    travelTo(point: Point): void; //void herhangi bir değer döndürmeyeceği anlamındadır.
}

//belli bir kalıba sıkı sıkıya bağlı olması, implements: interface içeirisndeki özellikleri tanımlanmış hale getirilir ve ek özellikler ekleyebiliriz.
class Taxi implements Vehicle{
    //sadece bu class a ait özellikleri ekleyebiliriz
    currentLocation: Point;
    travelTo(point: Point): void {
        //burası bir metottur
        console.log(`taksi X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
        
    }
}

class Bus implements Vehicle{
    //sadece bu classa ait özellik verebiliriz
    currentLocation: Point;
    travelTo(point: Point): void {
        //bir metot
        console.log(`otobüs X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

//class yapısı bize bir obje üretmek için gerekli olan yapıyı sunar