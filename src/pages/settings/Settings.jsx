import React from 'react'
import './Settings.css'
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import placeholder from '../../assets/writepgimg.png'

export default function Settings() {
  return (
    <div className='Settings'>
        <div className="settingWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Account Settings</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img className="placeholderimg" src={placeholder} alt=""/>
                    <label htmlFor="fileInput">
                    <i className="settingspfpicon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}></input>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Anjali" />
                <label>Email</label>
                <input type="email" placeholder="abc@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <br/>
                <button className="settingsSubmit">Update</button>

            </form>
        </div>
        <Sidebar/>
        </div>
  )
}
