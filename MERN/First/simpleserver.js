const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method === 'GET'){
        res.write('You sent get req')
    }else if(req.method == 'POST'){
        res.write('You sent post req')
    }else if (req.method == 'PUT'){
        res.write('You sent put req')
    }else if (req.method == 'DELETE'){
        res.write('You sent delete req')
    }
    res.end();
});

server.listen(3000,()=>{
    console.log('Server listening on port 3000');
})