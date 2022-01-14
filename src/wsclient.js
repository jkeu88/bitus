import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', function open() {
    ws.send('Request Server Time');
});

ws.on('message', dealWithData);

ws.on('close', function close() {
    console.log('disconnected');
})

function dealWithData(data) {
    // TODO add function when receive data
    var serverTime = new Date(parseInt(data)).toISOString();
    console.log('server time: %s', serverTime);
}
