import "./menu.css"
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs"
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="menu">
      <a className="social" href="https://github.com/Kaua-Marangoni" target="_blank" rel="noreferrer">
        <BsGithub size={24} color="#fff" />
      </a>

      <a className="social" href="https://www.linkedin.com/in/kaua-marangoni/" target="_blank" rel="noreferrer">
        <BsLinkedin size={24} color="#fff" />
      </a>

      <a className="social" href="https://www.instagram.com/kaua_marangoni/" target="_blank" rel="noreferrer">
        <BsInstagram size={24} color="#fff" />
      </a>

      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    </div>
  )
}

export default Menu