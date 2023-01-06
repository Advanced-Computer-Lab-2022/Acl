const Admin = require("../models/adminstrator.model");
const instructor = require("../models/instructor.model");
const CorTrainee = require("../models/cortrainee.model");
const courses = require("../models/courses");
const trainee = require("../models/individualTrainee.model");
const refund = require("../models/refundRequest");
const course = require("../models/courses");
const access = require("../models/access.model");
const indTrainee = require("../models/individualTrainee.model");
const Report = require("../models/report");

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
const editStat = async (req, res) => {
  const status = req.body.status;
  const id=req.params.id
  try {
    const rep= await Report.findByIdAndUpdate(id,
      {
        $set: {
          status: status
        },
      })
      //const all= await Report.find({})
      //console.log(rep);
      const val = await Report.save();

        return res.status(200).json(val);
      
  } catch (error) {
      return res.status(402).json({
          error : error
      });
  }
}

const createAdmin = async (req, res) => {
  const { username, password, admin } = req.body;
  try {
    user = await instructor.findOne({ username });
    user1 = await indTrainee.findOne({ username });
    user2 = await Admin.findOne({ username });
    user3 = await CorTrainee.findOne({ username });
    if (user || user1 || user2 || user3)
      res.status(400).json({ error: "USername Already In Use" });
    else {
      const salt = await bcrypt1.genSalt();
      const hashedPassword = await bcrypt1.hash(password, salt);
      const user = await Admin.create({
        username: username,
        password: hashedPassword,
        admin: admin,
      });
      const token = createToken(user.username);

      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(400).json({ error: "USername Already In Use" });
  }
};
const createInstructor = async (req, res) => {
  const { name, username, country, email, password, coursesGiven } = req.body;
  try {
    user = await instructor.findOne({ username });
    user1 = await indTrainee.findOne({ username });
    user2 = await Admin.findOne({ username });
    user3 = await CorTrainee.findOne({ username });
    if (user || user1 || user2 || user3)
      res.status(400).json({ error: "USername Already In Use" });
    else {
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
    }
  } catch (error) {
    res.status(400).json({ error: "USername Already In Use" });
  }
};
const createCorTrainee = async (req, res) => {
  const { username, country, email, password } = req.body;
  try {
    user = await instructor.findOne({ username });
    user1 = await indTrainee.findOne({ username });
    user2 = await Admin.findOne({ username });
    user3 = await CorTrainee.findOne({ username });
    if (user || user1 || user2 || user3)
      res.status(400).json({ error: "USername Already In Use" });
    else {
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
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//my7taga tetzabat
const definepromotion = async (req, res) => {
   const{id}=req.params;
   console.log(id)
  const {discountamount, startdate, enddate } = req.body;
   try {
  const today = new Date(startdate);
  const endate = new Date(enddate);
  
  if (today >= endate) {
    discountamount = 0;
  }
  var f=0;
    const c = await courses.findById( id );
    //console.log(c)
    const d = c.discount;
   // console.log(d);
    if(d==[]){const marcov=await courses.findByIdAndUpdate(
      id ,
     {
       $set: {discount:{
         
           discountamount: discountamount,
           startdate: startdate,
           enddate: enddate,
         
       },
     }
    }
   );}
  else{const marcov=await courses.findByIdAndUpdate(
    id ,
   {
     $set: {discount:{
       
         discountamount: discountamount,
         startdate: startdate,
         enddate: enddate,
       
     },
   }
  }
 );{
  await Promise.all(d.map(async (e) => {
    if (e.discountamount > 0) {
      console.log("dakhal")
      f=1;
    } else {
      console.log("dakhalhena")
 const marco=await courses.findByIdAndUpdate(
    id ,
   {
     $set: {discount:{
       
         discountamount: discountamount,
         startdate: startdate,
         enddate: enddate,
       
     },
   }
  }
 );
}}));}}
  var se3r=c.price
  var gedid=se3r-(se3r*discountamount/100)
  const marco1=await courses.findByIdAndUpdate(
    id ,
   {price:gedid})
  if(f==1){
  return res.status(200).json("you have already set a promotion for this course before");
   } else{
      return res.status(200).json("you have set a promotion succesfully");
      }
      return res.status(200).json("you have set a promotion succesfully");
    } catch (error) {
   return res.status(400).json({ error: error.message });
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
const viewAllCourses = async (req, res) => {
  const list = await courses.find(courses.title);
  res.status(200).json(list);
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
  console.log(request);
  const courseId = request.courseId;
  const traineeId = request.corporatetrainee;

  if (request.status == "Pending") {
    const updatedTrainee = await CorTrainee.updateOne(
      { _id: traineeId },
      { $addToSet: { courses: { _id: courseId } } }
    );
    if (!updatedTrainee) {
      console.log("error");
      return res.status(400).json({ error: "Cannot approve" });
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
const getAllCorporateReports = async (req, res) => {
  try {
    const reports = await Report.find(
      { corporatetrainee: { $ne: null } },
      {
        name: true,
        type: true,
        course: true,
        corporatetrainee: true,
        Description: true,
        followups: true,
        status: true,
      }
    );
    res.status(200).json(reports);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAllIndividualeReports = async (req, res) => {
  try {
    const reports = await Report.find(
      { individualtrainee: { $ne: null } },
      {
        name: true,
        type: true,
        course: true,
        individualtrainee: true,
        Description: true,
        followups: true,
        status: true,
      }
    );
    res.status(200).json(reports);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAllInstructorReports = async (req, res) => {
  try {
    const reports = await Report.find(
      { instructor: { $ne: null } },
      {
        name: true,
        type: true,
        course: true,
        instructor: true,
        Description: true,
        followups: true,
        status: true,
      }
    );
    res.status(200).json(reports);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateReportStatus = async (reportId, newStatus) => {
  try {
    const result = await Reports.findByIdAndUpdate(reportId, {
      status: newStatus,
    });
    if (!result) {
      return res
        .status(400)
        .json("could not update status for report with id ${reportId}");
    }
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const markProblems1 = async (req, res) => {
  const statusss = req.body.status;
  Report1 = req.query.id;

  try {
    console.log(Report1);
    const problem = await Report.findByIdAndUpdate(Report1, {
      status: statusss,
    });

    res.status(200).json(problem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createInstructor,
  createCorTrainee,
  createAdmin,
  updateReportStatus,
  viewAccessRequests,
  approveRefund,
  declineRefund,
  viewRefundRequests,
  viewAccessRequests,
  declineAccess,
  approveAccess,
  definepromotion,
  getAllCorporateReports,
  getAllIndividualeReports,
  getAllInstructorReports,
  markProblems1,
  viewAllCourses,
  editStat
};
