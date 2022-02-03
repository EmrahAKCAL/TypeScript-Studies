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
    constructor(private _location:Point, private _color?:string){}
    public travelTo(point: Point): void {
        console.log(`${this._color} renkli taksi X: ${this._location.x} Y: ${this._location.y} konumundan X: ${point.x} Y: ${point.y} konumuna gidiyor. `);
        
    }
    get location(){
        return this._location; //private olanı kontrollü olarak dışarıya açma
    }
    set location(value: Point){
        if(value.x<0 || value.y<0){
            throw new Error('Koordinat bilgileri negatif olamaz.');
        }
        this._location=value;
    }
}

//class yapısı bize bir obje üretmek için gerekli olan yapıyı sunar


//kopya oluşturuldu. normal nesne tanımlar gibi obje tanımlanılamaz.
let taxi_1: Taxi= new Taxi({ x: 5, y: 8}, 'Red'); //location a karşılık gelen
taxi_1.travelTo({x:1, y:2});//point e karşılık gelen

let currentLocation=taxi_1.location;
taxi_1.location={x:-11, y:21};


//travelTo location içerisine kontrollü veri atmak
