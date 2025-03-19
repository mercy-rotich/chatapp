import React from 'react'
import Logo from '../assets/chat.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <div className='bg-white rounded-full'>
        <img src={Logo} alt="logo" className='size-10' object-contain/>
      </div>
      <div>
        sideroutes
      </div>
      <div>user</div>
    </div>
  )
}

export default Sidebar
