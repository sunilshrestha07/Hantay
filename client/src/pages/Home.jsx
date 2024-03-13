import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

export default function Home() {
  const {currentUser}=useSelector((state)=>state.user)
  const [show,setShow]=useState(false)

  const handelSidebar=()=>{
    setShow(!show)
  }
  return (
    <div>
      <div className="">
        <div className=" flex justify-between gap-7 mx-2 mb-2">
          <div className="md:hidden" onClick={handelSidebar}>
            <img className={`h-10 w-8  object-contain `} src="./src/assets/menu.png" alt="" />
          </div>
          <div className="">
            <input className=' py-1 rounded-lg mt-2' type="search" placeholder='Search' name="" id="" />
          </div>
          <div className="">
            <img className=' h-8 w-8 object-cover rounded-full mt-2' src={currentUser.profilePicture} alt="" />
          </div>
        </div>
        {/* sidebar */}
        <div className=""> 
            <div className={`w-56 h-screen  bg-slate-200 transition-all ease-in-out duration-300 ${show ? ' ml-0 ': '-ml-[100%]'}`}>
              <ul>
                <li><Link to={'/dashboard?tab=profile'}>profile</Link></li>
              </ul>
            </div>
        </div>
        {/* <div className="">
          <p>Hello {currentUser.name}</p> 
        </div>
        <div className="">
          <img className='h-52 w-44' src={currentUser.profilePicture} alt="" />
        </div> */}
      </div>
    </div>
  )
}
