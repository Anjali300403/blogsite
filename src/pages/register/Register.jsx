import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter your username.." />
        <label>Email</label>
        <input type="text" className="registerInput" placeholder="Enter your email.." />
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter your password.." />
        <button className="registerButton">Login</button>
        </form>
        <button className="loginButton">Register</button>
        </div>
  )
}
