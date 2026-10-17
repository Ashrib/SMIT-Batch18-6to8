import express from 'express'
import User from '../Models/userModel.js';
import mongoose from 'mongoose';
import multer from 'multer';
import cloudinary from '../config/cloudinaryConfig.js';

const usersRoutes = express.Router();

const storage = multer.diskStorage();  //// server RAM for tempory hold
const upload = multer({ storage: storage });   /// middleware


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
usersRoutes.post('/profile-upload/:uid', upload.single('profile_image'), async (req, res) => {
    try {
        let { uid } = req.params;

        let fileToUpload = req.file;
        console.log(fileToUpload);

        //// uplaod to cloudinary
        let cloudinaryResponse = await cloudinary.uploader.upload(fileToUpload.path, {
            folder: 'batch18',
            public_id: `profile-${uid}`,
            overwrite: true,
            resource_type: 'image',
        })

        console.log(cloudinaryResponse.secure_url);
        console.log('cloudinary success');

        if (cloudinaryResponse.secure_url) {
            /// store url in db
            await User.findOneAndUpdate({ uid: uid }, {
                photoURL: cloudinaryResponse?.secure_url || null
            }).then(() => {
                return res.json({
                    code: 200,
                    message: 'profile successfully uplaoded!',
                })
            })
        }

        return res.json({
            code: 500,
            message: "can't in uploading profile!",
        })

    } catch (error) {
        console.log('error in cloudinary uplaod!')
        console.log(error)
        res.json({
            code: 500,
            message: 'error in uplaoding profile!',
            error: error,
        })
    }

})

//// delete profile-image
usersRoutes.delete('/profile-delete/:uid', async (req, res) => {
    try {
        let { uid } = req.params;

        /// get user with the uid (requested)
        let findUser = await User.findOne({ uid: uid });
        if (!findUser) {
            return res.status(404).json({
                message: 'cannot find user with this id!',
                data: null,
                code: 404
            });
        }

        if (!findUser.photoURL) {
            return res.status(402).json({
                message: 'this user doesnot have profile!',
                code: 402
            });
        }

        //// delete from cloudinary
        let cloudinaryResponse = await cloudinary.uploader.destroy(`batch18/profile-${uid}`,
            { invalidate: true },
        )

        if (cloudinaryResponse.result != 'ok' && cloudinaryResponse.result == 'not found') {
            return res.status(404).json({
                message: 'cloudinary not found, unable to delete the profile!',
                code: 404
            })
        }

        /// update photoURl in db
        await User.findOneAndUpdate({ uid: uid }, {
            photoURL: null
        }).then(() => {
            return res.json({
                code: 200,
                message: 'profile successfully deleted!',
            })
        })

        return res.json({
            code: 200,
            message: 'profile delete route!',
        })

    } catch (error) {
        console.log('error in cloudinary uplaod!')
        console.log(error)
        res.json({
            code: 500,
            message: 'error in uplaoding profile!',
            error: error,
        })
    }

})



export default usersRoutes;