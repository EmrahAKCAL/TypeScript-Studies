/*
//Değişken tipi belirtip daha sonra farklı tipte değer atama(Error)
let number=5;
number='a'; //içerisine string ifade atıldığında hata verir
number=4;
number=1;
*/
//Değişken tipi belirtmeden farklı tipte değer atama
var number;
number = 5;
number = 'a';
number = false;
//Tip ataması
var a;
var b;
//tip belirtip değer atama
var c = 5;
var d = 'a';
var e = true;
var f = [1, 2, 3];
var g = [1, 2, 3];
var h = [1, 'a', true];
var t = ['a', 1, true]; //tuple
//Fonksiyon oluşturma
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["kap\u0131daodeme"] = 5] = "kap\u0131daodeme";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
;
var kredi = Payment.kredi; //0
var havale = Payment.havale; //1
var kapıdaodeme = Payment.kapıdaodeme; //5
var eft = Payment.eft; //3
