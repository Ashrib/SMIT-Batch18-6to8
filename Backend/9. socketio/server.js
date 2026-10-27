import express from 'express'
// import mongoose from 'mongoose';
import dns from 'dns';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import cors from 'cors';

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

app.get('/', (req, res) => {
    res.send('hello from express server')
})



io.on('connection', (socket) => {
    console.log('a user connected');

    socket.emit('hello', 'hello from server');

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