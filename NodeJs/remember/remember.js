const http= require('http');
const test="dışardan gelen";
const server = http.createServer((request,response)=>{
    console.log(request.url);
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.write("<b>Merhabalar</b> AQ </br> Muzaffer KOLUMAN " + test);
    response.end();
});

server.listen(3000);