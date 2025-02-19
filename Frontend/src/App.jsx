import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Profile from "./Components/Profile/Profile.jsx";
import Addpost from "./Components/Addpost.jsx";
import About from "./pages/About.jsx";
import Photos from "./pages/Photos.jsx";
import Videos from "./pages/Video.jsx";
import Event from "./pages/Event.jsx";
import Setting from "./pages/Settings/Settings.jsx";
import Connections from "./pages/Connections.jsx";
import Activity from "./pages/Activity.jsx";
import Signup from "./pages/Authpages/Signup.jsx";
import Login from "./pages/Authpages/Login.jsx";
import axios from "axios";
import { createContext } from "react";

export const UserContext = createContext();


function App() {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const apiurl = import.meta.env.VITE_API_URL;
  const mydata = async ()=> {
    const userdata= await axios.get(`${apiurl}/user/mydata`,{headers:{
      Authorization:`Bearer ${token}`
    }});
    return userdata.data

  }

  // Define the paths where the Navbar should not be displayed
  const noNavbarPaths = ["/signup", "/login"]; // Add "/login" if you have a login page

  return (
    <UserContext.Provider value={mydata}>
    <>
      {/* Render Navbar only if the current path is not in noNavbarPaths */}
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="feed" element={<Addpost />} />
          <Route path="about" element={<About />} />
          <Route path="photos" element={<Photos />} />
          <Route path="videos" element={<Videos />} />
          <Route path="events" element={<Event />} />
          <Route path="connections" element={<Connections />} />
          <Route path="activity" element={<Activity />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/settings" element={<Setting />} />
      </Routes>
    </>
    </UserContext.Provider>
  );
}

export default App;
