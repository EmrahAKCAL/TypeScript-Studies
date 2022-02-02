/*
//Değişken tipi belirtip daha sonra farklı tipte değer atama(Error)
let number=5;
number='a'; //içerisine string ifade atıldığında hata verir
number=4;
number=1;
*/


//Değişken tipi belirtmeden farklı tipte değer atama
let number;
number=5;
number='a';
number=false; 

//Tip ataması
let a:number;
let b:boolean;

//tip belirtip değer atama

let c:number=5;
let d:string='a';
let e:boolean=true;
let f: number[]=[1, 2, 3];
let g: Array<number>=[1, 2, 3];
let h: any[]=[1, 'a', true];
let t:[string, number, boolean]=['a', 1, true] //tuple

//Fonksiyon oluşturma
const krediPayment =0;
const havalePayment=1;
const eftPayment= 2;

enum Payment {kredi= 0, havale= 1, kapıdaodeme= 5, eft= 3};

let kredi= Payment.kredi; //0
let havale= Payment.havale; //1
let kapıdaodeme= Payment.kapıdaodeme; //5
let eft= Payment.eft; //3



