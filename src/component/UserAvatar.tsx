import React from 'react'
import '../assets/style/userAvatar.css'

const UserAvatar = () => {
  return (
    <>
        <div className='avatar-container'>
            <img className='avatar-image' src='../image/avatar-image.svg' alt='avatar' title='Guest'/>
        </div>
    </>
  )
}

export default UserAvatar