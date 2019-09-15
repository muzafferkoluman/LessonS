const express = require('express');
const app = express();

const user = require('./routes/signin');
const profile = require('./routes/signup');

//helper
const isLogin = require('./helper/isLogin');

app.use(isLogin);

app.use('/user',user);
app.use('/profile',profile);




app.listen(3000);