var http = require('http');
var server = http.createServer(function (request, response) {
	response.writeHead(200, {
  		'Content-Type': 'text/plain'
	});
	response.write('Hello World\nApp (j-test) is running..');
	response.end();
});

server.listen(8000);

console.log('Listening on http://127.0.0.1:8000');