import { Outlet, Navigate } from 'react-router-dom'
import React, { useContext } from "react";
import AuthProvider from './Contexts/AuthContext';


const PublicRoutes = (prop) => {
    console.log(prop)
    const { isAuthenticated } = useContext(AuthProvider)
    console.log(isAuthenticated)
    return (
        isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />
    )
}

export default PublicRoutes