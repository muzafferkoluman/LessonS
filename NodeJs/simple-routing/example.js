const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type':'text/html; charset=utf-8'});

    //fs.readFile('index.html',(err,data)=>{
      //  if (err)
        //    throw err;

        //response.end(data)
    //})

    if(request.method==="GET"){
        if(request.url==='/'){
            response.write('Anasayfadasınız')
        }
        else if(request.url==='/iletisim'){
            response.write('iletisim sayfasındasınız')
        }
        else{
            response.write('ulaaaa neredesin')
        }
    }

})

server.listen(3001);