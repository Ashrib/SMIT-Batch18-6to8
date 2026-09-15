import express from 'express'
import userRoutes from './routes/usersRoutes.js';
import productsRoutes from './routes/productsRoutes.js';

const app = express();
const port = 3000;

// API routes
app.use('/users', userRoutes);
app.use('/products', productsRoutes);


app.get('/', (req, res) => {
    res.send('main path');
});



/// 404 

// app.use((req, res) => {
//     res.send('404 not found');
// });


app.all(/.*/, (req, res) => {
    res.send('404 not found');
});


app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})