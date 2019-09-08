const express= require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Merhaba express');
});

app.listen(3000);