var http = require('http');
const PORT = process.env.PORT || 5000

var server = http.createServer(function(request, response) {
    response.writeHead(200);
    response.end("hell world");
});

server.listen(PORT);