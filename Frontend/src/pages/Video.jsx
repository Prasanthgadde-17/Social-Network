import { FiPlus } from "react-icons/fi";
import { FaCamera } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdOutlineInsertComment } from "react-icons/md";

// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";
// import video3 from "../assets/video3.mp4";
// import video4 from "../assets/video4.mp4";
// import video5 from "../assets/video5.mp4";
// import video6 from "../assets/video6.mp4";

function Videos() {
  return (
    <>
      <div className="mainvideos p-4 bg-white rounded-lg shadow-md mt-5">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 w-full">
          <h2 className="text-lg font-semibold">Videos</h2>
          <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 bg-sky-300 p-1 boder rounded">
          <FiPlus />
            <span>Create album</span>
          </button>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* Add Video */}
          <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-36">
            <button className="flex flex-col items-center text-blue-500 hover:text-blue-700">
              <FaCamera />
              <span>Add Video</span>
            </button>
          </div>

          {/* Video 1 */}
          <div className="relative">
            <video
            //   src={video1}
              className="rounded-lg object-cover h-36 w-full"
              controls
            ></video>
            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-2 rounded-b-lg">
              <div className="flex gap-5 items-center">
                {/* Heart Icon and Count */}
                <div className="flex items-center space-x-1">
                  <FaHeart className="text-red-500" />
                  <span>22K</span>
                </div>
                {/* Comment Icon and Count */}
                <div className="flex items-center space-x-1">
                    <MdOutlineInsertComment />
                  <span>3K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video 2 */}
          <div className="relative">
            <video
            //   src={video2}
              className="rounded-lg object-cover h-36 w-full"
              controls
            ></video>
            <div className="absolute bottom-2 left-2 flex items-center text-white space-x-3">
              <div className="flex items-center space-x-1">
              <FaHeart className="text-red-500" />
              <span>32K</span>
              </div>
              <div className="flex items-center space-x-1">
              <MdOutlineInsertComment />
              <span>12K</span>
              </div>
            </div>
          </div>

          {/* Video 3 */}
          <div className="relative">
            <video
            //   src={video3}
              className="rounded-lg object-cover h-36 w-full"
              controls
            ></video>
            <div className="absolute bottom-2 left-2 flex items-center text-white space-x-3">
              <div className="flex items-center space-x-1">
              <FaHeart className="text-red-500" />
              <span>21K</span>
              </div>
              <div className="flex items-center space-x-1">
              <MdOutlineInsertComment />
              <span>4K</span>
              </div>
            </div>
          </div>

          {/* Video 4 */}
          <div className="relative">
            <video
            //   src={video4}
              className="rounded-lg object-cover h-36 w-full"
              controls
            ></video>
            <div className="absolute bottom-2 left-2 flex items-center text-white space-x-3">
              <div className="flex items-center space-x-1">
              <FaHeart className="text-red-500" />
              <span>32K</span>
              </div>
              <div className="flex items-center space-x-1">
              <MdOutlineInsertComment />
              <span>16K</span>
              </div>
            </div>
          </div>

          {/* Video 5 */}
          <div className="relative">
            <video
            //   src={video5}
              className="rounded-lg object-cover h-36 w-full"
              controls
            ></video>
            <div className="absolute bottom-2 left-2 flex items-center text-white space-x-3">
              <div className="flex items-center space-x-1">
              <FaHeart className="text-red-500" />
              <span>20K</span>
              </div>
              <div className="flex items-center space-x-1">
              <MdOutlineInsertComment />
              <span>8K</span>
              </div>
            </div>
          </div>

          {/* Video 6 */}
          <div className="relative ">
            <video
            //   src={video6}
              className="rounded-lg object-cover h-36 w-full"
              controls
            ></video>
            <div className="absolute bottom-2 left-2 flex items-center text-white space-x-3 ">
              <div className="flex items-center space-x-1 ">
              <FaHeart className="text-red-500" />
              <span>56K</span>
              </div>
              <div className="flex items-center space-x-1">
              <MdOutlineInsertComment />
              <span>12K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Videos;
