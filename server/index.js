const http = require('http');
const fs = require('fs');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile(__dirname + '/../client/src/index.html', 'utf8', (err, html) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
    });
  
  } else if (req.method === 'GET' && req.url.match('\.css$')) {
    const readStream = fs.createReadStream(__dirname + '/../client/src/styles.css', 'utf-8')
    res.writeHead(200, {'Content-Type': 'text/css'})
    readStream.pipe(res)
  
  } else if (req.method === 'GET' && req.url === '/eventHandler.js') {
    fs.readFile(__dirname + '/../client/src/eventHandler.js', 'utf8', (err, content) => {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.end(content);
    });

  } else if (req.method === 'GET' && url.parse(req.url).pathname === '/success') {
      fs.readFile(__dirname + '/../client/src/success.html', 'utf8', (err, html) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
      });
  
  } else {
    res.writeHead(404, {"Content-Type": "text/html"});
    res.end("No Page Found");
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});