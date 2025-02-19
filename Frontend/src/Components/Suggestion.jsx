import { useEffect, useState } from "react";
import FriendSuggestion from "./FriendSuggestion";
import axios from "axios";

function Suggestion() {
    const token = localStorage.getItem("token");

  const [suggest, setSuggest] = useState([]);
  const api_url = import.meta.env.VITE_API_URL;

  const suggestiondata = async () => {
    try {  
      const response = await axios.get(`${api_url}/user/allusers`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
  
      setSuggest(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };
  

  useEffect(() => {
    suggestiondata();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-lg font-bold text-black mb-4">Who to Follow</h1>
        {suggest.map((ele, index) => (
          <FriendSuggestion sugg={ele} key={index} />
        ))}
      </div>
    </>
  );
}

export default Suggestion;
