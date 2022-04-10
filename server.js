const express = require('express');
const app = express();

const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const ACTIONS = require('./src/Actions');

const server = http.createServer(app);
const io = new Server(server);


io.on('connection', (socket) => {
    console.log('socket connected', socket.id);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
