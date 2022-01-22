const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { createProfile,updateProfile,getProfile,getProfileById } = require("../controllers/profile");
const { validateProfile } = require("../validate");
router.route("/").get(protect, getProfile);
router.route("/:profileId").get(protect, getProfileById);
router.route("/create").post(validateProfile, createProfile);
router.route("/update").put(validateProfile, updateProfile);


module.exports = router;