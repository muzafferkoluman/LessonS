const express = require('express');
const app = express();

app.set('view engine','pug');
app.use(express.static('public'));
app.use(express.static('other-public'));

/*
get, post, put, delete, all

? (zorunlu olmayan) - me(hm)?et
* (yerine herhangi ifade gelebilir)
+ (soldaki ifadenin aynısı olabilir)
*/

app.get('/users/:id/:getId?',(req,res)=>{
    res.send(req.params);
});

app.get('/iletisim',(req,res)=>{

});
app.post('/iletisim-post',(req,res)=>{

});
//tüm methotları kabul eder.
app.all('/iletisim-all',(req,res)=>{

});

app.listen(3000,()=>{
    console.log('çalıştı.')
});