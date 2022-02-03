//belli bir kalıba sıkı sıkıya bağlı olması, implements: interface içeirisndeki özellikleri tanımlanmış hale getirilir ve ek özellikler ekleyebiliriz.
var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        //burası bir metottur
        console.log("taksi X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        //bir metot
        console.log("otob\u00FCs X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Bus;
}());
//class yapısı bize bir obje üretmek için gerekli olan yapıyı sunar
