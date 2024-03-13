import React from 'react'
import Navbar from '../pages/Navbar'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div className="">
      {/* purpleBox section */}
      <div className=" mx-2 mt-5 mb-5">
        <div className=" w-full  h-32 rounded-3xl bg-purple-500 sm:bg-red-600 flex justify-evenly items-center">
          <div className=" font-hanuman text-center font-medium w-3/4">
            <div className=" text-sm mb-2">
              <p>Fast and Yummy</p>
              <p>Good for Your Tummy</p>
            </div>
            <div className="mb-2">
              <p className=' text-xs'>After order has been paid and sent it can be counted in the system</p>
            </div>
            <div className=" flex justify-center items-center">
              <Link to='' className=' bg-yellow-100 font-hanuman rounded-lg text-xs py-1 px-2 text-center'>View Details</Link>
            </div>
          </div>
            <div className="  ">
              <img className=' mix-blend-color-burn ' src="./src/assets/ilu.svg" alt="" />
            </div>
        </div>
      </div>

      {/* scroll box with food category */}
      
    </div>
    </>
  )
}
