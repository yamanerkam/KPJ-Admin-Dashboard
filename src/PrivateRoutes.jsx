import { Outlet, Navigate } from 'react-router-dom'
import React, { useContext } from "react";
import AuthProvider from './Contexts/AuthContext';


const PrivateRoutes = () => {
    const { isAuthenticated } = useContext(AuthProvider)
    console.log(isAuthenticated)
    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes