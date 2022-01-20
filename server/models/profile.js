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
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
    },
    photoUrl: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    DateOfBirth: {
        type: String,
        required: true
    },
    avaliabilty: [avaliableTime],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});
module.exports = Profile = mongoose.model("Profile", profileSchema);