const express = require('express');
const app = express();

const signIn = require('./routes/signin');
const signUp = require('./routes/signup');

app.use('/user',signIn);
app.use('/kullanici',signUp);


app.listen(3000);