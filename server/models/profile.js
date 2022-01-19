const mongoose = require("mongoose");
const avaliableTime = new mongoose.Schema({
    avaliableDay: {
        type: Date,
        required: true,
    },
    timeTo: {
        type: String,
        required: true,
    },
    timeFrom: {
        type: String,
        required: true
    },
})
const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    phoneNo: {
        type: Number,
        required: false,
    },
    photoUrl: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    DateOfBirth: {
        type: String,
        required: false
    },
    avaliabilty: [avaliableTime],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
});
module.exports = Profile = mongoose.model("Profile", profileSchema);