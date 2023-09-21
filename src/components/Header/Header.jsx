import Logo from "../Logo/Logo";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import styles from "./Header.module.scss";
import { Link } from 'react-router-dom';




const Header = () => {
  const menu = ["About", "Map", "Zoos", "Contact us", "Design"];

  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.header__nav}>
        <BurgerIcon />
        <ul className={styles.header__ul}>
          {menu.map((item) => (
            <li key={item} className={styles.header__li}>
              <Link to={'/' + item.toLowerCase()}
                //need to chenge hardcode expression below to dynamic: link should be active if current page route is matching
                className={`${styles.header__link} ${item === 'About' ? styles.header__link_active : ''}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
