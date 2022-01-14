import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
var connections = 0;

wss.on('connection', function connection(ws) {
    connections ++;
    console.log('%s:%s connected(%d)', ws._socket.remoteAddress, ws._socket.remotePort, connections);
    ws.on('message', function message(data) {
        if (data == 'Request Server Time') {
            startPushData(ws);
        }
    });

    ws.on('close', function close() {
        connections --;
        console.log('%s:%s disconnected(%d)', ws._socket.remoteAddress, ws._socket.remotePort, connections);
    });

});

function startPushData(ws) {
    setInterval(()=> {
        var now = Date.now();
        ws.send(now);
    }, 1000);
}
