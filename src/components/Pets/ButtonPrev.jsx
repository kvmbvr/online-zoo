import React from 'react'
import arrow from '../../assets/icons/Arrow.svg'
import './Buttons.scss'

const ButtonPrev = () => {
  return (
    <div className='button-prev'>
      <img src={arrow} alt="icon" />
    </div>
  )
}

export default ButtonPrev