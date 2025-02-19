import img1 from "../assets/cover.png";
const Event = () => {
  const upcomingEvent = {
    title: "The Learning Conference",
    date: "Sep 19, 2024",
    time: "Full Day", // Or specific time
    location: "San Francisco", // Or specific location details
    description:
      "A conference focused on innovative learning techniques and strategies.", // Optional description
  };

  const comedyEvent = [
    {
      title: "Comedy on the Green",
      date: "Mon, Sep 25, 2020",
      time: "9:30 AM",
      location: "San Francisco",
      attendees: 77,
      image: img1, // Optional image filename
    },
    {
      title: "Comedy on the Green",
      date: "Mon, Sep 25, 2020",
      time: "9:30 AM",
      location: "San Francisco",
      attendees: 77,
      image: img1, // Optional image filename
    },
  ];

  return (
    <div className="container mx-auto p-4 mt-5 bg-white">
      <div className="mb-4 bg-green-100 border border-green-400 rounded-lg p-4 flex items-center justify-between">
        {" "}
        {/* Margin bottom, background color, border, rounded corners, padding, flexbox for alignment */}
        <div>
          <h3 className="text-lg font-semibold">{upcomingEvent.title}</h3>{" "}
          {/* Title with larger font size and bold */}
          <p className="text-sm text-gray-600">
            {upcomingEvent.date} - {upcomingEvent.location}
          </p>{" "}
          {/* Date and location with smaller font size and gray color */}
        </div>
        <div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
            {" "}
            {/* Button styles */}
            View event
          </button>
          <button className="text-gray-600 hover:text-gray-800 font-bold">
            X
          </button>{" "}
          {/* Close button styles */}
        </div>
      </div>
      {/* Comedy Event Cards - Vertical Layout */}
      <div className="flex flex-col gap-4">
        {" "}
        {/* Use flex-col for vertical stacking */}
        {comedyEvent.map((event) => (
          <div
            key={event.title}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {" "}
            {/* Removed w-full sm:w-1/2 ... */}
            <div className="flex ">
              {" "}
              {/* Added a flex row for image and content */}
              <img
                src={event.image}
                alt={event.title}
                className="w-48 h-30 p-4 object-cover "
              />{" "}
              {/* Fixed image size */}
              <div className="p-4 flex flex-col justify-between">
                {" "}
                {/* Content area */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span className="material-symbols-outlined mr-1">
                      event
                    </span>
                    <span>
                      {event.date} at {event.time}
                    </span>
                    <span className="mx-2">|</span>
                    <span className="material-symbols-outlined mr-1">
                      location_on
                    </span>
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  {" "}
                  {/* "Going" and "..." */}
                  <div className="flex items-center">
                    <span className="material-symbols-outlined mr-1">
                      group
                    </span>
                    <span>{event.attendees} going</span>
                  </div>
                  <button className="text-gray-600">...</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
