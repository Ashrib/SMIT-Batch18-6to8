
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import Cookies from 'js-cookie'
import useAuthStore from '../zustand/authStore'
import { useNavigate } from 'react-router'


const Register = () => {
    const registerSchema = yup.object({
        username: yup
            .string()
            .min(3, 'Username must be at least 3 characters')
            .max(15, 'Username must be under 15 characters')
            .required('Username is required'),

        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),

        password: yup
            .string()
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
            )
            .required('Password is required'),

        age: yup
            .number()
            .typeError('Age must be a number')
            .positive('Age must be positive')
            .min(15, 'Age must be at least 15')
            .max(90, 'Age must be at most 90')
            .required('Age is required'),

    });

    
    let setAuthUser = useAuthStore((state) => state.setUser);
    let navigate = useNavigate();


    let {
        handleSubmit,
        register,
        watch,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(registerSchema)
    });



    let resgisterUser = async (data) => {
        try {
            console.log(data)
            let backendUrl = import.meta.env.VITE_BACKEND_URL;
            const response = await axios.post(`${backendUrl}/auth/register`, data);
            Cookies.set('token', response.data.token);

            /// store in zustand store
            setAuthUser(response.data.data);

            navigate('/dashboard');
        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Register</h2>

            <form
                onSubmit={handleSubmit(resgisterUser)}
                className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg"
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Create an Account
                </h2>

                {/* Username */}
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Username
                    </label>

                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        {...register('username')}
                        className={`w-full px-4 py-2 border rounded-lg outline-none transition
                ${errors.username
                                ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                                : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                            }`}
                    />

                    {errors.username && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.username.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        {...register('email')}
                        className={`w-full px-4 py-2 border rounded-lg outline-none transition
                ${errors.email
                                ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                                : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                            }`}
                    />

                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        {...register('password')}
                        className={`w-full px-4 py-2 border rounded-lg outline-none transition
                ${errors.password
                                ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                                : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                            }`}
                    />

                    {errors.password && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.password.message}
                        </p>
                    )}

                    <p className="mt-1 text-xs text-gray-500">
                        At least 8 characters, including uppercase, lowercase, number and
                        special character.
                    </p>
                </div>

                {/* Age */}
                <div className="mb-6">
                    <label
                        htmlFor="age"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Age
                    </label>

                    <input
                        type="number"
                        id="age"
                        placeholder="Enter your age"
                        {...register('age', { valueAsNumber: true })}
                        className={`w-full px-4 py-2 border rounded-lg outline-none transition
                ${errors.age
                                ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                                : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                            }`}
                    />

                    {errors.age && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.age.message}
                        </p>
                    )}

                    <p className="mt-1 text-xs text-gray-500">
                        Age must be between 15 and 90.
                    </p>
                </div>

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                   text-white font-semibold py-2.5 rounded-lg
                   transition duration-200 focus:outline-none
                   focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                    Register
                </button>
            </form>




        </div>
    )
}

export default Register