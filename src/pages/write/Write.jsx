import React from 'react'
import './Write.css'
import img from "../../assets/writepgimg.png"

export default function Write() {
  return (
    <div className='write'>
      <img src={img} alt="" className="coverpageImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor='fileInput'>
          <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}} />
          <input type="text" placeholder="Title" className="writeInput" autoFocus/>
        </div>
        <div className="writeFormGroup">
          <textarea placeholder='So what is your blog about ?' type='text' className='writeInput writeText'></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
      </div>
  )
}
