const http= require('http');
const fs= require('fs');

const server= http.createServer((request,response)=>{
    fs.readFile("index.html",(err,data)=>{
        if(err)
            throw err;
        response.end(data);
    })
});

server.listen(3001);