
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import Cookies from 'js-cookie'
import useAuthStore from '../zustand/authStore'
import { useNavigate } from 'react-router'

const Login = () => {

  const loginSchema = yup.object({
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

  });


  let setAuthUser = useAuthStore((state) => state.setUser);
  let navigate = useNavigate();


  let {
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  });


  let loginUser = async (data) => {
    try {
      console.log(data)
      let backendUrl = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(`${backendUrl}/auth/login`, data);
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
      <h2>Login</h2>

      <form
        onSubmit={handleSubmit(loginUser)}
        className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Sign in to Your Account
        </h2>


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


        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                   text-white font-semibold py-2.5 rounded-lg
                   transition duration-200 focus:outline-none
                   focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          login
        </button>
      </form>




    </div>
  )
}

export default Login