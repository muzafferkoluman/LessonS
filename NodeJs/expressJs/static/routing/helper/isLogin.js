const isLogin = (req,res,next)=>{
    const isLogin=false;
    if (isLogin)
        next();
    else
        res.send("Lütfen giriş yapınız")
};

module.exports=isLogin;