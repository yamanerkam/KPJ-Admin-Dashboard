import React, { useContext } from "react";
import './MainPage.css'
import { getCurrentUser, signIn, signOut } from 'aws-amplify/auth';
import { useNavigate } from "react-router-dom";
import AuthProvider from '../../Contexts/AuthContext';



export default function MainPage() {
    const navigate = useNavigate();
    const { isAuthenticated, changeAuth } = useContext(AuthProvider);

    function handleSignOut() {
        try {
            changeAuth(false)
            signOut({ global: true });
            navigate("/login")
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    return (
        <div>MainPage
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}
