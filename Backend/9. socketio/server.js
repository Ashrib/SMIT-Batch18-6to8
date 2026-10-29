import express from 'express'
// import mongoose from 'mongoose';
import dns from 'dns';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import cors from 'cors';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const app = express()
const port = 4000;
const server = createServer(app);


const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});  /// socket.io server instance

// app.use('/users', usersRoutes);
const corsOptions = {
    origin: '*', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};


app.use(cors(corsOptions)); // Enable CORS for all routes


const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});


io.on('connection', (socket) => {
    console.log('a user connected');


    // socket.emit('hello', 'hello from server');  ////  event

    socket.broadcast.emit('hi', 'a new user joined');  /// broadcasting the event to all connected clients except the sender



    socket.on('room1 join', () => {
        socket.join('room1');
        console.log('user joined room1');
    });

    socket.on('chat message', (msg) => {  /// listening to the event from client
        console.log('message: ' + msg);
        ///// store the message in database
      
        io.emit('chat message', msg);  // triggering the event to all connected clients
    }
    )


    socket.on('room 1 message', (msg) => {

        io.to('room1').emit('room 1 message', msg); // Emit the message to all clients in room1

    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

})


// mongoose.connect('')
// .then(()=>{
//     console.log('mongodb connected');
// }).catch((error)=>{
//     console.log("error in mongodb connection")
//     console.error(error)
// })




server.listen(port, () => {
    console.log(`server is running on port ${port}`)
});