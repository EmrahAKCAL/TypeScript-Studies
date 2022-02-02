//fonsiyon içerisine gönderilecek parametrelerin tipi belirtilerek farklı tipte değer ataması yapılacağı zaman hatayı göstersin. Fonsiyon ise string tipinde bir değer verecektir.
//c parametresine soru işareti(?) ekleyerek bu değişkene değer ataması isteğe bağlı hale gelir.
function getAverage(a:number, b:number, c?:number):string{
    let total= a+b;
    let count=2;
    if(typeof c!=='undefined'){ //Eğer c değişkeni boş değilse
        total+=c; // total değerine c yi ekle
        count++; //count değerini 1 artır
    }
    const result=total/count;
    return 'result: '+result;
}
getAverage(10, 20, 30); //En fazla 3 tane değer ataması yapılabilir.
getAverage(10, 20); //c değişkenine değer ataması yapamayabiliriz.



//Kaç parametre gönderileceği belli değilse
function GetAverage(...a:number[]):string{
    let total=0;
    let count=0;
    for(let i=0;  i<a.length; i++){
        total+=a[i];
        count++;
    }
    const result=total/count;
    return 'result: '+result;
}
GetAverage(10, 20, 30, 40, 50); //İstenilen kadar değer ataması yapılabilir.
GetAverage(10);

//Farklı yöntemde yazma(arrow function)
//void herhangi bir değer döndürmeme 

/*
const getaverage= ():void=>{
    let total=0;
    let count=0;
    for(let i=0;  i<a.length; i++){
        total+=a[i];
        count++;
    }
    const result=total/count;
}
*/