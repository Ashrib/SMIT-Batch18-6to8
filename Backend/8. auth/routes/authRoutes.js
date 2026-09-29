import express from 'express'
import User from '../Models/userModel.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import Joi from 'joi'

const authRoutes = express.Router();

const registerSchema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'), 'enforces at least one uppercase letter, one lowercase letter, one digit, one special character, and a minimum length of 8!'),
    username: Joi.string().min(3).max(15).message('username must be under 15 chars!'),
    age: Joi.number().positive().min(15).max(90),
})

const loginSchema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'), 'enforces at least one uppercase letter, one lowercase letter, one digit, one special character, and a minimum length of 8!'),
})



/// create user  ----- signup
authRoutes.post('/register', async (req, res) => {
    try {
        let { email, username, password, age } = req.body;
        console.log(req.body)
        if (!email || !username || !password || !age) {
            return res.status(400).json({
                message: 'required all fields to create user.',
                code: 400
            })
        }

        // validate schema
        const value = await registerSchema.validateAsync(req.body);
        console.log(value)

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
            message: (error?.details[0].message)? error?.details[0].message : 'error in creating user',
            data: null,
            code: 500
        })
    }
}
)



authRoutes.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: 'required all email and password to login user.',
                code: 400
            })
        }
        let value = await loginSchema.validateAsync(req.body)


        /// get user with the email (requested)
        let findUser = await User.findOne({ email: email });
        if (!findUser) {
            return res.status(400).json({
                message: 'user not exist with this email!',
                code: 400
            });
        }

        let checkPassword = await bcrypt.compare(password, findUser.password);
        if (!checkPassword) {
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
            message: (error?.details[0].message)? error?.details[0].message : 'error in login',
            data: null,
            code: 500
        })
    }
})



export default authRoutes;

