import express from 'express'
import mongoose from 'mongoose';
import dns from 'dns';
import authRoutes from './routes/authRoutes.js';
import "dotenv/config"
import productsRoutes from './routes/productRoutes.js';
import cors from 'cors';

dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express()
const port = 3000;


app.use(express.json())

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    // allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

app.use(cors(corsOptions)); // Enable CORS for all routes

app.use('/auth', authRoutes);
app.use('/products', productsRoutes);



app.get('/', (req, res) => {
    console.log('Hello World!')
    res.send('Hello World!')
});

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('mongodb connected');
}).catch((error)=>{
    console.log("error in mongodb connection")
    console.error(error)
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
});