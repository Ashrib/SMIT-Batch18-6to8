import express from 'express'
import mongoose from 'mongoose';
import dns from 'dns';
import authRoutes from './routes/authRoutes.js';
import "dotenv/config"
import productsRoutes from './routes/productRoutes.js';
import cors from 'cors';
import usersRoutes from './routes/usersRoutes.js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Groq from "groq-sdk";

dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express()
const port = 3000;


app.use(express.json());  /// json body parsing

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    // allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

app.use(cors(corsOptions)); // Enable CORS for all routes

app.use('/auth', authRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);


const gemini_api_key = process.env.API_KEY;
const googleAI = new GoogleGenerativeAI(gemini_api_key);


const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// It automatically pulls the key from process.env.GEMINI_API_KEY

app.post('/chat', async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // // Call the Gemini API using the recommended flash model
        // const geminiModel = googleAI.getGenerativeModel({
        //     model: 'gemini-3.1-pro-preview',
        // });

        // let response = await geminiModel.generateContent(prompt);

        let response = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant.",
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
            model: "openai/gpt-oss-20b",
        });

        console.log(response.choices[0].message)

        // Send the generated text back to the client
        res.json({ response: response.text });
    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ error: 'Failed to generate content' });
    }
});


app.get('/', (req, res) => {
    console.log('Hello World!')
    res.send('Hello World!')
});

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('mongodb connected');
    }).catch((error) => {
        console.log("error in mongodb connection")
        console.error(error)
    })

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});