import React from 'react'
import useAuthStore from '../zustand/authStore';
import { Navigate, Outlet } from 'react-router';


const AuthProtectedRoutes = () => {

    let authUser = useAuthStore((state) => state.user);

    if (!authUser) {
        return <Navigate to='/login' replace />;
    }

    return <Outlet />;
};

export default AuthProtectedRoutes