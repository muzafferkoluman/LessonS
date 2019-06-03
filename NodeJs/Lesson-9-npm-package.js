const  slugify = require('slugify');

const text = "Fenerbahçe üçüncü maçına çıkıyor"
const slug = slugify(text,"+");

console.log(slug);

//npm root -g global olan modullerin pwd'sini gosterir
//npm list -g tüm global olan modullerin listesini bagımlılıklarıyla gosterir
//npm list -g --depth=0 bagımlılıksız gosterir.