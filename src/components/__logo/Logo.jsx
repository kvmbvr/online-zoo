import './Logo.scss'
import logo from '../../assets/icons/logo.svg'
const Logo = () => {
  return (
    <a href='#' className="logo">
      <img src={logo} alt="logo" />
    </a>
  )
}

export default Logo