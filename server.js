const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Session store
app.use(session({
    secret: '', // <== Buraya terminalden oluşturduğunuz secret key gelecek.
    resave: false,
    saveUninitialized: true,
    store: new SQLiteStore({ db: 'sessions.db', dir: './data' })
}));

app.use(express.static(path.join(__dirname, 'public')));

let channels = {}; // { channelName: { passwordProtected: boolean, password: string, users: Set } }

io.on('connection', (socket) => {
    console.log('a user connected');
    
    // Send channel list to the client
    socket.emit('channel list', Object.keys(channels).map(name => ({ name })));

    // Handle creating channels
    socket.on('create channel', ({ channelName, passwordProtected, channelPassword }) => {
        channels[channelName] = {
            passwordProtected,
            password: passwordProtected ? channelPassword : null,
            users: new Set()
        };
        io.emit('channel list', Object.keys(channels).map(name => ({ name })));
        console.log(`Channel created: ${channelName}`);
    });

    // Handle joining channels
    socket.on('join channel', ({ channelName }) => {
        if (channels[channelName]) {
            channels[channelName].users.add(socket.id);
            socket.join(channelName);
            socket.emit('joined channel', channelName);
            console.log(`User ${socket.id} joined channel: ${channelName}`);
        }
    });

    // Handle sending messages
    socket.on('chat message', ({ message, channel }) => {
        if (channels[channel]) {
            io.to(channel).emit('chat message', { user: socket.id, message });
            console.log(`Message sent in channel ${channel}: ${message}`);
        }
    });

    // Handle disconnect
    socket.on('disconnect', () => {
        console.log('a user disconnected');
        // Remove user from all channels
        for (let channel in channels) {
            channels[channel].users.delete(socket.id);
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
