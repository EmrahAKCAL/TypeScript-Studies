<h1>TypeScript Değişkenlere Erişim</h1>
Diğer programlama dilleri gibi TypeScript de sınıf düzeyinde erişim değiştiricileri destekler. 
TypeScript üç erişim değiştiriciyi destekler - genel, özel ve korumalı.
<ul>
  <li><b><i>Genel(Public) </i></b>Varsayılan olarak, TypeScript sınıfının üyeleri (özellikler ve yöntemler) geneldir - bu nedenle üyelerin önüne public anahtar kelime eklemeniz gerekmez. Herkese açık üyelere kısıtlama olmaksızın her yerden erişilebilir </li>
   <li><b><i>Özel(Private)</i></b> Özel bir üyeye, içerdiği sınıfın dışında erişilemez. Özel üyelere yalnızca sınıf içinde erişilebilir. Yani bir kuruma sağlamaktadır. Üretme aşamasında yanlışlıkla değer atmamızın önüne geçer.</li>
   <li><b><i>Korumalı(Protected) </i></b>  Korumalı bir üyeye, içerdiği sınıfın dışında erişilemez. Korumalı üyelere yalnızca sınıf içinde ve onun alt/alt sınıfının örneği tarafından erişilebilir. </li>
</ul>

Derlenmiş JavaScript kodunda, üyeler üzerinde bu tür kısıtlamalar olmayacaktır.
