import React, { useEffect, useRef, useState } from 'react'
import {useSelector} from 'react-redux'

export default function Profile() {
  const {currentUser}=useSelector((state)=>state.user)
  const fileRef=useRef()
  const [imageFile,setImageFile]=useState('')
  const [imageFileUrl,setImageFileUrl]=useState('')
  const [updateData,setUpdateData]=useState({})

  const handelImagechange=(e)=>{
    const file = e.target.files[0]
    if(file){
      setImageFile(file)
      setImageFileUrl(URL.createObjectURL(file))
      setUpdateData({...updateData,[e.target.id]:e.target.files[0]})
    }
  }
  const handelChange=(e)=>{
    setUpdateData({...updateData,[e.target.id]:e.target.value})
  }
  const handelSubmit=(e)=>{
    e.preventDefault()
    console.log(updateData)
  }

  return (
    <>
    <div className=" flex  justify-center mt-20">
      <div className=" bg-slate-100 rounded-lg w-3/4 h-full md:w-2/5">
        <div className=" my-5">
          <div className="">
            <p className=' text-center font-hanuman text-xl sm:text-2xl md:text-3xl'>Your Profile</p>
          </div>
          <form onSubmit={handelSubmit}>
            <input type="file" accept='image**' name="" id="" hidden ref={fileRef} onChange={handelImagechange} />
              <div className=" flex justify-center">
                <img className=' w-52 h-52 object-cover rounded-full' onClick={()=>fileRef.current.click()} src={imageFileUrl|| currentUser.profilePicture} alt="" />
              </div>
              <div className=" flex flex-col gap-3 justify-center items-center my-2">
                  <div className="">
                    <input className=' rounded-xl md:px-6 ' type="text" name="" id="name" placeholder='Name'  onChange={handelChange} defaultValue={currentUser.name}/>
                  </div>
                  <div className="">
                    <input className=' rounded-xl md:px-6 ' type="email" name="" id="email" placeholder='Email' onChange={handelChange}  defaultValue={currentUser.email}/>
                  </div>
                  <div className="">
                    <input className=' rounded-xl md:px-6 ' type="password" name="" id="password" placeholder='Password' onChange={handelChange}  />
                  </div>
              </div>
              <div className=" flex justify-center mb-10 ">
                <button type=' submit' className=' bg-black text-white hover:bg-white hover:text-black  py-2 px-5 rounded-2xl'>Update</button>
              </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
