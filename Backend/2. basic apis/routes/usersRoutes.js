import express from 'express'

const userRoutes = express.Router();


// users
userRoutes.get('/', (req, res) => {
    console.log('get all users api hit');

    res.send("getting all users")
})

userRoutes.get('/details', (req, res) => {
    console.log('get all users api hit');

    res.send("getting all users")
})
userRoutes.post('/', (req, res) => {
    console.log('user post api hit');

    res.send("user created");
})

userRoutes.put('/', (req, res) => {
    console.log('user put api hit');

    res.send("user edited")
})

userRoutes.delete('/', (req, res) => {
    console.log('user delete api hit');

    res.send("user deleted");
});

userRoutes.get('/getUser',(req,res)=>{
    res.send('getting a single user with uid')
})




export default userRoutes;