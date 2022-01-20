const Profile = require("../models/profile");
const asyncHandler = require("express-async-handler");
const profile = require("../models/profile");

// @route POST /profile/create
// @desc create new Profile
exports.createProfile=asyncHandler(async(req,res,next)=>{
    const { user } = req.user.id;

    const profileExists = await profile.findOne({ user });
  
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
        email,
        city,
        DateOfBirth,
        avaliabilty
    }=req.body;

  const newProfile= await profile.create({
        firstName,
        lastName,
        description,
        phoneNo,
        photoUrl,
        email,
        city,
        DateOfBirth,
        avaliabilty,
        user
    })
    if (newProfile) {
        res.status(201).json({
          success: {
              id: newProfile._id,
            }
        });
      } else {
        res.status(400);
        throw new Error("Invalid profile data");
      }
});

// @route get /profile/get
// @desc user Profile
// @access Private
exports.getProfile = asyncHandler(async (req, res, next) => {
  
    const allProfile = await profile.find({});
  
    if (allProfile) { 
      res.status(200).json({allProfile});
    } else {
      res.status(401);
      throw new Error("Profile not found");
    }
  });

  // @route get /profile/getById
// @desc user Profile
// @access Private
exports.getProfileById = asyncHandler(async (req, res, next) => {
    const profileId=req.query.profileId;
    const profile = await profile.findById({profileId});
  
    if (profile) { 
      res.status(200).json({profile});
    } else {
      res.status(401);
      throw new Error("Profile not found");
    }
  });

  // @route POST /profile/update
// @desc update  Profile
exports.updateProfile=asyncHandler(async(req,res,next)=>{
    const  profileId  = req.query.id;

    const {
        firstName,
        lastName,
        description,
        phoneNo,
        photoUrl,
        email,
        city,
        DateOfBirth,
        avaliabilty
    }=req.body;
  const updateProfile= await profile.findByIdAndUpdate(
      profileId
  ,{
        firstName,
        lastName,
        description,
        phoneNo,
        photoUrl,
        email,
        city,
        DateOfBirth,
        avaliabilty,
        user
    })
    if (updateProfile) {
        res.status(201).json({
          success: {
              id: updateProfile._id,
            }
        });
      } else {
        res.status(400);
        throw new Error("Invalid profile data");
      }
});