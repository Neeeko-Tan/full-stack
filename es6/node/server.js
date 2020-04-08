const http = require('http');
const fs = require('fs');
const html = fs.readFileSync('./home.html')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<h1>hello</h1>');
        res.end();
    }
    if (req.url === '/home') {
        res.write(html);
        res.end();
    }
})

server.listen(3000);