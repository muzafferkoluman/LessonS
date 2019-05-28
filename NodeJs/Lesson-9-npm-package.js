const  slugify = require('slugify');

const text = "Fenerbahçe üçüncü maçına çıkıyor"
const slug = slugify(text,"+");

console.log(slug)