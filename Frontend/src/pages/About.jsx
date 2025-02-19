import React from 'react'

function About() {
  return (
<>
   <div className="main  bg-white flex flex-col p-5 mt-5 gap-3 ">
    <div className="about"> 
        <h2 className='text-2xl text-black font-bold'>Profile Info</h2>
    </div>


    <div className="overview border border-gray-300 rounded-lg">
        <div className="head flex justify-between p-4">
        <h2 className='text-1xl text-black font-bold'>Overview</h2>
        <button> ... </button>
        </div>
        <div className="overview-info p-4">
            <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.</p>
        </div>
    </div>


    {/*about div  */}

    <div className="about-info p-4 grid grid-cols-2 gap-4  rounded-lg shadow-md">
  {/* Birthdate */}
  <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-300">
    <div className="flex items-center space-x-2 ">
      <span className="text-gray-500 text-sm">Born:</span>
      <span className="font-medium text-gray-600">October 20, 1990</span>
    </div>
    <button className="text-gray-500 hover:text-gray-700">
      <i className="fas fa-ellipsis-h"></i>
    </button>
  </div>

  {/* Status */}
  <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-300">
    <div className="flex items-center space-x-2">
      <span className="text-gray-500 text-sm">Status:</span>
      <span className="font-medium">Single</span>
    </div>
    <button className="text-gray-500 hover:text-gray-700">
      <i className="fas fa-ellipsis-h"></i>
    </button>
  </div>

  {/* Job Title */}
  <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-300">
    <div className="flex items-center space-x-2">
      <span className="text-gray-500 text-sm">Job Title:</span>
      <span className="font-medium">Lead Developer</span>
    </div>
    <button className="text-gray-500 hover:text-gray-700">
      <i className="fas fa-ellipsis-h"></i>
    </button>
  </div>

  {/* Location */}
  <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-300">
    <div className="flex items-center space-x-2">
      <span className="text-gray-500 text-sm">Lives in:</span>
      <span className="font-medium">New Hampshire</span>
    </div>
    <button className="text-gray-500 hover:text-gray-700">
      <i className="fas fa-ellipsis-h"></i>
    </button>
  </div>

  {/* Joined Date */}
  <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-300">
    <div className="flex items-center space-x-2">
      <span className="text-gray-500 text-sm">Joined on:</span>
      <span className="font-medium">Nov 26, 2019</span>
    </div>
    <button className="text-gray-500 hover:text-gray-700">
      <i className="fas fa-ellipsis-h"></i>
    </button>
  </div>

  {/* Email */}
  <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-300">
    <div className="flex items-center space-x-2">
      <span className="text-gray-500 text-sm">Email:</span>
      <span className="font-medium">abc@xyz.com</span>
    </div>
    <button className="text-gray-500 hover:text-gray-700">
      <i className="fas fa-ellipsis-h"></i>
    </button>
  </div>

  {/* Add Workplace */}
  <div className="flex items-center justify-center bg-gray-200 p-4 rounded-lg border border-dashed cursor-pointer">
    <span className="text-gray-500 text-sm">+ Add a workplace</span>
  </div>

  {/* Add Education */}
  <div className="flex items-center justify-center bg-gray-200 p-4 rounded-lg border border-dashed cursor-pointer">
    <span className="text-gray-500 text-sm">+ Add an education</span>
  </div>
</div>

   </div>
</>  )
}

export default About