import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import useAuthStore from '../zustand/authStore'

export const ProfilePic = () => {
    const [image, setImage] = useState(null)
     let authUser = useAuthStore((state) => state.user);

    let {
        handleSubmit,
        register,
        watch,
        formState: { errors }
    } = useForm();


    const handleImageUpload = async (data) => {

        try {
            if (image) {
                const formData = new FormData();  //// content-type: multipart/formData
                formData.append('profile_image', image)
                console.log([...formData.entries()]);

                let backendUrl = import.meta.env.VITE_BACKEND_URL;
                const response = await axios.post(`${backendUrl}/users/profile-upload/${authUser?.uid}`, formData);

            }


        } catch (error) {

            console.error("error in uploading profile image")
            console.error(error)
        }



    }




    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <form
                onSubmit={handleSubmit(handleImageUpload)}
                className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="mb-2 text-center text-2xl font-bold text-gray-800">
                    Profile Picture
                </h2>

                <p className="mb-6 text-center text-sm text-gray-500">
                    Upload a photo for your profile
                </p>

                <div className="flex flex-col items-center">
                    <div className="mb-5 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-blue-100 bg-gray-100">
                        {image ? (
                            <img
                                src={image ? URL.createObjectURL(image) : null}
                                alt="Profile preview"
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <svg
                                className="h-14 w-14 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v2h16v-2c0-2.76-3.58-5-8-5Z" />
                            </svg>
                        )}
                    </div>

                    <label
                        htmlFor="profile"
                        className="cursor-pointer rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                        Choose Image
                    </label>

                    <input
                        {...register('profile_image')}
                        id="profile"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            setImage(e.target.files[0])
                        }}
                        className="hidden"
                    />

                    <p className="mt-3 text-xs text-gray-400">
                        JPG, PNG or WEBP
                    </p>


                    <button type='submit' className='cursor-pointer rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700'>
                        upload
                    </button>
                </div>
            </form>
        </div>
    )
}