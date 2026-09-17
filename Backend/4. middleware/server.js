import express from 'express'


const app = express();


let users = []

// application-level
app.use(express.json())  /// parses JSON on every API

// app.use('/users', middleware1)

// app.use((req,res, next)=>{

// })


let middleware1 = (req, res, next) => {
    console.log("middleware executed!")

    // res.json({
    //     message: 'response from middleware'
    // })
    next();

}

let middleware2 = (req, res, next) => {
    console.log("middleware 2 executed!")

    res.json({
        message: 'response from middleware'
    })

    next()
}

let userName = 'admin';
let pass = 'admin';

/// check authentication
let authCheck = (req, res, next) => {
    if (userName == 'admin1' && pass == 'admin') {
        next()
    }

    res.json({
        message: 'unauthorized user!',
    })
}


app.get("/users", authCheck, middleware1, middleware2, (req, res) => {

    /// get all users from database

    res.json({
        message: 'getting users',
        data: ['user1', 'user2s']
    })
})



app.get("/products", authCheck, (req, res) => {

    /// get all users from database

    res.json({
        message: 'getting products',
        data: ['product1', 'product2']
    })
})


app.get('/', (req, res) => {

    res.json({
        message: 'server is running'
    })

});


/// create user
app.post('/user', (req,res)=>{
    console.log(req.body);


    res.json({
        message: 'user created.'
    });
});



app.listen(3000, () => {
    console.log(`server is running on port ${3000}`)
})
