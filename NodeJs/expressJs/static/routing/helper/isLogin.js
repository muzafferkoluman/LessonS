const isLogin = (req,res,next)=>{
    const isLogin=true;
    if (isLogin)
        next();
    else
        res.send("Lütfen giriş yapınız")
};

module.exports=isLogin;