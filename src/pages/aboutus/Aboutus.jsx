import React from 'react'
import './aboutus.css'
import Topbar from '../../components/topbar/Topbar.jsx'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import img from '../../assets/light.png'

export default function Aboutus() {
  return (
    <div className='aboutus'>
        <div className="aboutuswrapper">
        <img src={img} alt="" className="coverpageImg" />
          
            <p>
                Hello, I'm Anjali, a pre-final year student at VIT Vellore, passionate about web development, particularly in front-end technologies like React. My techStack in web development includes html, css(flebox,bootstrap,grid,tailwind), javascript(jquery,react), mongodb, express and node.js. Apart from web development, my interest also lies in generative AI and cloud learning. My passion outside of engineering includes writing creative pieces, working out at the gym and reading books. 
            </p>
        </div>
        <Sidebar/>


    </div>
  )
}
