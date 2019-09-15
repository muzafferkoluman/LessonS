const express = require('express');
const router=express.Router();

router.get('/signUp',(req,res)=>{
    res.send("signUp sayfası")
});

router.post('/signUp',(req,res)=>{
    res.send("signUp sayfası (POST Methodu)")
});

module.exports = router;