import Logo from "../Logo/Logo"
import './Header.scss'
const Header = () => {
  return (
    <header className="header">
      <Logo/>
      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li"><a href="#" className="header__link header__link_active">About</a></li>
          <li className="header__li"><a href="#" className="header__link">Map</a></li>
          <li className="header__li"><a href="#" className="header__link">Zoos</a></li>
          <li className="header__li"><a href="#" className="header__link">Contact us</a></li>
          <li className="header__li"><a href="#" className="header__link">Design</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header