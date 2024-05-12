import React, { useContext, useState } from "react";
import './Navbar.css'
import { useNavigate } from "react-router-dom";
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

                    <li className="list-item">All Blogs</li>
                    <li className="list-item">Create a new blog</li>
                    <li className="list-item">Update a blog</li>
                    <li className="list-item">Delete a blog</li>
                </ul>
                <button className="signOut" onClick={handleSignOut}>
                    <VscSignOut size={25} />
                </button>
            </div>

        </div>
    )
}
