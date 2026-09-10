import express from 'express';

const app = express(); // server
const port = 8080;

// http://localhost:3000/

/// API
app.get('/', (req, res)=>{
    console.log("server get api hit")    
    console.log(`user ip: ${req.ip}`)    

    res.send("hello from nodejs server");
});


app.get('/users', (req, res)=>{

    res.send("getting all users");
});
/// api must always return response


app.listen(port, ()=>{
    console.log(`server is listening on port ${3000}`);
});
