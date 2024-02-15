import './Sidebar.css';
import image from '../../assets/Myimage.jpeg'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={image} alt="My picture" height="200px" width="270px"></img>
        <p>
         I am Anjali, a dedicated front-end enthusiast on a journey through technology, algorithms, and creative expression on this platform. This blog serves as my canvas to learn, share, and present insights into new technologies, algorithms, and concepts, while also weaving in pieces of creative writing. 
        </p>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className='sidebarListItem'>
          AI/ML
          </li>
          <li className='sidebarListItem'>
          Cloud
          </li>
          <li className='sidebarListItem'>
          Poetry
          </li>
          <li className='sidebarListItem'>
          Miscellaneous
          </li>
        </ul>
        </div>

    </div>
    <div className='sidebarItem'>
    <span className="sidebarTitle">SOCIALS</span>
    <div className='sidebarSocial'>
    <a href="https://www.linkedin.com/in/anjali-jha-b6189122a/" target="_blank" rel="noopener noreferrer">
        <i className="sidebarIcon fa-brands fa-linkedin-in"></i>
    </a>
    </div>
    </div>
    </div>
  );
}

