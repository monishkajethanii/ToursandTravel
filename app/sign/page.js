"use client"

import React, { useEffect, useState } from 'react'
import Log from "./log"
import { signIn , useSession} from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [status,set] = useState(null)
  const [googleStatus ,setStatus] = useState()
  const router = useRouter()
  //google

  const { data: session, status: sessionStatus } = useSession();
  console.log(session)

  useEffect(()=>{
    set(localStorage.getItem("status"))

    if(sessionStatus == "authenticated"){
      router.push('/');
    }
  },[sessionStatus,router])

  // const session = useSession();
  // console.log(session) 

  // read function
  const read= async(e)=>{
    e.preventDefault();
    const raw_data = await fetch("./users.json");
    const jsondata = await raw_data.json();
    const arr = Object.values(jsondata)
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if(email == "" && password == ""){
      alert("Enter Values")
      console.log("enter values")
    }
    else{
      console.log(email,password)
    
       for(var i = 0;i<arr.length;i++){
  
        if(email === arr[i].email && password === arr[i].password){
          localStorage.setItem("status",1)
          localStorage.setItem("name",arr[i].name)
          router.push('/');
          break
        }
        else{
         //
        }
   }
    } 
  }
//google signIn function
const google = async() =>{
  if(sessionStatus == "unauthenticated"){
    await signIn("google")
  }
}
  return (
    <>
    {status == 1 || sessionStatus =="authenticated" ? <Log/> : (
    <main className="w-screen h-screen">
       {/* <div className='w-full'>
        <p className='absolute mt-1 ml-5 homeText bg-blue-400' onClick={()=>{window.location.href="http://localhost:3000/"}}>Home</p>
        <FontAwesomeIcon icon={faHouse} className='absolute icon'/>
       </div> */}
      <div className=" bg-[url('/bg-image.png')] bg-cover bg-no-repeat w-full h-full flex justify-center items-center">
      
        <div className="border-2 p-12 bg-white bg-opacity-100 rounded-md shadow-md">
        <form>
        
                    {/* email */}
          <div className='relative'>
            <input id='email' type='email' placeholder=' ' required className="textinput mb-4 border-none pr-3 pl-2 py-2 ring-2 ring-gray-300 focus:ring-gray-600" />
          <label className='text absolute'>Enter Email</label>
          </div>
        
          <br/>
          {/* password */}
          <div className='relative'>
          <input type='password' id='password' required placeholder=' ' className="emailBox mb-4 border-none pr-3 pl-2 py-2 ring-2 ring-gray-300 focus:ring-gray-600"/>
          <label className='absolute emailText'>Enter Password</label>
          </div>

          <br/>
          {/* submit button */}
          <button type='submit' id="btn" className="mt-4 px-4 py-2 ml-16 bg-blue-500 text-white rounded" onClick={read}>Sign in</button>
          <br/>
          <div>
          <p className='tag'></p>
          
          </div>
          <br/>
          <div className='googlebtn bg-blue-500 text-white ' onClick={google}>
          {/* google button */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" width={20} className='inline-block'><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
          <p className=' inline-block pl-4'>Sign up with google</p>
          </div>
         
          </form>

        </div>
      </div>
    </main>
  )}
  </>
  )
}


export default Page
