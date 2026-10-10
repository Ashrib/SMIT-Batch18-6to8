import { create } from 'zustand'
import Cookies from 'js-cookie'
import axios from 'axios';
import { useNavigate } from 'react-router';


const useAuthStore = create((set) => ({
    user: null,
    setUser: (newUser) => set({ user: newUser }),
    clearUser: () => set({ user: null }),
}))



let token = Cookies.get('token');
console.log('Token from Cookies:', token);



let getUserFromToken = async () => {
    try {
       
        let backendUrl = import.meta.env.VITE_BACKEND_URL;
        console.log(backendUrl)
        const response = await axios.get(`${backendUrl}/auth/getUser`, 
            {
            headers: {
                authorization: `Bearer ${token}`,
            }
        }
        );

        if(response.data.data){
            useAuthStore.getState().setUser(response?.data?.data)

        }

    } catch (error) {
        console.error("error")
        console.log(error)
    }
}


if (token) {
    getUserFromToken()
}




///// fetch('api string/url', {body}, {header})



export default useAuthStore