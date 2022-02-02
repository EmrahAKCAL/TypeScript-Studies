<h1>TypeScript Fonksiyonlar</h1>
Fonsiyon değişkenlerin tipi belirtilerek içerisine gönderilecek parametrelerin farklı tipte değer ataması yapılacağı zaman hatayı görebiliriz.<br>
Fonsiyon ise string tipinde bir değer döndürmesini sağlayabiliriz.<br>
<b><i>function getAverage(a:number, b:number, c?:number):string{</b> //Burada fonksiyona gelecek değerlerin tipi belirtilmiştir ve c değişkenin önüne ? karakteri eklenerek bu değişkene değer ataması isteğe beğlı hale getirilmiştir. Yani c değişkenin içerisine değer atamayabiliriz.<br>
   <b> let total= a+b;</b> <br>
   <b> let count=2;</b> <br>
   <b> if(typeof c!=='undefined'){ </b>//Eğer c değişken tipi boş değilse <br>
      <b>  total+=c;</b> // total değerine c yi ekler <br>
      <b>  count++; </b>//count değerini 1 artırır <br>
   <b> } <br>
    const result=total/count; <br>
    return 'result: '+result; <br>
} <br>
getAverage(10, 20, 30);</b> //En fazla 3 tane değer ataması yapılabilir. <br>
<b>getAverage(10, 20);</b> //c değişkenine değer ataması yapamayabiliriz.</i> <br><br><br>
  <b>Veya fonsiyona kaç parametre gönderileceği belli değilse<br><i>
function getAverage(...a:number[]):string{ <br>
    let total=0; <br>
    let count=0; <br>
    for(let i=0;  i<a.length; i++){ <br>
        total+=a[i]; <br>
        count++; <br>
    } <br>
    const result=total/count; <br>
    return 'result: '+result; <br>
} <br>
  GetAverage(10, 20, 30, 40, 50); </b> Şeklinde fonksiyon içerisinde number tipinde bir dizi oluşturulabilir ve döngü ile bu işlemi gerçekleştirilebiliriz.</i><br>
