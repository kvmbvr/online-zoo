import React from 'react'
import arrow from '../../assets/icons/Arrow.svg'
import './Buttons.scss'

const ButtonNext = () => {
  return (
    <div className='button-next'>
      <img src={arrow} alt="icon" />
    </div>
  )
}

export default ButtonNext