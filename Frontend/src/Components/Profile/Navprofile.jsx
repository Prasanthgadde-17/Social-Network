import { NavLink } from "react-router-dom";
import "./Navprofile.css";

function Navprofile() {
  return (
    <div className="nav flex flex-row ml-5 p-2 mb-2">
      <ul className="flex flex-row gap-10">
        <li>
          <NavLink
            to="/profile/feed"
            activeClassName="text-blue-500 "
            className="link font-medium text-lg"
          >
            Feed
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/about"
            activeClassName="text-blue-500 "
            className="link font-medium text-lg"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/connections"
            activeClassName="text-blue-500 "
            className="link font-medium text-lg"
          >
            Connections
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/photos"
            activeClassName="text-blue-500 "
            className="link font-medium text-lg"
          >
            Media
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/videos"
            activeClassName="text-blue-500 "
            className="link font-medium text-lg"
          >
            Videos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/events"
            activeClassName="text-blue-500 "
            className="link font-medium text-lg"
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/activity"
            activeClassName="text-blue-500"
            className="link font-medium text-lg"
          >
            Activity
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navprofile;
