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
            <img className={`h-10 w-8  object-contain `} src={`${show ? './src/assets/x.png':'./src/assets/menu.png'}`} alt="" />
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
            <div className={`w-56 min-h-[40.3rem] flex flex-col gap-5 absolute  bg-white transition-all ease-in-out duration-300 ${show ? ' ml-0 ': '-ml-[100%]'}`}>
                <div className=" flex items-center gap-2 bg-white h-16 justify-center mt-5 rounded-lg">
                  <Link to={'/dashboard?tab=profile'} className='text-lg font-serif'>Profile</Link><span><img className=' h-5 w-5 object-contain' src="./src/assets/user.png" alt="" /></span>
                </div>
                <div className=" flex items-center gap-2 bg-white h-16 justify-center rounded-lg">
                  <Link to={'/dashboard?tab=profile'} className='text-lg font-serif'>Home</Link><span><img className=' h-5 w-5 object-contain' src="./src/assets/home.png" alt="" /></span>
                </div>
                <div className=" flex items-center gap-2 bg-white h-16 justify-center rounded-lg">
                  <Link to={'/dashboard?tab=profile'} className='text-lg font-serif'>Cart</Link><span><img className=' h-5 w-5 object-contain' src="./src/assets/trolley.png" alt="" /></span>
                </div>
                <div className=" flex items-center gap-2 bg-white h-16 justify-center rounded-lg">
                  <Link to={'/dashboard?tab=profile'} className='text-lg font-serif'>About</Link><span><img className=' h-5 w-5 object-contain' src="./src/assets/logo.png" alt="" /></span>
                </div>
                <div className=" flex items-center gap-2 bg-white h-16 justify-center rounded-lg ">
                  <Link to={'/dashboard?tab=profile'} className='text-lg font-serif'>Logout</Link><span><img className=' h-5 w-5 object-contain' src="./src/assets/logout.png" alt="" /></span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
