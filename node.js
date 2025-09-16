var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(`{"message": "Deb Kar"}`);
  res.end();
}).listen(8080);

console.log('Server running at http://localhost:8080/');

// console.log('%c Hello World', 'color: red;');