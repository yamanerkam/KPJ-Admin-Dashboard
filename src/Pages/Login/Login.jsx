import React, { useState, useContext } from 'react'
import { Amplify } from 'aws-amplify';
import { signIn } from 'aws-amplify/auth'
import awsExports from './../../aws-exports'
import './Login.css'
import { useNavigate } from "react-router-dom";
import AuthProvider from '../../Contexts/AuthContext';


Amplify.configure(awsExports);




export default function Login() {
    const navigate = useNavigate();
    const { changeAuth } = useContext(AuthProvider);
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')


    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const { isSignedIn, nextStep } = await signIn({ username, password });
            console.log('yes')
            changeAuth()
            navigate("/dashboard")
        } catch (error) {
            console.log('error signing in', error);
        }
        console.log(username, password)
    }
    return (
        <div className='login'>
            <div className="login-card">
                <h1>Admin Login</h1>
                <form onSubmit={handleSubmit} action="submit">
                    <input required placeholder='Email' value={username} onChange={((e) => setUserName(e.target.value))} type="email" />
                    <input placeholder='Password' value={password} onChange={((e) => setPassword(e.target.value))} type="password" />
                    <button type='submit'>Login</button>
                </form>
                <br />


            </div>
        </div>
    )
}
