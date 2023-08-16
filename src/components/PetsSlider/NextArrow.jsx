import React from 'react'
import arrow from '../../assets/icons/Arrow.svg'
import styles from './NextArrow.module.scss'

const NextArrow = ({className}) => {
  return (
    <div className={`${className} ${styles.next}`}>
      <img src={arrow} alt="icon" />
    </div>
  )
}

export default NextArrow