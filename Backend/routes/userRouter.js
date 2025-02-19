const express = require("express");
const User = require("../Model/User.js");
const auth = require("../Middleware/authMiddleware.js");

const router = express.Router();

router.get("/mydata", auth, async (req, res) => {
  const user = await User.findOne({ _id: req.user.id });
  res.json(user);
});

router.put("/mydata", auth, async (req, res) => {
   try {
    const data = req.body;
    const updatedata = await User.findByIdAndUpdate(req.user.id, data, {
      new: true,
      runValidators: true,
    });
    res.json(updatedata);
   } catch (error) {
    res.status(500).json({message:error})
   }
   
});


router.get("/allusers", auth, async (req, res) => {  
  try {
    const userId = req.user.id; 
    const people = await User.find({ _id: { $ne: userId } }).select("-password");
    res.send(people);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});


router.put("/:id/follow",  auth , async(req, res)=>{
   const random_id = req.params.id;
   const current_id = req.user.id;
   await User.findByIdAndUpdate(current_id,{$addToSet:{followers:random_id}},{new:true,runValidators:true})

   await User.findByIdAndUpdate(random_id,{$addToSet:{following:current_id}},{new:true,runValidators:true})

})


module.exports = router;
