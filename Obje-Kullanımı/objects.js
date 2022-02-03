var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("otob\u00FCs X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Bus;
}());
//class yapısı bize bir obje üretmek için gerekli olan yapıyı sunar
var taxi_1 = new Taxi(); //kopya oluşturuldu. normal nesne tanımlar gibi obje tanımlanılamaz.
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 5, y: 8 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
//taxi_2 objesi oluşturuldu ve Taxi kopyası oluşturuldu
var taxi_2 = new Taxi();
taxi_2.travelTo({ x: 3, y: 7 });
taxi_2.currentLocation = { x: 6, y: 5 };
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);
//Otobüs için obje oluşturma kopya oluşturma 
var bus_1 = new Bus();
bus_1.travelTo({ x: 3, y: 5 });
bus_1.currentLocation = { x: 1, y: 6 };
console.log(bus_1.currentLocation.x);
console.log(bus_1.currentLocation.y);
