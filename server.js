const http = require('http');
const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/dist'));

module.exports = app;
app.on('start', function () {
    console.log('Application ready to serve requests.');
});

/*
 * Create and start HTTP server.
 *
 * Note : If it's the first time setting up ensure you port forward using your internal private ip
 * Also goes for https, just route from 443 to 8000
 * sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j DNAT --to serverIP:3000
 * sudo iptables -A FORWARD -p tcp -d serverIP --dport 3000 -j ACCEPT
 */

const server = http.createServer(app);

server.listen(8080);
server.on('listening', function () {
    console.log('Frontline Processing Payment Portal Listening on https://127.0.0.1:%d', this.address().port);
});

