interface Point{
    x: number;
    y: number
}

interface Passenger {
    name: string;
    phone: string;
    email: string
}
interface Vehicle{
    currentLocation: Point;
    travelTo(point: Point): void; //void herhangi bir değer döndürmeyeceği anlamındadır.
    getDistance(pointA: Point, pointB: Point): number; //number tipi döndürecek
    addPassenger(passencer: Passenger):void;
    removePassencer(passencer: Passenger):void;
}

let travelTo=(point: Point)=>{
    //...
}

let getDistance=(pointA: Point, pointB: Point)=>{
    //...
}