const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    const queryData = url.parse(req.url, true).query;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (queryData.nimi) {
        res.end(`Tere, ${queryData.nimi}!`);
        return
    }
    res.end('Tere maailm!')
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
