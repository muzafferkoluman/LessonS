const express = require('express');
const router=express.Router();

router.get('/signIn',(req,res)=>{
    res.send("signin sayfası")
});

router.post('/signIn',(req,res)=>{
    res.send("signIn sayfası (POST Methodu)")
});

module.exports = router;