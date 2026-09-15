import express from 'express'
import path from 'path'

const app = express();
const port = 3000;


app.use('/static',express.static('public'));

// app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>{
    res.send('server nodejs')
})


app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})