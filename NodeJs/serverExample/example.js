const http = require('http');

const server = http.createServer((request, response) => {
    console.log('bir istekte bulunuldu.');
    console.log(request.url);
    console.log(request.headers);

    response.writeHead(200, {'content-type':'text/html; charset=utf-8'});
    response.write("merhaba dünya");
    response.end();
})

server.listen(3000);