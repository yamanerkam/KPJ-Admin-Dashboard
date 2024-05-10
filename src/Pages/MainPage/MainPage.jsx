import React, { useContext } from "react";
import './MainPage.css'
import { getCurrentUser, signIn, signOut } from 'aws-amplify/auth';
import { useNavigate, Outlet } from "react-router-dom";
import AuthProvider from '../../Contexts/AuthContext';
import Navbar from "../../Components/Navbar";


export default function MainPage() {
    const navigate = useNavigate();
    const { isAuthenticated, changeAuth } = useContext(AuthProvider);

    function handleSignOut() {
        try {
            changeAuth()
            signOut({ global: true });
            navigate("/login")
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    return (
        <>

            <div className="main-page">

                <div>MainPage
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
                <Outlet />
            </div>

        </>

    )
}
