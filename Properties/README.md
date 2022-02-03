<h1>TypeScript Properties(Özellikler) </h1>
Class yapısının içerisinde bulunan ve private ile kurunulan constructor elemanlarına dışarıda kontrollü bir şekilde değer atamak için properties kullanılır. Yani değişkenlere kontrollü bir şekilde veri atılır.<br>
Bunun için get ve set metotları kullanılabilir. get metodu ile private olan değişkeni kontrollü olarak dışarıya açılır ve set metodu ile de dışardan gelecek değerin kontrolü gerçekleştirilebilir. Bu çalışmada dışardan gelecek x ve y parametrelerin kontrolü sağlanmıştır. Dışardan negatif bir değer geldiğinde <b><i>throw new Error('...'); </i></b> ile bir hata mesajı fırlaatılmıştır.<br>
<br><br>
<b><i>NOT:</i></b> Bu örnek javascript formatına dönüştürüğldüğünde <b><i>Accessors are only available when targeting ECMAScript 5 and higher</i></b> hatası verilebilir.
Yani erişimciler yalnızca ES5 ve sonraki sürümleri hedeflendiğinde kullanılabiliyor.
 Bunun için terminal kısmında <b><i>tsc -target es5 filename.ts</i></b> komutu çalıştırdığınızda es5'i hedef olarak göstermiş olursunuz ve başarılı bir şekilde TypeScript dosyanız JavaScript formatına dönüştürülür. 
 Daha sonra zaten bilindiği gibi node ile bu javascript dosyanızı tarayıcıya ihtiyaç duyulmadan terminal kısmında derleyebilirsiniz.

