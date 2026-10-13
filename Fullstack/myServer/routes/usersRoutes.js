import express from 'express'
import User from '../Models/userModel.js';
import mongoose from 'mongoose';
import multer from 'multer';

const usersRoutes = express.Router();

const storage = multer.diskStorage();  //// RAM for tempory hold
const upload = multer({ storage: storage });   



usersRoutes.get('/', async (req, res) => {   ///get all users
    try {
        let usersData = await User.find(); // get users from db

        return res.status(200).json({
            message: 'success in fetching users',
            data: usersData,
            code: 200
        });
    } catch (error) {
        console.error('error in fetching users')
        console.error(error);

        res.status(500).json({
            message: 'error in fetching users',
            data: null,
            code: 500
        })
    }
}
);

/// get a single user
usersRoutes.get('/:id', async (req, res) => {
    try {
        let { id } = req.params;

        let findUserExist = await User.findById(id);
        console.log(findUserExist)
        if (!findUserExist) {
            return res.status(404).json({
                message: 'cannot find user with this id!',
                data: null,
                code: 404
            })
        }

        res.status(200).json({
            message: 'successfully find a user with this id',
            data: findUserExist,
            code: 200
        })

    } catch (error) {
        console.error('error in finding user')
        console.error(error);

        res.status(500).json({
            message: 'error in finding user',
            data: null,
            code: 500
        })

    }


})


/// create user
usersRoutes.post('/newUser', async (req, res) => {
    try {
        console.log(req.body);

        let { email, username } = req.body;
        if (!email || !username) {
            return res.status(400).json({
                message: 'required all fields to create user.',
                code: 400
            })
        }

        /// get user with the email (requested)
        let findUser = await User.findOne({ email: email });
        if (findUser) {
            return res.status(400).json({
                message: 'user already exist with this email!',
                code: 400
            })
        }

        /// create new user
        let newUser = new User({ _id: new mongoose.Types.ObjectId(), ...req.body }); // user obj
        await newUser.save() /// save user in db 

        res.json({
            message: 'created new user.',
            code: 200,
            data: newUser
        })


    } catch (error) {
        console.error('error in creating user')
        console.error(error);

        res.status(500).json({
            message: 'error in creating user',
            data: null,
            code: 500
        })
    }
}




)


/// delete a user
usersRoutes.delete('/:id', async (req, res) => {
    try {
        let { id } = req.params;

        let findUserExist = await User.findById(id);
        console.log(findUserExist)
        if (!findUserExist) {
            return res.status(404).json({
                message: 'cannot find user with this id!',
                data: null,
                code: 404
            })
        }

        await User.findByIdAndDelete(id);

        res.status(200).json({
            message: `successfully deleted a user with id: ${id}`,
            code: 200
        })

    } catch (error) {
        console.error('error in deleting user')
        console.error(error);

        res.status(500).json({
            message: 'error in deleting user',
            data: null,
            code: 500
        })
    }

})


///update a user
usersRoutes.put('/:id', async (req, res) => {
    try {
        let { id } = req.params;
        
        let findUserExist = await User.findById(id);
        console.log(findUserExist)
        if (!findUserExist) {
            return res.status(404).json({
                message: 'cannot find user with this id!',
                data: null,
                code: 404
            })
        }

        await User.findByIdAndUpdate(id, {
            ...req.body
        });

        res.status(200).json({
            message: `successfully updated a user with id: ${id}`,
            code: 200
        })

    } catch (error) {
        console.error('error in updating user')
        console.error(error);

        res.status(500).json({
            message: 'error in updating user',
            data: null,
            code: 500
        })
    }

})



//// upload profile-image
usersRoutes.post('/profile-upload/:uid', upload.single('profile_image'), (req,res)=>{
    let {uid} = req.params

    console.log(req.file)


    res.send('profile upload api working')
})




export default usersRoutes;

