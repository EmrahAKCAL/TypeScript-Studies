//import edilecek dosyalar(dışardan gelen dosyalar)
import { Vehicle } from './vehicle';
import { Point } from './point';

//Export edilecek dosyalar(gidecek dosyalar)
export class Taxi implements Vehicle{
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


//export ile taxi sınıfını dışarıya açılır. Yani taxi.ts dosyanın dışında da kullanılabilir.