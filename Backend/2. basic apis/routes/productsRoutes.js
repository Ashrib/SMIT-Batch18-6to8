import express from 'express'

const productsRoutes = express.Router();


productsRoutes.get('/',(req,res)=>{
    res.send("getting all products")
})


productsRoutes.get('/viewDetails',(req,res)=>{
    res.send("getting a product details")
});




export default productsRoutes
