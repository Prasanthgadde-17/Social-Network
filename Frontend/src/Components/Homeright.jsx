import NewsItem from "./NewsItem";
import Suggestion from "./Suggestion";

function Homeright() {
  return (
    <div className="home-right-container flex flex-col gap-5">
      {/* Who to Follow Section */}
      <div className="followSuggestions bg-white p-5 rounded-lg shadow-sm">
        < Suggestion />
      </div>

      {/* News Section */}
      <div className="news bg-white p-5 rounded-lg shadow-sm">
        <NewsItem />
      </div>
    </div>
  );
}

export default Homeright;