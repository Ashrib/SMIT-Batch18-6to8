import express from 'express'
import mongoose from 'mongoose';
import dns from 'dns';
import usersRoutes from './routes/usersRoutes.js';

dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express()
const port = 3000;

app.use('/users', usersRoutes);

mongoose.connect('')
.then(()=>{
    console.log('mongodb connected');
}).catch((error)=>{
    console.log("error in mongodb connection")
    console.error(error)
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
});