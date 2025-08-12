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
    }else if(req.url.includes('/products/') && req.method === 'DELETE'){
        const id = req.url.split('/')[2];
        products = products.filter(product => product.id !== parseInt(id));
        res.end(JSON.stringify(products));
    }else if(req.url.includes('/products/') && req.method === 'PUT'){
        const id = req.url.split('/')[2];
        let completeData = '';
        req.on('data', (chunks)=>{
            console.log(chunks);
            console.log(chunks.toString());
            completeData += chunks.toString();
        })
        req.on('end', ()=>{
            console.log(completeData);
            products = products.map(product => product.id === parseInt(id) ? JSON.parse(completeData) : product);
            res.end(JSON.stringify(products));
        })
    }else if(req.url.includes('/products/') && req.method === 'PATCH'){
        const id = req.url.split('/')[2];
        let completeData = '';
        req.on('data', (chunks)=>{
            console.log(chunks);
            console.log(chunks.toString());
            completeData += chunks.toString();
        })
        req.on('end', ()=>{
            console.log(completeData);
            products = products.map(product => product.id === parseInt(id) ? {...product, ...JSON.parse(completeData)} : product);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(products));
        })
    }else if(req.url.includes('/products') && req.method === 'GET'){
        const id = req.url.split('/')[2];
        const product = products.find(product => product.id === parseInt(id));
        res.end(JSON.stringify(product));
    }
});

server.listen(5000, () => {
    console.log('Server running at http://localhost:5000/');
});