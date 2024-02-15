import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='Contact'>
        <span className="ContactTitle">Contact Me</span>
         <form action="" className="contactForm">
        <label>Phone Number</label>
        <input type="text" className="contactInput" value="9741977567" readOnly />
        <label>Email</label>
        <input type="text" className="contactInput" value="janjali2003@gmail.com" readOnly />
        <label>LinkedIn</label>
        <a href="https://www.linkedin.com/in/anjali-jha-b6189122a/" target="_blank" className="contactInput linkedinLink">Connect on LinkedIn</a>
    </form>
    </div>
  )
}
