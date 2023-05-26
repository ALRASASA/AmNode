var http = require('http');
http.createServer((req,res)=>{

    res.writeHead(200, {'content-type': 'text/plain'})
            res.end('HELLO WORLD')
            console.log('hello world started')
}).listen(8080);

console.log('Hello world listening in port 8080';
