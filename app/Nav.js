'use client'

import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlaneDeparture, faUserPlus, faArrowRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Search from "./Search-Bar";
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  const { data: session, status: sessionStatus } = useSession();
  const [status, setStatus] = useState(null);
  const [name, setName] = useState();
  const [Northopen,Northclose] = useState(false) 
  const [Southopen,Southclose] = useState(false) 
  const [Westopen,Westclose] = useState(false) 
  const [Eastopen,Eastclose] = useState(false) 
  const [Unionopen,Unionclose] = useState(false) 
  const [Centralopen,Centralclose] = useState(false) 
  const router = useRouter()
//js
  console.log(sessionStatus)
  useEffect(() => {
    const savedStatus = localStorage.getItem('status');
    setStatus(savedStatus);

    if(sessionStatus == "authenticated"){
      localStorage.setItem("googleStatus",1)
    }

    if (sessionStatus === "authenticated" && session?.user?.name) {
      setName(session.user.name);
    } else {
      setName(localStorage.getItem("name") || "User");
    } 
  }, [session, sessionStatus]);

  const handleUser = async () => {
    if (status == 1 || sessionStatus == "authenticated") {
      const value = confirm("Are you Sure?");
      if (value) {
        localStorage.clear();
        await signOut({ redirect: false });
        window.location.reload()
      }
    } else {
      router.push("/sign")
    }
  };

  const handleMenu = () => {
    const navbar = document.getElementById("navbar-item");
    navbar.style.display = navbar.style.display === "block" ? "none" : "block";
  }

  const handleClickOutside = (event) => {
    const navbar = document.getElementById("navbar-item");
    const menuButton = document.getElementById("nav-menu");
    if (navbar && menuButton && !navbar.contains(event.target) && !menuButton.contains(event.target)) {
      navbar.style.display = "none";
    }
  }
  //Sub-nav bar
  const northOpen = (event) =>{
    if(!Northopen){
      Northclose(true)
      document.getElementById("north").style.display = "flex"
    }
    else{
      Northclose(false)
      document.getElementById("north").style.display = "none"
    }
  }
//south
  const southOpen = () =>{
    if(!Southopen){
      Southclose(true)
      document.getElementById("south").style.display = "flex"
    }
    else{
      Southclose(false)
      document.getElementById("south").style.display = "none"
    }
  }
//west
  const westOpen = () =>{
    if(!Westopen){
      Westclose(true)
      document.getElementById("west").style.display = "flex"
    }
    else{
      Westclose(false)
      document.getElementById("west").style.display = "none"
    }
  }

  //east
  const eastOpen = () =>{
    if(!Eastopen){
      Eastclose(true)
      document.getElementById("east").style.display = "flex"
    }
    else{
      Eastclose(false)
      document.getElementById("east").style.display = "none"
    }
  }

  //union
  const unionOpen = () =>{
    if(!Unionopen){
      Unionclose(true)
      document.getElementById("union").style.display = "flex"
    }
    else{
      Unionclose(false)
      document.getElementById("union").style.display = "none"
    }
  }

  //central
  const centralOpen = () =>{
    if(!Centralopen){
      Centralclose(true)
      document.getElementById("central").style.display = "flex"
    }
    else{
      Centralclose(false)
      document.getElementById("central").style.display = "none"
    }
  }


  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, []);


//ui
  return (
    <main>
      <div className="nav-menu" onClick={handleMenu}>
      <FontAwesomeIcon icon={faBars} width={20}/>
      </div>
      <div id="navbar-item" className="nav-item w-full flex justify-around border-4 rounded-lg bg-white text-base pt-4 text-[#38404f]">
      
        {/* logo */}
        <div>
          <Image
            src='/logo.jpeg'
            width={50}
            height={50}
            className="rounded-full mb-3 inline"
          />
          <p className="inline pl-2 font-bold">JourneyToIndia</p>
        </div>

        {/* search */}
        <Search/>

        {/* text */}
        <div className="group text-space-1 m-2">
          <div className="flex items-center hover:scale-125 transition-all delay-75 hover:cursor-pointer">
            <p className="pl-2 pr-0 pt-1 inline-block font-bold">Destinations</p>
            <FontAwesomeIcon icon={faPlaneDeparture} width={20} className="inline-block" />
          </div>
          <div className="box hidden absolute top-full right-0 bg-blue-400 text-white p-4 w-full group-hover:flex">
            <div>
              <p className="underline head" onClick={northOpen} >North India</p>
              <div className="screen-options north flex flex-col gap-3 pt-8" id="north" >
                <a href="/States/4">Rajasthan</a>
                <a href="/States/5">Himachal Pradesh</a>
                <a href="/States/6">Uttarakhand</a>
                <a href="/States/7">Uttar Pradesh</a>
              </div>
            </div>

            <div>
              <p className="underline head" onClick={southOpen} > South India</p>
              <div className="south screen-options flex flex-col gap-3 pt-8" id="south">
                <a href="/States/8">Kerala</a>
                <a href="/States/9">Karnataka</a>
                <a href="/States/10">Tamil Nadu</a>
                <a href="/States/11">Andhra Pradesh</a>
              </div>
            </div>

            <div>
              <p className="underline head" onClick={eastOpen}>East India</p>
              <div className="east screen-options flex flex-col gap-3 pt-8" id="east">
                <a href="/States/12">Sikkim</a>
                <a href="/States/13">Assam</a>
                <a href="/States/14">Nagaland</a>
                <a href="/States/15">Tripura</a>
                <a href="/States/16">Jharkhand</a>
              </div>
            </div>

            <div>
              <p className="underline head" onClick={westOpen}>West India</p>
              <div className="west screen-options flex flex-col gap-3 pt-8" id="west">
                <a href="/States/17">Goa</a>
                <a href="/States/18">Gujarat</a>
                <a href="/States/19">Maharashtra</a>
              </div>
            </div>

            <div>
              <p className="underline head" onClick={centralOpen}>Central India</p>
              <div className="central screen-options flex flex-col gap-3 pt-8" id="central">
                <a href="/States/20">Madhya Pradesh</a>
                <a href="/States/21">Chhattisgarh</a>
              </div>
            </div>

            <div>
              <p className="underline head" onClick={unionOpen}>Union Territories</p>
              <div className="union screen-options flex flex-col gap-3 pt-8" id="union">
                <a href="/States/22">Jammu and Kashmir</a>
                <a href="/States/23">Ladakh</a>
                <a href="/States/24">Andaman and Nicobar Islands</a>
                <a href="/States/25">Chandigarh</a>
                <a href="/States/26">Dadra and Nagar Haveli</a>
                <a href="/States/27">Daman and Diu</a>
                <a href="/States/28">Puducherry</a>
              </div>
            </div>
          </div>
        </div>

        {/* sign in / out */}
        <div className="text-space-2 m-2 hover:scale-125 transition-all delay-75 hover:cursor-pointer">
          <p className="pb-4 pl-2 pr-2 pt-1 inline-block font-bold" title="Click" onClick={handleUser}>
            {status == 1 || sessionStatus == "authenticated" ? "Log Out" : "Sign in / Log in"}
          </p>
          <FontAwesomeIcon icon={status == 1 ? faArrowRightFromBracket : faUserPlus} width={20} className="inline-block" />
        </div>
        <p className=" screen-text pb-1 pl-2 pr-2 pt-1 m-2 font-bold">
          {name == null ? " Loading.." : `Welcome, ${status == 1 || sessionStatus == "authenticated" ? name : "Guest"}`}
        </p>
       <a href="/Favorite"><FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} className="pl-3 lg:p-5"/></a>
        </div>     
    </main>
  );
}
