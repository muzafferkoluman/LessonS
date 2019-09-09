const express= require('express');
const app = express();

app.set('view engine','pug');


app.get('/',(req,res)=>{
    res.render('index',{name:'muzaffer',surname:'koluman'});
});

app.listen(3000);