import logo from '../../assets/icons/logo.svg'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={'/'} className="logo">
      <img src={logo} alt="logo" />
    </Link>
  )
}

export default Logo