import React from 'react'
import {Link} from 'react-router-dom';
import './Topbar.css'
import pfp from '../../assets/myimg.png';

function Topbar() {
  const user=true;
  return (
    <div className='top'>
    <div className="topLeft">
    <a href="https://medium.com/@anjali.jha2020" target="_blank" rel="noopener noreferrer">
        <i className="topIcon fa-brands fa-medium"></i>
    </a>
    <a href="https://contradictoryconclusions.blogspot.com" target="_blank" rel="noopener noreferrer">
        <i className="topIcon fa-brands fa-blogger-b"></i>
    </a>
    <a href="https://www.linkedin.com/in/anjali-jha-b6189122a/" target="_blank" rel="noopener noreferrer">
        <i className="topIcon fa-brands fa-linkedin-in"></i>
    </a>
</div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
          </li>
          <li className="topListItem">
          <Link to="/abtus" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
          </li>
          <li className="topListItem">
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
          </li>
          <li className="topListItem">
          <Link to="/write" style={{ textDecoration: 'none', color: 'inherit' }}>Write</Link>
          </li>
          <li className="topListItem">
          <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>Settings</Link>
          </li>

          <li className="topListItem">
            {user && 'Logout'}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img src={pfp} width="40px" height="40px"></img>
          ): (
            <ul className="topList">
              <li className="topListItem">
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
              </li>
              <li>
              <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
              </li>
            </ul>
          )
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
        </div>
  )
}

export default Topbar;
