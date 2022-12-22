const mongoose = require("mongoose");
const courses = require("./courses");

const InstructorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: false,
    },
    resetPasswordToken: { type: String, required: false },

    resetPasswordExpires: { type: Date, required: false },

    coursesGiven: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses",
        required: false,
      },
    ],

    biography: {
      type: String,
      required: false,
    },
    profileViews: {
      type: Number,
      required: false,
    },
    wallet: {
      type: Number,
      required: false,
    },
    Rating: {
      Type: Array,
      Required: false,
    },
    avgRating: {
      type: Number,
      required: false,
    },
    resetPasswordToken: { type: String, required: false },

    resetPasswordExpires: { type: Date, required: false },
    Review: {
      Type: Array,
      Required: false,
    },
    profit: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);
const Instructor = mongoose.model("Instructor", InstructorSchema);
module.exports = Instructor;