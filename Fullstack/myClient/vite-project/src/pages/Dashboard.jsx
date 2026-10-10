import React from 'react'
import Cookies from 'js-cookie'
import useAuthStore from '../zustand/authStore.js'

export const Dashboard = () => {

  let logoutUser = useAuthStore((state)=> state.clearUser)
  return (
    <div>
      <h2>Dashboard</h2>
      <button
      onClick={()=>{
        /// remove token from cookie
        Cookies.remove('token');

        /// remove from zustand
        logoutUser();
        
      }}
      
      className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-200 ease-in-out">logout</button>

    </div>
  )
}
