const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { createProfile,updateProfile,getProfile,getProfileById } = require("../controllers/profile");

router.route("/get").get(protect, getProfile);
router.route("/getById").get(protect, getProfileById);
router.route("/create").post(protect, createProfile);
router.route("/update").put(protect, updateProfile);


module.exports = router;