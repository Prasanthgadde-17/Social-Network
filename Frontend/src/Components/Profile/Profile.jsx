import "./Profile.css";
import Profileleft from "./Profileleft";
import Profileright from "./Profileright";
function Profile() {
  return (
    <>
      <div className="profilecontainer ">
        <div className="profile bg-white w-full rounded-lg">
          <Profileleft />
        </div>

        <div className="profile-info56 mr-30">
          <Profileright />
        </div>
      </div>
    </>
  );
}

export default Profile;
