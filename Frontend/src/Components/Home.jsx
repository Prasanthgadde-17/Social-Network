import Homemiddle from "./Homemiddle";
import "./Home.css";
import Homeleft from "./Homeleft";
import Homeright from "./Homeright";
function Home() {
  return (
    <>
      <div className="homecontainer">
        <div className="about bg-white">
          <Homeleft />
        </div>
        <div className="post ">
          <Homemiddle />
        </div>
        <div className="suggestions ">
          <Homeright />
        </div>
      </div>
    </>
  );
}


export default Home;
