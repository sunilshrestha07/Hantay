import React from 'react'
import Navbar from '../pages/Navbar'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div className="">
      {/* purpleBox section */}
      <div className=" mx-2 mt-3 mb-3">
        <div className=" w-full  h-32 rounded-3xl bg-customPurple sm:bg-red-600 flex justify-evenly items-center">
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
              <img className=' mix-blend-color-burn ' src="/assets/ilu.svg" alt="" />
            </div>
        </div>
      </div>

      {/* scroll box with food category */}
      <div className=" mx-2">
        <div class=" w-full h-28 overflow-x-scroll  rounded-3xl scrollbar-hide ">
            <div class="flex w-screen h-full gap-3 items-center">
                <div class="flex-none w-20 h-[6.5rem] bg-gray-100  rounded-lg overflow-hidden">
                  <img src="/assets/bf.png" alt="Image" class="w-24 aspect-square object-cover -mt-1"/>
                  <Link className='text-xs font-hanuman  flex flex-col  items-center mt-1'>BreakFast</Link>
                </div> 
                <div class="flex-none w-20 h-[6.5rem] bg-gray-100  rounded-lg overflow-hidden">
                  <img src="/assets/sna.jpg" alt="Image" class="w-24 aspect-square object-cover -mt-1"/>
                  <Link className='text-xs font-hanuman  flex flex-col  items-center mt-1'>Snacks</Link>
                </div> 
                <div class="flex-none w-20 h-[6.5rem] bg-gray-100  rounded-lg overflow-hidden">
                  <img src="/assets/ma.jpg" alt="Image" class="w-24 aspect-square object-cover -mt-1"/>
                  <Link className='text-xs font-hanuman  flex flex-col  items-center mt-1'>Main course</Link>
                </div> 
                <div class="flex-none w-20 h-[6.5rem] bg-gray-100  rounded-lg overflow-hidden">
                  <img src="/assets/salad.jpg" alt="Image" class="w-24 aspect-square object-cover -mt-1"/>
                  <Link className='text-xs font-hanuman  flex flex-col  items-center mt-1'>Salad</Link>
                </div> 
                <div class="flex-none w-20 h-[6.5rem] bg-gray-100  rounded-lg overflow-hidden">
                  <img src="/assets/drinks.jpg" alt="Image" class="w-24 aspect-square object-cover -mt-1"/>
                  <Link className='text-xs font-hanuman  flex flex-col  items-center mt-1'>Cold Drinks</Link>
                </div>  
                <div class="flex-none w-20 h-[6.5rem] bg-gray-100  rounded-lg overflow-hidden">
                  <img src="/assets/bf.png" alt="Image" class="w-24 aspect-square object-cover -mt-1"/>
                  <Link className='text-xs font-hanuman  flex flex-col  items-center mt-1'>Coffee</Link>
                </div>
            </div>
        </div>
      </div>

      </div>
    </>
  )
}
