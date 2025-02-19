import { CiCalendarDate } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BsNvidia } from "react-icons/bs";
import img1 from "../../assets/photo1.png"
import img2 from "../../assets/photo2.png"
import img3 from "../../assets/photo3.png"
import img4 from "../../assets/photo4.png"
import { UserContext } from "../../App";
import { useEffect, useContext,useState } from "react";



function Profileright() {
  const [user,setuser]=useState({about:""})
  const contextdata = useContext(UserContext)

  useEffect(()=>{
    const data =contextdata()
   .then((res)=>setuser(res))
   .catch((err)=>console.log(err))
  })
  return (
    <>
      <div className="profileright  flex flex-col gap-6 ">
        <div className="about   bg-white  p-4   rounded-lg   ">
          <h2 className=" text-2xl text-black font-bold">About</h2>
          <div className="about-info text-gray-700 p-3">
            <p>
             {user.about}
            </p>
          </div>
          <div className="details text-lg text-black">
            <div className="born  flex flex-row gap-3 items-center ">
              <CiCalendarDate />{" "}
              <h3>
                Born: <span className="text-gray-700">October 6th</span>
              </h3>
            </div>
            <div className="stats  flex flex-row gap-3 items-center">
              <FaHeart />
              <h3>
                Marriage: <span className="text-gray-700">Un Married</span>
              </h3>
            </div>
            <div className="email  flex flex-row gap-3 items-center">
              <IoMail />
              <h3>
                Email: <span className="text-gray-700">Demo@gmail.com</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="experience  bg-white  p-4   rounded-lg  ">
        <h2 className=" text-2xl text-black font-bold">Experience</h2>

          <div className="experence items-center flex flex-col items-start w-ful  ">
            <div className="company flex gap-5 items-center mt-3">
              <AiOutlineAntDesign className="text-3xl mb-3"/>
              <div className="companydetails items-center w-full">
                <h3 className="font-bold">Minimalist</h3>
                <p className=" text-gray-500 text-sm">workied for 2 years in development of web applilcation. <button className=" ml-1 p-1 bg-lime-200  rounded-sm text-sm">edit</button></p>
              </div>
            </div>
            <div className="company flex gap-5 items-center mt-3">
              <BsNvidia className="text-3xl mb-3"/>
              <div className="companydetails items-center w-full">
                <h3 className="font-bold">Nvidia</h3>
                <p className=" text-gray-500 text-sm">worked for 2 years in design of chips. <button className=" ml-1 p-1 bg-lime-200  rounded-sm text-sm">edit</button> </p>
              </div>
            </div>

            <div className="company flex gap-5 items-center mt-3">
              <BsNvidia className="text-3xl mb-3"/>
              <div className="companydetails items-center w-full">
                <h3 className="font-bold">Nvidia</h3>
                <p className=" text-gray-500 text-sm">worked for 2 years in design of chips. <button className=" ml-1 p-1 bg-lime-200  rounded-sm text-sm">edit</button> </p>
              </div>
            </div>
          </div>

        </div>

        <div className="photos bg-white p-4 rounded-lg">
  <div className="head flex justify-between items-center">
    <h2 className="font-bold text-xl">Photos</h2>
    <button className="p-2 bg-sky-200 rounded-lg text-sm">See All Photos</button>
  </div>

  <div className="imgarea grid grid-cols-2 gap-2 mt-4">
    <img src={img1} className="w-full h-32 object-cover rounded-lg" />
    <img src={img2} className="w-full h-32 object-cover rounded-lg" />
  </div>
  <div className="imgarea grid grid-cols-3 gap-2 mt-4">
    <img src={img3} className="w-full h-32 object-cover rounded-lg" />
    <img src={img4} className="w-full h-32 object-cover rounded-lg" />
    <img src={img1} className="w-full h-32 object-cover rounded-lg" />


    </div>
</div>

      </div>
    </>
  );
}

export default Profileright;
