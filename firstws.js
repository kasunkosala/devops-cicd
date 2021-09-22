const http = require('http');

const server = http.createServer((request,response)=>{
    response.end('Hello from Node JS \n');
});

server.listen(9000,()=>{
    console.log('Server is running');
});