const {port} = require('../server.config');
const http = require('http');
const server = http.createServer();

const processRequest = require('./routes');

server.on('request', function (request, response) {
    processRequest(request, response);
    response.write('hello');
    response.end();
});

server.listen(port, function () {});