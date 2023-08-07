import Logo from "../Logo/Logo"
import styles from './Header.module.scss'
const Header = () => {
  return (
    <header className={styles.header}>
      <Logo/>
      <nav className={styles.header__nav}>
        <ul className={styles.header__ul}>
          <li className={styles.header__li}><a href="#" className={`${styles.header__link} ${styles.header__link_active}`}>About</a></li>
          <li className={styles.header__li}><a href="#" className={styles.header__link}>Map</a></li>
          <li className={styles.header__li}><a href="#" className={styles.header__link}>Zoos</a></li>
          <li className={styles.header__li}><a href="#" className={styles.header__link}>Contact us</a></li>
          <li className={styles.header__li}><a href="#" className={styles.header__link}>Design</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header