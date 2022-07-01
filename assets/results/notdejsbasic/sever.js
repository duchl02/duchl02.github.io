const http = require('http');

const server = http.createServer((req,res) => { 
    console.log('run...')
    res.header('Content-Type', 'text-html');
    res.write("<h1>First Sever</h1>")
})

server.listen(3000,'localhost',()=>{
    console.log('not js run on 3000')
})