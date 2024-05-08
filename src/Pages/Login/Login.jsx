import React, { useState } from 'react'
import { Amplify } from 'aws-amplify';
import { getCurrentUser, signIn } from 'aws-amplify/auth';
import awsExports from './../../aws-exports'
import './Login.css'

Amplify.configure(awsExports);

const { username, userId, signInDetails } = await getCurrentUser();

console.log("username", username);
console.log("user id", userId);
console.log("sign-in details", signInDetails);

export default function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const confirmationCode = '425564';
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const { isSignedIn, nextStep } = await signIn({ username, password });
            console.log('yes')
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


            </div>
        </div>
    )
}
