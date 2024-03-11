import React from 'react'
import {useSelector} from 'react-redux'

export default function Home() {
  const {currentUser}=useSelector((state)=>state.user)
  return (
    <div>
      <div className="">
        <div className="">
          <p>Hello {currentUser.name}</p> 
        </div>
        <div className="">
          <img className='h-52 w-44' src={currentUser.profilePicture} alt="" />
        </div>
      </div>
    </div>
  )
}
