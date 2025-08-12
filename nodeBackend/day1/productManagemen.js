/*
design the simple product management system
design crud apis for the product management system
*/

const http = require('http');
var products = [
    {"id": 1, "name": "Product 1", "price": 100}, 
    {"id": 2, "name": "Product 2", "price": 200}
];
const server = http.createServer((req,res)=>{
    if(req.url === '/products' && req.method === 'GET'){
        res.end(JSON.stringify(products));
    }else if(req.url === '/products' && req.method === 'POST'){
        let completeData = '';
        req.on('data', (chunks)=>{
            console.log(chunks);
            console.log(chunks.toString());
            completeData += chunks.toString();
        })
        req.on('end', ()=>{
            console.log(completeData);
            products.push(JSON.parse(completeData));
            res.end(JSON.stringify(products));
        })
    }
});

server.listen(5000, () => {
    console.log('Server running at http://localhost:5000/');
});