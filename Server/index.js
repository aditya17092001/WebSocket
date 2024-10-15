import express from 'express';
import { WebSocketServer } from 'ws';
 
const app = express();
const port = 8080;

const server = app.listen(port, () => {
    console.log("Server is running....");
})

const wss = new WebSocketServer({ server }); // If we want to use different port from the server which is running on 8080 we can use port:{port_number} instead of server;

wss.on('connection', (stream) => { // We will get the data in the form of BufferedData we need to parse it to readable data. This is changed in the latest version of the websockets, in older versions of websockets we can able to read the data.
    stream.on('message', (data) => {
        console.log("Data from client: %s", data); // Simply, add the %s to parse it to string data.
        stream.send("Thanks");
    })
})


// You are done!!!
// Go the website https://hoppscotch.io/realtime/websocket
// paste ws://localhost:8080