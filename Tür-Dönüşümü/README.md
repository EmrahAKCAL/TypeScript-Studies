<h1>Tür Dönüşümü</h1>
String tipinde değişken üzerinde farklı metotlar kullanılabilir. Örneğin string ifadenin karakter sayısı, ilk karakteri veya son karakteri bulmak gibi metotları kullanabilriz.<br>
Bunun için değişken tipi belirtilmelidir veya bu değişken tipi dönüştürülmelidir. <br>
Örneğin değişken tipi belirterek<br>
<b><i>let message ='Hello World';<br>
  let count=message.length;</i></b><br><br>

Değişken tipi belirtmeden<br>
<b><i>let message;<br>
message= 'Hello world';<br>
  let counts=(< string>message).length;</b> //burada < string>message şeklinde yazılarak değişken tipi tanımlanılmıştır.<br><br>
  Veya<br>
  <b>let Length=(message as string).length;</i></b><br>
