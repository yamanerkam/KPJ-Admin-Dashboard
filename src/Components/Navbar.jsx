import React, { useContext, useEffect, useState, useRef } from "react";
import './Navbar.css'
import { useNavigate } from "react-router-dom";
import AuthProvider from '../Contexts/AuthContext';

export default function Navbar() {
    const { isAuthenticated, changeAuth } = useContext(AuthProvider);
    const [toggle, setToggle] = useState(false)
    const spanHider = useRef(null);
    const navigate = useNavigate();
    function handleToggle() {

        setToggle(!toggle)
        console.log('toggle:' + ' ' + toggle)
    }

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
        <div className={`navbar ${toggle ? 'toggleOff' : ''}`}>
            <button onClick={handleToggle}>close</button>
            <span  >KPJ</span>
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
