import Header from "../Header/Header"
import './Top.scss'
import playIcon from '../../assets/icons/play.svg'

const Top = () => {
  return (
    <section className="top">
      <div className="top__container">
        <Header />
        <div className="top__content">
          <h2 className="top__title">
            Watch your
            favorite animal ONLINE
          </h2>
          <button className="top__button">
            <img src={playIcon} alt="playIcon" />
            Play
          </button>
        </div>
      </div>
    </section>
  )
}

export default Top