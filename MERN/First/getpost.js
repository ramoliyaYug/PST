const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello from get api' }));
    } else if (req.method === 'POST' && req.url === '/data') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const parsed = JSON.parse(body);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ received: parsed }));
        });
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
