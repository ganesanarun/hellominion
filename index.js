var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200);
    response.end("hell world");
});

server.listen(8000);