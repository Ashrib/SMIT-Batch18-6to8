import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../utilis/firebaseConfig.js'
import { addDoc, collection } from 'firebase/firestore';

const Register = () => {

    const registerSchema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(6, 'password must be atleast 6 charaters!'),
        gender: yup.string().required(),
        phone: yup.string().required().length(11, "phone must be of 11 digits"),
        // phone: yup.number().required().test('len', 'Must be exactly 11 digits', val => val && String(val).length === 11),
    })

    let {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(registerSchema),
        // mode: 'onBlur'
    })

    let addUserInDb = async (userData) => {
        try {
            console.log(userData)
            let docRef = addDoc(collection(db, "users"), userData)
            console.log("successfully data added in db with id =>", docRef.id)

        } catch (error) {
            console.error(error)
        }
    }


    let createNewUser = async (userData) => {
        try {
            let { email, password, phone, gender } = userData
            await createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log("created user =>", user);
                    /// add user in db
                    await addUserInDb({
                        email: email,
                        gender: gender,
                        phone: parseInt(phone),  /// string -> nmbr  
                        uid: user?.uid,
                    })

                    return user
                })
        } catch (error) {
            console.error(error)
        }
    }



    let handleRegisterForm = async (data) => {
        console.log(data)
        let newUser = await createNewUser(data)
        console.log("new user create and added in db => ", newUser)
    }

    console.log("errors =>", errors)

    return (
        <div className='w-full flex flex-col justify-center items-center gap-2'>
            <h2>Register</h2>

            <form className='flex flex-col gap-2 items-center'

                onSubmit={handleSubmit(handleRegisterForm)}
            >


                <div>
                    <input className='p-2 outline-2 '
                        {...register('email')}
                        type="text" placeholder='Enter your email' />
                        {
                            (errors?.email) && <div className="text-xs text-red-800 p-2 bg-red-200">
                                <span>{errors?.email.message}</span>
                            </div>
                        }
                </div>


                <div>
                    <input className='p-2 outline-2 '
                        {...register('password')}
                        type="text" placeholder='Enter your password' />
                        {
                            (errors?.password) && <div className="text-xs text-red-800 p-2 bg-red-200">
                                <span>{errors?.password.message}</span>
                            </div>
                        }
                </div>


                <div>
                    <input className='p-2 outline-2 '
                        {...register('phone')}
                        type="number" placeholder='Enter your phone' />
                        {
                            (errors?.phone) && <div className="text-xs text-red-800 p-2 bg-red-200">
                                <span>{errors?.phone.message}</span>
                            </div>
                        }
                </div>




                <div className='flex gap-2'>
                    Gender:
                    <div>
                        <input {...register("gender")} defaultChecked
                         type="radio" value={'male'} name='gender' id='male' />
                        <label htmlFor="male">Male</label>

                    </div>

                    <div>
                        <input {...register("gender")}
                         type="radio" value={'female'} name='gender' id='female' />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>

                <div>
                    <input className='p-2 bg-green-500 '
                        type="submit" />
                </div>
            </form>


        </div>
    )
}

export default Register