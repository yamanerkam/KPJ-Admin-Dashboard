import React, { useContext, useState } from "react";
import './Navbar.css'
import { useNavigate, Link } from "react-router-dom";
import AuthProvider from '../Contexts/AuthContext';
import LayoutContextProvider from "../Contexts/LayoutContext";
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
import { VscSignOut } from "react-icons/vsc";


export default function Navbar() {
    const { toggle, handleToggle } = useContext(LayoutContextProvider)
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
        <div className={`navbar ${toggle ? 'toggleOff' : ''}`}>
            <button className="onOff" onClick={handleToggle}>
                {toggle ? <GoSidebarCollapse size={25} /> : <GoSidebarExpand size={25} className="icon" />}
            </button>
            <div></div>
            <div className={`innn ${toggle ? 'toggOff' : ''}`}>
                <span className="logo">KPJ</span>
                <ul>

                    <li className="list-item"><Link to='/dashboard'>All Blogs</Link></li>
                    <li className="list-item"><Link to='/new-blog'>Create a new Blog</Link></li>


                </ul>
                <button className="signOut" onClick={handleSignOut}>
                    <VscSignOut size={25} />
                </button>
            </div>

        </div>
    )
}
