const http = require("http");
const host = 'localhost';
const port = 8000;

var moment = require('moment'); // require
moment().format();

let currentTime = moment().format();

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("What time is it now? It's " + currentTime);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
