import express from 'express'
import User from '../Models/userModel.js';

const usersRoutes = express.Router();

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
)


export default usersRoutes;

