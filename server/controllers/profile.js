const Profile = require("../models/profile");
const asyncHandler = require("express-async-handler");

// @route POST /profile/create
// @desc create new Profile
exports.createProfile=asyncHandler(async(req,res,next)=>{
    const  userId = req.user.id;

    const profileExists = await Profile.findOne({ userId });
  
    if (profileExists) {
      res.status(400);
      throw new Error("A user with that profile already exists");
    }
    const {
        firstName,
        lastName,
        description,
        phoneNo,
        photoUrl,
        city,
        dateOfBirth,
        avaliabilty
    }=req.body;

  const newProfile= await Profile.create({
        firstName,
        lastName,
        description,
        phoneNo,
        photoUrl,
        city,
        dateOfBirth,
        avaliabilty
    })
    if (newProfile) {
        res.status(201).json({
          success: {
            newProfile
            }
        });
      } else {
        res.status(500);
        throw new Error("Invalid profile data");
      }
});

// @route get /profile/get
// @desc user Profile
// @access Private
exports.getProfile = asyncHandler(async (req, res, next) => {
  
    const allProfile = await Profile.find({});
  
    if (allProfile) { 
      res.status(200).json({allProfile});
    } else {
      res.status(204).json({});
      throw new Error("No Profile found");
    }
  });

  // @route get /profile/getById
// @desc user Profile
// @access Private
exports.getProfileById = asyncHandler(async (req, res, next) => {
    const profileId=req.params.profileId;
    const profile = await Profile.findById({profileId});
  
    if (profile) { 
      res.status(200).json({profile});
    } else {
      res.status(404);
      throw new Error("Profile not found");
    }
  });

  // @route POST /profile/update
// @desc update  Profile
exports.updateProfile=asyncHandler(async(req,res,next)=>{
    const  userId  = req.query.id;

    const {
        firstName,
        lastName,
        description,
        phoneNo,
        photoUrl,
        email,
        city,
        dateOfBirth,
        avaliabilty
    }=req.body;
  const updateProfile= await Profile.findByIdAndUpdate(
      userId
  ,{
        firstName,
        lastName,
        description,
        phoneNo,
        photoUrl,
        email,
        city,
        dateOfBirth,
        avaliabilty
    },
    {new:true},
    )
    if (updateProfile) {
        res.status(201).json({
          success: {
            updateProfile
            }
        });
      } else {
        res.status(500);
        throw new Error("Invalid profile data");
      }
});