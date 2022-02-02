<h1>TypeScript Değişken Tanımlama</h1>
<ul>
<li>TypeScript'e bir değişken tanımlanırken ve tipi de belirtildiğinde sonradan bu değişkene farklı tipte değer ataması yapılırsa hata verir.<br>
<b><i>let number=5;<br>
  number='a'; </i></b>//içerisine string ifade atıldığında hata verir<br><br><b><i>NOT:</b> Burada TypeScript değişken hatası verir. Çünkü number tipi şeklinde beliritilen değişkene sonradan string bir ifade ataması yapılıyor. Ancak JavaScript için bu bir hata değildir. Çünkü JavaScript'e değişken tipi en son belirtilen tipi kabul eder.<br></i></li>
  <li>Değişken tipi belirtmeden farklı tipte değer atayabiliriz<br>
<b><i>let number;<br>
  number=5;</i></b> //number tipi<br>
 <b><i> number='a'; </i></b>//string tipi<br>
 <b><i> number=false;</i></b> //boolean tipi  </li>
  <li> Bir Değişkene tip ataması yapılabilir.<br>
<b><i>let a:number;<br>
  let b:boolean;</i></b></li>
  <li>Değişken tipi belirtip değer ataması yapılabilir.<br>
<b><i>let c:number=5;<br>
let d:string='a';<br>
let e:boolean=true;<br>
let f: number[]=[1, 2, 3];<br>
let g: Array<number>=[1, 2, 3];<br>
  let h: any[]=[1, 'a', true];</b> //Değişken tipi içerisine atanılan değerlere göre bildirilir<br>
<b>let t:[string, number, boolean]=['a', 1, true] </i></b>//tuple</li>
  </ul>
  <h3>TypeScript Enums Kullanımı</h3>
  Numaralandırmalar, adlandırılmış sabitler kümesi olarak sayılar veya dizeler olabilen ilgili değerler koleksiyonunu tanımlamamıza veya bildirmemize olanak tanır. 
  TypeScript'te bulunan bazı türlerin aksine, numaralandırmalar önceden işlenir ve derleme zamanında veya çalışma zamanında test edilmez.<br>
  Bu çalışmada basit bir enum sözdizimi kullanılmıştır<br>
  TypeScript
  
  
![type](https://user-images.githubusercontent.com/48285856/152150553-15f31c7b-4d2b-4676-94b3-768704bc1072.png)
  
  JavaScript
  
  ![js](https://user-images.githubusercontent.com/48285856/152150223-3d1fc4e8-c3ae-4312-b74f-77fbb131599d.png)
  
  
