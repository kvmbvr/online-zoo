import Header from "../Header/Header"
import styles from './Top.module.scss'
import playIcon from '../../assets/icons/play.svg'

const Top = () => {
  return (
    <section className={styles.top}>
      <div className={styles.top__container}>
        <Header />
        <div className={styles.top__content}>
          <h2 className={styles.top__title}>
            Watch your
            favorite animal ONLINE
          </h2>
          <button className={styles.top__button}>
            <img src={playIcon} alt="playIcon" />
            Play
          </button>
        </div>
      </div>
    </section>
  )
}

export default Top