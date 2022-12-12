const mongoose = require("mongoose");
const courses = require("./courses");


const corporateTraineeSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: false,
      },
      password: {
        type: String,
        required: true,
      },
      courses: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'courses',
        required: false,
      },
      email: {
        type: String,
        required: true,
      },
      resetPasswordToken:{type: String,
        required: false,},
  
        resetPasswordExpires:{type: Date,
        required: false,},
        solution:[{
          type: mongoose.Schema.Types.ObjectId,
          ref:'Courses',
        selectedChoice:Array
        }],
      
    },
    { timestamps: true }
  );
  const corporateTrainee = mongoose.model("corporateTrainee", corporateTraineeSchema);
  module.exports = corporateTrainee;