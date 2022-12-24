const Admin = require("../models/adminstrator.model");
const instructor = require("../models/instructor.model");
const CorTrainee = require("../models/cortrainee.model");
const courses = require("../models/courses");
const trainee = require("../models/individualTrainee.model");
const refund = require("../models/refundRequest");
const course = require("../models/courses");
const access = require("../models/access.model");

const PORT = process.env.PORT;

const cors = require("cors");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const bcrypt1 = require("bcrypt"); //hash for password
const jwt = require("jsonwebtoken");
const maxAge = 3 * 24 * 60 * 60;
const createToken = (name) => {
  return jwt.sign({ name }, "supersecret", {
    expiresIn: maxAge,
  });
};
const createAdmin = async (req, res) => {
  const { username, password, admin } = req.body;
  try {
    const salt = await bcrypt1.genSalt();
    const hashedPassword = await bcrypt1.hash(password, salt);
    const user = await instructor.create({
      username: username,
      password: hashedPassword,
      admin: admin,
    });
    const token = createToken(user.username);

    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const createInstructor = async (req, res) => {
  const { name, username, country, email, password, coursesGiven } = req.body;
  try {
    const salt = await bcrypt1.genSalt();
    const hashedPassword = await bcrypt1.hash(password, salt);
    const user = await instructor.create({
      name: name,
      username: username,
      email: email,
      password: hashedPassword,
      country: country,
      coursesGiven: coursesGiven,
    });
    const token = createToken(user.name);

    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const createCorTrainee = async (req, res) => {
  const { username, country, email, password } = req.body;
  try {
    const salt = await bcrypt1.genSalt();
    const hashedPassword = await bcrypt1.hash(password, salt);
    const user = await CorTrainee.create({
      username: username,
      email: email,
      password: hashedPassword,
      country: country,
    });
    const token = createToken(user.username);

    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//my7taga tetzabat
const definepromotion = async (req, res) => {
  let { title, discountamount, startdate, enddate } = req.body;
  const today = new Date();
  const endate = new Date(enddate);
  if (today >= endate) {
    discountamount = 0;
  }
  try {
    const c = await courses.findOne({ title: title });
    const d = c.discount;
    c.discount.map((d) => {
      if (d.discountamount > 0) {
        res
          .status(200)
          .json("There's already a discount issued to this course.");
      } else {
        courses.findOneAndUpdate(
          { title: title },
          {
            $set: {
              discount: {
                discountamount: discountamount,
                startdate: startdate,
                enddate: enddate,
              },
            },
          }
        );
        console.log(today);
        res.status(200).json(discountamount + " %");
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
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

const viewAccessRequests = async (req, res) => {
  const requests = await access.find();
  res.status(200).json(requests);
};

const declineAccess = async (req, res) => {
  const id = req.params.id;
  const result = await access.findOneAndUpdate(
    { _id: id },
    { statud: "declined" }
  );
  res.status(200).json(result);
};

const approveAccess = async (req, res) => {
  const id = req.params.id;
  const request = await access.findOne({ _id: id });
  const courseId = request.courseId;
  const traineeId = request.corporatetrainee;

  if (request.status == "pending") {
    const updatedTrainee = await trainee.updateOne(
      { _id: traineeId },
      { $addToSet: { courses: { _id: courseId } } }
    );
    if (!updatedTrainee) {
      console.log("error");
      return res.status(400).json({ error: "Cannot refund" });
    }

    const result = await access.updateOne(
      { _id: id },
      { $set: { status: "approved" } }
    );
    res.status(200).json(result);
  } else {
    res.status(200).send("already approved before");
  }
};

module.exports = {
  createInstructor,
  createCorTrainee,
  createAdmin,
  approveRefund,
  declineRefund,
  viewRefundRequests,
  viewAccessRequests,
  declineAccess,
  approveAccess,
  definepromotion,
};
