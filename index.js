const http = require('http');
const app = require ('./app')

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1'

const server = http.createServer(app);

server.listen(PORT, HOST, () => {
    console.log (`Server is listening on ${PORT} port ${HOST} host`)
});

