import { create } from 'zustand'
import Cookies from 'js-cookie'


const useAuthStore = create((set) => ({
    user: null,
    setUser: (newUser) => set({ user: newUser }),
    clearUser: () => set({ user: null }),
}))



let token = Cookies.get('token');
console.log('Token from Cookies:', token);











export default useAuthStore