import React from 'react'
import './Login.css'
export default function Login() {
    return (
        <div className='login'>
            <div className="login-card">
                <h1>Admin Login</h1>
                <input placeholder='Email' type="email" />
                <input placeholder='Password' type="password" />
                <button>Login</button>

            </div>
        </div>
    )
}
