<h1>TypeScript Modül Kullanımı</h1>
Bilindiği gibi modüller aracılığıyla farklı dosyalardan bilgi alınabilir veya gönderilebilir. 
Tüm kodlarımızı bir tane typescript dosyanın içerisinde yazabiliriz. Ancak uzun bir cod yapsı olduğunda kodlarımız karmaşık hale gelir ve anlaşılması zorlaşır. Bunun için modüllerle dosyamızı parçalara ayırıp daha güzel ve anlaşılır bir yapı oluşturabiliriz. 
<br><br><b><i>import {</b> implements sınıfı <b>} form '</b>./filename';</b> ile dosya çağrılır.<br>
Dışarıya açılacak dosya ise ise <b><i>export</i></b> edilir.<br><br>
Örneğin bir sınıfı dışarıya export etmek;<br>
<b><i>export class Taxi implements Vehicle{//...}</i></b> Burada Vehicle interface hatasını verir ve bunu vehicle.ts dosyasında bulunan Vehicle interface dosyaya import edilmelidir.<br>
<b><i>import { Vehicle } from './vehicle';</i></b>
