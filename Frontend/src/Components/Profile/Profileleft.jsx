import img from "../../assets/cover.png";
import profileimg from "../../assets/postimg.png";
import { MdWork } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import Navprofile from "./Navprofile";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Profileleft() {

  const [user,setuser]=useState({name:"",role:"",bio:"",followers:[],following:[]})
  const contextdata = useContext(UserContext)

  useEffect(()=>{
    const data =contextdata()
   .then((res)=>setuser(res))
   .catch((err)=>console.log(err))
  })
  return (
    <>
      <div className="profile-left w-full ">
        {/* Cover Image */}
        <div className="cover w-full h-40 relative ">
          <img
            src={img}
            alt="coverimg"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Info Section (Profile Image + Name + Buttons) */}
        <div className="info flex items-center px-5 relative -mt-16">
          {/* Profile Image (Now on top of cover) */}
          <div className="relative">
            <div className="img h-32 w-32 rounded-full overflow-hidden border-4 border-white shadow-lg mt-5">
              <img
                src={profileimg}
                alt="profileimg"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Name and Connection Info (Beside Profile Image) */}
          <div className="profiledata flex flex-col justify-center ml-4 mt-18">
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <h4 className="text-sm text-gray-600">Connections</h4>
          </div>

          {/* Push buttons to the right */}
          <div className="button flex gap-2 ml-auto mt-18">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              <NavLink to="/settings">Edit Profile</NavLink>
              
            </button>
            <button className="px-4 py-2 bg-gray-300 rounded-lg">...</button>
          </div>
        </div>
        {/* profile down */}
        <div className="p-down flex flex-row gap-5 border-b-1 border-gray-300 ml-5 p-4">
          <div className="current flex items-center gap-1 text-4 text-gray-600 font-semibold">
            <MdWork />
            <h4>Lead Developer</h4>
          </div>
          <div className="location flex items-center gap-1  text-4 text-gray-600 font-semibold">
            <IoLocation />
            <h4>Location</h4>
          </div>
          <div className="data flex items-center gap-1  text-4 text-gray-600 font-semibold">
            <CiCalendarDate />
            <h4>Join date</h4>
          </div>
        </div>
        {/* Navigation */}

        <div className="nav mt-4 flex">
          <Navprofile />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Profileleft;
