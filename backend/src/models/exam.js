const mongoose = require("mongoose");
const ExamSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    mcq: [
      {
        question: {
          type: String,
          required: true,
        },
        choice1: {
          type: String,
          required: true,
        },
        choice2: {
          type: String,
          required: true,
        },
        choice3: {
          type: String,
          required: true,
        },
        choice4: {
          type: String,
          required: true,
        },
        correct: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);
const mcqExam = mongoose.model("mcqExam", ExamSchema);
module.exports = mcqExam;
