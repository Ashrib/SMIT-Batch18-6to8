import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"


const Login = () => {

    const loginSchema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "password must have alphanumeric, special symbol and atleast 8 length"),
    })


    let {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(loginSchema)
    });


    let handleLoginSubmit = (data) => {
        console.log("submit data => ", data);
    }

    console.log("errors => ", errors)


    return (
        <div className='flex flex-col items-center mt-4'>
            <h1>Login</h1>

            <form
                onSubmit={handleSubmit(handleLoginSubmit)}
                className='flex flex-col items-center justify-center gap-3'>

                <div>
                    <input {...register("email")}
                        className='outline-1 outline-black-700 p-2'
                        type="text" placeholder='enter email' />
                    {
                        errors?.email && <div className='flex justify-center bg-red-200 p-3'>
                            <span className='text-xs text-red-500'>{errors?.email.message}</span>
                        </div>
                    }
                </div>

                <div>
                    <input {...register('password')}
                        className='outline-1 outline-black-700 p-2'
                        type="text" placeholder='enter password' />
                    {
                        errors?.password && <div className='flex justify-center bg-red-200 p-3'>
                            <span className='text-xs text-red-500'>{errors?.password?.message}</span>
                        </div>
                    }
                </div>


                <div>
                    <input
                        className='rounded px-3 py-2 bg-blue-400'
                        type="submit" value='login' />
                </div>

            </form>
        </div>
    )
}

export default Login