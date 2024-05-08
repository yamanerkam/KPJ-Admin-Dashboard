import React from 'react'
import './Login.css'
export default function Login() {
    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <div className='login'>
            <div className="login-card">
                <h1>Admin Login</h1>
                <form onSubmit={handleSubmit} action="submit">
                    <input required placeholder='Email' type="email" />
                    <input required placeholder='Password' type="password" />
                    <button type='submit'>Login</button>
                </form>


            </div>
        </div>
    )
}
