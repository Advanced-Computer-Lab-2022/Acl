const mongoose = require("mongoose");
const RefundRequestSchema = new mongoose.Schema(
    {
      trainee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "individualTrainee.model",
        required: true,
      },
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses",
        required: true,
      },
      status: {
        type: String,
        required: true,
        default: "pending",
      },
    },
  
    { timestamps: true }
  );
  const Refunds = mongoose.model("Refunds", RefundRequestSchema);
  module.exports = Refunds;