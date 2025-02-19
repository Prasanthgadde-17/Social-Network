import person3 from "../assets/photo3.png";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";
const FriendSuggestion = ({ sugg }) => {
  const api_url = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  const follow = async () => {
    try {
     const foll= await axios.put(`${api_url}/user/${sugg._id}/follow`,{}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
       
      });
      console.log(foll)
    } catch (error) {
      console.error("Error fetching sugession:", error);
    }
  };

  return (
    <div className="friend-container space-y-3  ">
      <div className="friend flex items-center justify-between p-3 hover:bg-gray-200 rounded-lg transition-colors bg-gray-100 mt-4">
        {/* Profile Image and Details */}
        <div className="profile-img flex items-center gap-2">
          <img
            src={person3}
            alt="img"
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
          />
          <div className="profile-details">
            <h2 className="text-sm font-semibold text-gray-800">{sugg.name}</h2>
            <h3 className="text-xs text-gray-500">{sugg.bio}</h3>
          </div>
        </div>

        {/* Add Button */}
        <button
          onClick={() => {
            follow();
          }}
          className="p-2 bg-blue-50 hover:bg-blue-400 text-blue-600 rounded-full transition-colors cursor-pointer"
        >
          <IoMdAdd size={18} />
        </button>
      </div>
    </div>
  );
};

export default FriendSuggestion;
