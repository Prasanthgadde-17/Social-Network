import { useState } from "react";
import axios from "axios";
const AccountSettings = () => {
  const token = localStorage.getItem("token");
  const apiurl = import.meta.env.VITE_API_URL;

  const [userupdate ,setupdate] =useState({
    name:"",bio:"",role:"",about:""
  })
  const handlesubmit =async() =>{

    const update =await axios.put(`${apiurl}/user/mydata`,userupdate,{headers:{
      Authorization:`Bearer ${token}`
      
    }})
    alert("sucessfully updated")
    console.log(update)
  }
  
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>

      <div className="bg-white rounded-lg shadow-md p-6"> 
        <div className="grid grid-cols-3 gap-4"> 
          <div>
            {/* User Name */}
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2"> Name</label>
            <input type="text" id="name" className="border border-gray-300 rounded-md px-3 py-2 w-full" onChange={(e)=>{
              setupdate({...userupdate,name:e.target.value})
            }}
            value={userupdate.name} />
          </div>
          <div>
            {/* User Role */}

            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Role</label>
            <input type="text" id="role" className="border border-gray-300 rounded-md px-3 py-2 w-full"onChange={(e)=>{
              setupdate({...userupdate,role:e.target.value})
            }}
            value={userupdate.role}  />
          </div>
          <div>
            {/* User Role */}

            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Bio</label>
            <input type="text" id="Bio" className="border border-gray-300 rounded-md px-3 py-2 w-full"onChange={(e)=>{
              setupdate({...userupdate,bio:e.target.value})
            }}
            value={userupdate.bio}   />
          </div>
        </div>

          {/* User Bio */}

        

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <textarea id="about" className="border border-gray-300 rounded-md px-3 py-2 w-full h-20" placeholder="Enter About text here..." onChange={(e)=>{
              setupdate({...userupdate,about:e.target.value})
            }}
            value={userupdate.about} ></textarea>
        </div>

        {/* Save Changes Button */}
        <div className="mt-6 text-right">
          <button onClick={handlesubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;