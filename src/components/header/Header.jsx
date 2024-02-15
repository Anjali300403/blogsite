import './Header.css'
import main from '../../assets/main.jpg'

export default function Header() {
  return (
    <div className="header">
        <div className="HeaderTitles">
            <span className="headerTitlesmall">Technical & Creative</span>
            <span className="headerTitlelarge">Blog</span>
        </div>
        <img className="headerImg" src={main} alt=""/>
    </div>
  )
}


