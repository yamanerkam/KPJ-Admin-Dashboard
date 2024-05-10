import React, { useContext } from "react";
import './Navbar.css'
import { useNavigate } from "react-router-dom";
import AuthProvider from '../Contexts/AuthContext';

export default function Navbar() {
    const { isAuthenticated, changeAuth } = useContext(AuthProvider);
    const navigate = useNavigate();

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
        <div className='navbar'>

            <span>KPJ</span>
            <ul>
                <li>
                    All Blogs
                </li>

                <li>
                    Create a new blog
                </li>

                <li>
                    Update a blog
                </li>

                <li>
                    Delete a blog
                </li>

            </ul>
            <button onClick={handleSignOut}>Sign Out</button>

        </div>
    )
}
