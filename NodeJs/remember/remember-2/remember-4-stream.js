const fs = require('fs');
const file = 'video.mp4';
const http = require('http');
const server = http.createServer();

server.on('request',(req,res)=>{
    fs.readFile('new.mp4',(err,data)=>{
        if(err)
            throw err;
        res.end(data)
    })
});
server.listen(3000);