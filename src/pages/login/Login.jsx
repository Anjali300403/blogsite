import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Enter your email.." />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password.." />
        <button className="LoginButton">Login</button>
        </form>
        <button className="registerButton" style={{backgroundColor:'teal'}}>Register</button>
        </div>
  )
}
