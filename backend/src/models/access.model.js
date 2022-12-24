const mongoose = require("mongoose");
const Accessschema=new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses",
        required: true,
      },
      corporatetrainee:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "corporateTrainee",
        required: true,
      },
      status:{
        type:String,
        default:"Pending",
      },

}
    );
    const Access = mongoose.model(
        "access",
        Accessschema,
    );
    module.exports = Access;
