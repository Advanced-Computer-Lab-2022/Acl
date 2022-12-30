const mongoose = require("mongoose");
const Instructor = require("./instructor.model");
const validate = require("validator");
const{ObjectId}=mongoose.Schema
const coursesSchema = new mongoose.Schema(
    { 
      title: {
        type: String,
        required: true,
        unique:true
      },
      preview:{
        type:[{
          Video:[{youtube_video_link: {
          type: String,
          validate: {
             validator: function(v) {
                  return /^https:\/\/www.youtube.com\/.*$/.test(v);
             },
             message: props => `${props.value} is not a valid youtube link.`
          },
          required: [true, 'Youtube video link is required.']
      },description:String}]}]
      },
      Subtitle: {
        type:[{
        SubName:String,
        durationSub:String,
        exercisesNum:Number,
        Video:[{youtube_video_link: {
          type: String,
          validate: {
             validator: function(v) {
                  return /^https:\/\/www.youtube.com\/.*$/.test(v);
             },
             message: props => `${props.value} is not a valid youtube link.`
          },
          required: [true, 'Youtube video link is required.']
      },
      description:String}]
      }],
      required: true,
      },
      //  type: Array[mongoose.Schema.Types.ObjectId],
    
      price: {
        type: Number,
        required: true,
      },
      summary: {
        type: String,
        required: true,
      },
      duration: {
        type: String ,
        required: false,
      },
      SubtitleDuration:{
        type:String,
        required:false,
      },
      exercise:{
        type:String,
        required:false,
      },
      levelOfCourse: {
        type: String,
        required: false,
      },
      rating: {
        type: Array,
        required: false,
      },
      avgRating:{
        type:Number,
        required:false,
      },
      Subject: {
        type: String,
        required: false,
      },
      InstructorName: {
        type: String,
        required: false,
      },
      discount: {
        type:[{discountamount: Number,
       startdate:Date,
      enddate:Date}],
        required: false,
      },
      numOfVisitors: {
        type: Number,
        required: false,
      },
      Views: {
        type: Number,
        default: 0
      },
  
      mcqExam: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'mcqexams',
      
        required: false,
      }],
      Currency:{ type: String, default: 'EGP' },
      Instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Instructor',

        required: false,
      },
    },
    { timestamps: true }
  );
  const courses = mongoose.model("courses", coursesSchema);
  module.exports = courses;