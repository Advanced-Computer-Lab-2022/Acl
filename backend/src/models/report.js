const mongoose = require("mongoose");

const ReportsSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required: true,
    },
    type:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['unseen','pending','resolved'],
        default:'unseen',
        required: false
    },
    course: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "courses",
          required: true,
        },
      ],
      instructor:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Instructor",
        required: false,
      },
    ],
    individualtrainee:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "IndividualTrainee",
        required: false,
      },
    ],

    corporatetrainee:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "corporateTrainee",
        required: false,
      },
    ],
    followups:{
    type:[{
        number:Number,
        Description:String,
    }]},
    Description:
    {type:String,
    required:true}


    



},




    { timestamps: true }   
);
const Reports = mongoose.model("Reports", ReportsSchema);
module.exports = Reports;