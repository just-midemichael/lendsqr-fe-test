import React, { ReactNode } from 'react'
import '../assets/style/cardBox.css'

const CardBox = ({children} : {children?: ReactNode}) => {
  return (
    <>
        <div className='box-container'>
            {children}
        </div>
    </>
  )
}

export default CardBox