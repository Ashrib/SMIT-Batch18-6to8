import express from 'express'

const userRoutes = express.Router();

let users = [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' },
    { id: 3, name: 'user3' },
    { id: 4, name: 'user4' },
]


// users
userRoutes.get('/', (req, res) => {
    console.log('get all users api hit');

    res.status(200).json({
        message: 'successfull get all users',
        data: users,
        code: 200,
    })
})

userRoutes.get('/:id', (req, res) => {
    let { id } = req.params;
    console.log(id);

    let findUser = users.find((user) => user.id == id);
    console.log(findUser);

    if (!findUser) {
        return res.status(404).json({
            message: 'no user found with this id',
            data: null,
            code: 404,
        })
    }


    res.status(200).json({
        message: 'successfull get a single user',
        data: findUser,
        code: 200,
    })
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

userRoutes.get('/getUser', (req, res) => {
    res.send('getting a single user with uid')
})




export default userRoutes;