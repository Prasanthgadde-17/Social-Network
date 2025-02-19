import { FiPlus } from "react-icons/fi";
import { FaCamera } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import img1 from "../assets/photo1.png"
import img2 from "../assets/photo2.png"
import img3 from "../assets/photo3.png"
import img4 from "../assets/photo4.png"
import img5 from "../assets/photo1.png"
import img6 from "../assets/photo2.png"


function Photos() {
  return (
    <>
<div className="mainphotos p-4 bg-white rounded-lg shadow-md mt-10">
  {/* Header */}
  <div className="flex justify-between items-center mb-9 w-full">
    <h2 className="text-lg font-semibold">Photos</h2>
    <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 bg-sky-300 p-1 boder rounded">
        <FiPlus />
      <span >Create album</span>
    </button>
  </div>

  {/* Photos Grid */}
  <div className="grid grid-cols-3 gap-4">
    {/* Add Photo */}
    <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-36">
      <button className="flex flex-col items-center text-blue-500 hover:text-blue-700">
        <FaCamera />
        <span>Add photo</span>
      </button>
    </div>

    {/* Photo 1 */}
    <div className="relative">
  <img src={img1} alt="Photo 1" className="rounded-lg object-cover h-36 w-full" />
  
  {/* Overlay Content */}
  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-2 rounded-b-lg">
    <div className="flex justify-between">
      
      {/* Heart Icon and Count */}
      <div className="flex items-center space-x-1">
        <FaHeart className="text-red-500" />
        <span>22K</span>
      </div>
      
      {/* Comment Icon and Count */}
      <div className="flex items-center space-x-1">
        <i className="fas fa-comment"></i>
        <span>3K</span>
      </div>
    </div>
  </div>
</div>


    {/* Photo 2 */}
    <div className="relative">
      <img src={img2} alt="Photo 2" className="rounded-lg object-cover h-36 w-full" />
      <div className="absolute bottom-2 left-2 flex items-center text-white space-x-3">
        <div className="flex items-center space-x-1">
          <i className="fas fa-heart text-red-500"></i>
          <span>32K</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fas fa-comment"></i>
          <span>12K</span>
        </div>
      </div>
    </div>

    {/* Photo 3 */}
    <div className="relative">
      <img src={img3} alt="Photo 3" className="rounded-lg object-cover h-36 w-full" />
      <div className="absolute bottom-2 left-2 flex items-center text-white space-x-3">
        <div className="flex items-center space-x-1">
          <i className="fas fa-heart text-red-500"></i>
          <span>21K</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fas fa-comment"></i>
          <span>4K</span>
        </div>
      </div>
    </div>

    {/* Photo 4 */}
    <div className="relative">
      <img src={img4} alt="Photo 4" className="rounded-lg object-cover h-36 w-full" />
      <div className="absolute bottom-2 left-2 flex items-center text-white space-x-3">
        <div className="flex items-center space-x-1">
          <i className="fas fa-heart text-red-500"></i>
          <span>32K</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fas fa-comment"></i>
          <span>16K</span>
        </div>
      </div>
    </div>

    {/* Photo 5 */}
    <div className="relative">
      <img src={img5} alt="Photo 5" className="rounded-lg object-cover h-36 w-full" />
      <div className="absolute bottom-2 left-2 flex items-center text-white space-x-3">
        <div className="flex items-center space-x-1">
          <i className="fas fa-heart text-red-500"></i>
          <span>20K</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fas fa-comment"></i>
          <span>8K</span>
        </div>
      </div>
    </div>

    {/* Photo 6 */}
    <div className="relative">
      <img src={img6} alt="Photo 6" className="rounded-lg object-cover h-36 w-full" />
      <div className="absolute bottom-2 left-2 flex items-center text-white space-x-3">
        <div className="flex items-center space-x-1">
          <i className="fas fa-heart text-red-500"></i>
          <span>56K</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fas fa-comment"></i>
          <span>12K</span>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Photos