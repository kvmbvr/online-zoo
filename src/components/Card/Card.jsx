import React from 'react'
import styles from './Card.module.scss'

const Card = ({name, image}) => {
  const imagePath = require(`../../assets/img/${image}.png`)
  return (
    <div className={styles.card}>
      <img src={imagePath} alt={name} className={styles.card__img} />

      <p className={styles.card__name}>
        {name}
      </p>
    </div>
  )
}

export default Card