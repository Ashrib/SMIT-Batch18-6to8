import express from 'express'
import User from '../Models/userModel.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const authRoutes = express.Router();


/// create user  ----- signup
authRoutes.post('/register', async (req, res) => {
    try {
        let { email, username, password, age } = req.body;
        if (!email || !username || !password || !age) {
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

        /// encrption of password
        let saltRound = 13;
        let hashPassword = await bcrypt.hash(password, saltRound);
        console.log(hashPassword)

        /// create new user
        let newUser = new User({
            _id: new mongoose.Types.ObjectId(), ...req.body, password: hashPassword
        }); // user obj
        await newUser.save() /// save user in db 

        let { password: userPass, ...userData } = req.body;
        res.json({
            message: 'created new user.',
            code: 200,
            data: userData,
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


authRoutes.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body;
        if (!email || !password ) {
            return res.status(400).json({
                message: 'required all email and password to login user.',
                code: 400
            })
        }

        /// get user with the email (requested)
        let findUser = await User.findOne({ email: email });
        if (!findUser) {
            return res.status(400).json({
                message: 'user not exist with this email!',
                code: 400
            });
        }

        let checkPassword = await bcrypt.compare(password, findUser.password);
        if(!checkPassword){
             return res.status(400).json({
                message: 'invalid password!',
                code: 400
            })
        }

        res.json({
            message: 'successfull login.',
            code: 200,
        })
        
    } catch (error) {
        console.error('error in login ')
        console.error(error);

        res.status(500).json({
            message: 'error in login',
            data: null,
            code: 500
        })
    }
})



export default authRoutes;

