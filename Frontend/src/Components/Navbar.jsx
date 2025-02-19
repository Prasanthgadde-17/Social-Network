import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar p-3 flex items-center justify-between">
        {/* Logo & Search Section */}
        <div className="logo-section flex items-center gap-3">
          <div className="logo h-9 w-9 flex items-center justify-center text-2xl">
            <IoLogoHtml5 />
          </div>
          <div className="input flex items-center bg-gray-100 h-10 w-66 gap-2 rounded-lg px-3">
            <CiSearch />
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none bg-transparent w-full"
            />
          </div>
        </div>

        {/* Profile & Icons Section */}
        <div className="profile flex items-center gap-5">
          <div className="profile-item">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium text-lg"
                  : "link font-medium text-lg"
              }
            >
              Profile
            </NavLink>
          </div>
          <div className="mynetwork">My Network</div>
          <div className="messageicon">My Icon</div>

          {/* Icon Section */}
          <div className="icon-section flex gap-2">
            <div className="icondiv">
              <IoChatbox />
            </div>
            <div
              className="icondiv"
              onClick={() => navigate("/settings")}
              style={{ cursor: "pointer" }}
            >
              <IoMdSettings />
            </div>{" "}
            <div className="icondiv">
              <FaBell />
            </div>
            <div className="icondiv">P</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
