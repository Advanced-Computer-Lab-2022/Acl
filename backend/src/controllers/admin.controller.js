const Admin = require("../models/adminstrator.model");
const instructor = require("../models/instructor.model");
const CorTrainee = require("../models/cortrainee.model");
const trainee = require("../models/individualTrainee.model");
const refund = require("../models/refundRequest");
const course = require("../models/courses");

const createAdmin = async (req, res) => {
  try {
    const data = new Admin({
      username: req.body.username,
      password: req.body.password,
      admin: req.body.admin,
    });
    const val = await data.save();
    return res.status(200).json(val);
  } catch (error) {
    return res.status(402).json({
      error: error,
    });
  }
};
const createInstructor = async (req, res) => {
  const data = new instructor({
    name: req.body.name,
    username: req.body.username,
    country: req.body.country,
    password: req.body.password,
    coursesGiven: req.body.coursesGiven,
    email: req.body.email,
    //    biography:req.body.biography,
    //    profileViews:req.body.profileViews,
    //    wallet:req.body.wallet,
    //    profit:req.body.profit
  });
  data.save().then((result) => res.status(200).send(result));
};
const createCorTrainee = async (req, res) => {
  try {
    const data = new CorTrainee({
      username: req.body.username,
      password: req.body.password,
    });
    const val = await data.save();
    return res.status(200).json(val);
  } catch (error) {
    return res.status(402).json({
      error: error,
    });
  }
};

const approveRefund = async (req, res) => {
  const id = req.params.id;
  const request = await refund.findOne({ _id: id });
  const courseId = request.course;
  const traineeId = request.trainee;
  const Course = await course.findOne({ _id: courseId });
  const price = Course.price;
  const Trainee = await trainee.findOne({ _id: traineeId });
  if (request.status == "pending") {
    const updatedWallet = await trainee.updateOne(
      { _id: traineeId },
      { $set: { wallet: Trainee.wallet + price } }
    );
    if (!updatedWallet) {
      console.log("error");
      return res.status(400).json({ error: "Cannot refund" });
    }
    const removeCourse = await trainee.updateOne(
      { _id: traineeId },
      { $pull: { courses: { _id: courseId } } }
    );

    const result = await refund.updateOne(
      { _id: id },
      { $set: { status: "approved" } }
    );
    res.status(200).json(result);
  } else {
    res.status(200).send("already approved before");
  }
};

const declineRefund = async (req, res) => {
  const id = req.params.id;
  const result = await refund.findOneAndUpdate(
    { _id: id },
    { statud: "declined" }
  );
  res.status(200).json(result);
};

const viewRefundRequests = async (req, res) => {
  const requests = await refund.find();
  res.status(200).json(requests);
};

module.exports = {
  createInstructor,
  createCorTrainee,
  createAdmin,
  approveRefund,
  declineRefund,
  viewRefundRequests,
};
