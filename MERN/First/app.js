const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World');
});

server.listen(3000,()=>{
    console.log('Server listening on port 3000');
});

// const https = require('https');
// https.get('https://jsonplaceholder.typicode.com/posts    /1',(res) => {
//     let data = '';
//     res.on('data',chunk=>data+=chunk);
//     res.on('end',()=> console.log(JSON.parse(data)));
// }).on('error',err=>console.error(err))

const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/albums/')
    .then(res=>console.log(res.data))
    .catch(err=>console.error(err));