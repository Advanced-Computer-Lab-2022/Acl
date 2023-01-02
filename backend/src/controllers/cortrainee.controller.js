const corporateTraineeC = require("../models/cortrainee.model");
const courses = require("../models/courses");
const exam = require("../models/exam");
const { default: mongoose } = require("mongoose");
const express = require("express");
var flash = require("express-flash");
var session = require("express-session");
//var mongoose = require('mongoose');
var nodemailer = require("nodemailer");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcrypt-nodejs");
const bcrypt1 = require("bcrypt"); //hash for password
const jwt = require("jsonwebtoken");
var Instructor = require("../models/instructor.model");
var async = require("async");
var reports = require("../models/report");
var crypto = require("crypto");
var access = require("../models/access.model");
PDFDocument = require("pdfkit");
require("dotenv").config();
var rateValue = 0;
var rateValueCourse = 0;
const ChangePass = async (req, res) => {
  const { id } = req.params;
  const password = req.body.password;
  try {
    //await Instructor.findByIdAndUpdate({id,{password: newPass}})
    //  if(!mongoose.Types.ObjectId.isValid(id)){
    //    console.log("dakhalGhalat")
    //  return res.status(404).json({error:"No such Instructor"})
    //}
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("dakhalGhalat");
      return res.status(404).json({ error: "No such CorporateTrainee" });
    } else {
      const salt = await bcrypt1.genSalt();
      const hashedPassword = await bcrypt1.hash(password, salt);

      const pass = await corporateTraineeC.findOneAndUpdate(
        { _id: id },
        { password: hashedPassword },
        { new: true }
      );
      console.log(password);
      if (!pass) {
        console.log("dakhalOut");
        return res.status(400).json({ error: "No such CorporateTrainee" });
      }
    }
    //res.status(200).json(blog)
    console.log("done");
    return res
      .status(200)
      .send({ status: true, Message: "your Password has Changed Succefully" });
    console.log(pass.toString());
    //console.log(password)
  } catch (error) {
    res.status(400).json({ error: error.me });
  }
};
const getCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const resu = await courses.findById(id);
    return res.status(200).json(resu);
  } catch (error) {
    return res.status(400).json({ error: error.me });
  }
};

const GetInst = async (req, res) => {
  const { id } = req.params;

  try {
    const resu = await Instructor.findById(id);
    return res.status(200).json(resu);
  } catch (error) {
    return res.status(400).json({ error: error.me });
  }
};
// const filterAllCoursesSubject = async(req,res)=> {
//     console.log("hi");
//      try{
//         const Courses = await courses.find({$or:[{Subject:req.body.Subject, Rating:req.body.rating}]})
//         //console.log(req.body.rating)
//        // console.log(Courses)
//         res.status(200).json(Courses)
//     }
//     catch(error){
//             res.status(400).json({error:error.message})
//     }
// }
const filterAllCoursesBySubject = async (req, res) => {
  console.log("sahbas");
  try {
    /*const Courses = await courses.find({Instructor:instructord,$or:[{price:pp},{Subject:sub}]})
    res.status(200).json(Courses.map((courses)=>{
        return courses.title+" :  "+courses.price+" :"+courses.Subject+"."
    }))
    console.log(Courses.toString())
        */
    const Courses = await courses.find({
      $or: [
        { Subject: req.query.subject },
        {
          rating: {
            $gt: Math.floor(req.query.rating),
            $lt: Math.floor(req.query.rating) + 1,
          },
        },
      ],
    });
    // console.log(req.body.rating)
    //console.log(Courses)
    res.status(200).json(Courses);
  } catch (error) {
    res.status(400).json({ error: error.me });
  }
};

const viewall = async (req, res) => {
  try {
    const Courses = await courses.find();
    res.status(200).json(Courses);
  } catch (error) {
    console.log();
    return res.status(402).json({ error: error });
  }
};
const viewallSubs = async (req, res) => {
  try {
    const { id } = req.params;
    const Courses = await courses.findById(id);
    res.status(200).json(Courses.Subtitle);
  } catch (error) {
    console.log();
    return res.status(402).json({ error: error });
  }
};
const viewCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const Courses = await courses.findById(id);
    res.status(200).json(Courses);
  } catch (error) {
    console.log();
    return res.status(402).json({ error: error });
  }
};

var isoCountryCurrency = require("iso-country-currency");
const { number } = require("mathjs");
const IndividualTrainee = require("../models/individualTrainee.model");

const selectcountry = async (req, res) => {
  const country = req.body.country;
  const id = req.params.id;
  const currency = isoCountryCurrency.getParamByParam(
    "countryName",
    country,
    "currency"
  );

  try {
    const inst = await Instructor.findByIdAndUpdate(
      id,
      { country },
      { new: true }
    );
    res.status(200).json(inst);
    console.log(currency);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const saveData = async (req, res) => {
  const { data } = req.body;
  try {
    fs.writeFileSync("Notes.txt", data, { encoding: "binary" });
  } catch (err) {
    return res.status(400).json({ error: "something Went wrong" });
  }

  console.log("File written successfully\n");
  console.log("The written has the following contents:");
  console.log(fs.readFileSync("Notes.txt", "utf8"));
  res.status(200).json(data);
};
const findCoursesBasedOn = async (req, res) => {
  try {
    const co = "";
    const { q } = req.query;
    const coursesGiv = await Instructor.findOne({ name: q }, "coursesGiven");
    if (coursesGiv) {
      co = await courses.findOne({ id: coursesGiv });
    }
    const Courses = await courses.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { Subject: { $regex: q, $options: "i" } },
      ],
    });
    console.log(co);
    console.log(Courses);
    //console.log(coursesGiv)
    return res.status(200).json(Courses.concat(co));

    // return res.status(200).json(ayhaga)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const finddCourses = async (req, res) => {
  const { title, Subject, insName } = req.body;
  const ayhaga = [];
  try {
    if (title) {
      const Courses = await courses
        .find({ title: { $regex: title, $options: "i" } })
        .select("title");
      return res.status(200).json(Courses);
    }
    if (Subject) {
      const Courses = await courses
        .find({ Subject: { $regex: Subject, $options: "i" } })
        .select("title");
      return res.status(200).json(Courses);
    }
    if (insName) {
      let i = 0;
      const c = await courses.find({});
      for (let index = 0; index < c.length; index++) {
        const x = c[index];
        if (x) {
          const ins = await Instructor.findById(x.Instructor);
          const na = ins.name;
          console.log(c[3].title);
          if (insName == na) {
            ayhaga[i] = c[index].title;
            i++;
          }
        }
      }
      return res.status(200).json(ayhaga);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const findmyCourses = async (req, res) => {
  const { title, Subject, insName } = req.body;
  const instr = await Instructor.findById(req.params.id);
  const ayhaga = [];
  let i = 0;
  try {
    if (title) {
      const Courses = await courses.find({
        $and: [
          { Instructor: instr.id },
          { title: { $regex: title, $options: "i" } },
        ],
      });
      return res.status(200).json(Courses);
    }
    if (Subject) {
      const Courses = await courses.find({
        $and: [
          { Instructor: instr.id },
          { Subject: { $regex: Subject, $options: "i" } },
        ],
      });
      return res.status(200).json(Courses);
    }
    if (insName) {
      const c = await courses.find({});
      for (let index = 0; index < c.length; index++) {
        const x = c[index];
        const ins = await Instructor.findById(x.Instructor);
        const na = ins.name;
        if (insName == na) {
          ayhaga[i] = c[index];
          i++;
        }
      }
      return res.status(200).json(ayhaga);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const forgetPass = async (req, res) => {
  {
    const user = req.user;
  }
};
const forgetPassPost = async (req, res, next) => {
  async.waterfall(
    [
      function (done) {
        crypto.randomBytes(20, function (err, buf) {
          var token = buf.toString("hex");
          done(err, token);
        });
      },
      function (token, done) {
        corporateTraineeC.findOne(
          { email: req.body.email },
          function (err, user) {
            if (!user) {
              //  req.flash('error', 'No account with that email address exists.');
              return res.redirect("/forgot");
            }

            user.resetPasswordToken = token;
            user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

            user.save(function (err) {
              done(err, token, user);
            });
          }
        );
      },
      function (token, user, done) {
        let testAccount = nodemailer.createTestAccount();
        //clientID     459689521337-pkpimajok78e5f00jhlubvtr28smvm0p.apps.googleusercontent.com
        // create reusable transporter object using the default SMTP transport
        let transport = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: process.env.user,
            pass: process.env.pass,
            clientId: process.env.clientId,
            clientSecret: process.env.clientSecret,
            refreshToken: process.env.refreshToken,
            //accessToken:"ya29.a0AeTM1ieMVZBpenPBICXA6zFObVV3zENDTYEAiEMRxQutN09Fmw1aiKnsYXqWH8z1VZHkOP-X6D4bwwivH91txfzPC730fkVQYNZYlimvuvhHNGxN7LDcavYBWEfDCxB7YGo-vkH44C6yjXqLlYb8t3wa17uFaCgYKAa0SARESFQHWtWOmDzsiOVBe6Tm3hh0v15kMsQ0163"
          },
        });
        var mailOptions = {
          to: user.email,
          from: "kikomarco12345@gmail.com",
          subject: "Node.js Password Reset",
          text:
            "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
            "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
            "" +
            "l" +
            "ocalhost" +
            ":3000/corporatetrainee/reset/" +
            token +
            "\n\n" +
            "If you did not request this, please ignore this email and your password will remain unchanged.\n",
        };
        transport.sendMail(mailOptions, function (error, response) {
          if (error) {
            console.log(error);
          } else {
            console.log("Message sent: " + response.message);
          }
        });
      },
    ],
    function (err) {
      if (err) return next(err);
      res.redirect("/forgot");
    }
  );
};
const resetPost = async (req, res) => {
  try {
    async.waterfall(
      [
        function (done) {
          corporateTraineeC.findOne(
            {
              resetPasswordToken: req.params.token,
              resetPasswordExpires: { $gt: Date.now() },
            },
            async function (err, user) {
              if (!user) {
                //req.flash('error', 'Password reset token is invalid or has expired.');
                //return res.redirect('back');
              }
              const salt = await bcrypt1.genSalt();
              const hashedPassword = await bcrypt1.hash(
                req.body.password,
                salt
              );
              user.password = hashedPassword;
              user.resetPasswordToken = undefined;
              user.resetPasswordExpires = undefined;

              user.save(function (err) {
                // req.logIn(user, function(err) {
                // done(err, user);
                //});
              });
            }
          );
        },
        function (user, done) {
          var smtpTransport = nodemailer.createTransport({
            service: "gmail",
            auth: {
              type: "OAuth2",
              user: process.env.user,
              pass: process.env.pass,
              clientId: process.env.clientId,
              clientSecret: process.env.clientSecret,
              refreshToken: process.env.refreshToken,
              //accessToken:"ya29.a0AeTM1ieMVZBpenPBICXA6zFObVV3zENDTYEAiEMRxQutN09Fmw1aiKnsYXqWH8z1VZHkOP-X6D4bwwivH91txfzPC730fkVQYNZYlimvuvhHNGxN7LDcavYBWEfDCxB7YGo-vkH44C6yjXqLlYb8t3wa17uFaCgYKAa0SARESFQHWtWOmDzsiOVBe6Tm3hh0v15kMsQ0163"
            },
          });
          var mailOptions = {
            to: user.email,
            from: "passwordreset@demo.com",
            subject: "Your password has been changed",
            text:
              "Hello,\n\n" +
              "This is a confirmation that the password for your account " +
              user.email +
              " has just been changed.\n",
          };
          smtpTransport.sendMail(mailOptions, function (err) {
            return res
              .status(200)
              .json("Success! Your password has been changed.");
            done(err);
          });
        },
      ],
      function (err) {
        res.redirect("/");
      }
    );
    return res.status(200).json("Success! Your password has been changed.");
  } catch (error) {
    return res
      .staus(400)
      .json("Password reset token is invalid or has expired.");
  }
};
const reset = async (req, res) => {
  corporateTraineeC.findOne(
    {
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    },
    function (err, user) {
      if (!user) {
        req.flash("error", "Password reset token is invalid or has expired.");
        return res.redirect("/forgot");
      }
      // res.render('reset', {
      // user: req.user
      //});
    }
  );
};

const answerMcq = async (req, res) => {
  const traineeId = req.params.id;
  const examId = req.params.examId;
  const courseId = req.params.courseId;
  const grade = req.params.grade;
  const data = {
    examId: examId,
    grade: grade,
  };
  const Trainee = await corporateTraineeC.updateOne(
    { _id: traineeId, "courses._id": courseId },
    { $push: { "courses.$.examGrades": data } }
  );

  // const Trainee = corporateTraineeC.findOne({ _id: traineeId });
  // for (i = 0; i < Trainee.courses.length; i++) {
  //   if (Trainee.courses[i]._id == courseId) {
  //     Trainee.courses[i].examGrades.push(data);
  //     break;
  //   }
  // }
  res.status(200).json(Trainee);
};
const showAnswers = async (req, res) => {
  const examId = req.params.examId;
  // const Exam = await exam.findOne({ _id: examId });
  const reqExam = await exam.findOne({ _id: examId });
  res.status(200).json(reqExam);
};
const viewMyInst = async (req, res) => {
  const { id } = req.params;
  const myCoursess = [];
  const myInst = [];
  // const Exam = await exam.findOne({ _id: examId });
  const trainee = await corporateTraineeC.findById(id);
  //console.log(trainee.courses)
  await Promise.all(
    trainee.courses.map(async (course) => {
      const Coursess = await courses.findOne({ _id: course._id }, "Instructor");

      if (!myCoursess.includes(Coursess)) {
        myCoursess.push(Coursess);
      }
    })
  );
  await Promise.all(
    myCoursess.map(async (instr) => {
      const Instruct = await Instructor.findById(instr.Instructor);
      //console.log(Instruct)
      if (!myInst.includes(Instruct)) {
        myInst.push(Instruct);
        //console.log(myInst)
      }
    })
  );
  let uniqueChars = [...new Set(myInst)];
  let x = [];
  for (let i = 0; i < uniqueChars.length / 2; i = i + 1) {
    x[i] = uniqueChars[i];
  }

  console.log("");
  res.status(200).json(x);
};
const viewMyCourses = async (req, res) => {
  const id = req.params.id;
  const trainee = await corporateTraineeC.findOne({ _id: id });
  // trainee.courses.map((course) => {
  //   // async () => {
  //     // const courseObj =  await courses.find({ _id: course._id });
  //     //  console.log(courseObj);
  //   //   myCourses.push(courseObj.title);
  //   // };
  // });
  const myCourses=[];
  await Promise.all(
    trainee.courses.map(async (course) => {
      const courseObj = await courses.findOne({ _id: course._id });
      if (myCourses.length < courses.length - 1) {
        myCourses.push(courseObj);
      }
    })
  );
  res.status(200).send(myCourses);
};

const report = async (req, res) => {
  const { id } = req.params;
  const { coursename, reportname, type, description } = req.body;
  const c = await courses.findOne({ title: coursename });
  try {
    reports.create({
      name: reportname,
      type: type,
      course: c,
      corporatetrainee: id,
      Description: description,
    });
    res.status(200).json(id);
    console.log(id);
  } catch (error) {
    res.status(400).json({ error: error.me });
  }
};
const viewreports = async (req, res) => {
  const { id } = req.params;

  try {
    const r = await reports.find({ corporatetrainee: id });

    res.status(200).json(
      r.map((reports) => {
        return "Report : " + reports.name + " , Status : " + reports.status;
      })
    );
  } catch (error) {
    res.status(400).json({ error: error.me });
  }
};
const followups = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    const r = await reports.findOne({
      $and: [{ name: title }, { corporatetrainee: id }],
    });
    if (r.status == "pending" || r.status == "unseen") {
      const { followup, number } = req.body;
      await reports.updateOne(
        { $and: [{ name: title }, { corporatetrainee: id }] },
        {
          $push: {
            followups: {
              number: number,
              Description: followup,
            },
          },
        }
      );
      res.status(200).json(followup);
    } else {
      res.status(200).json("Already Resolved");
    }

    console.log(r.status);
  } catch (error) {
    res.status(400).json({ error: error.me });
  }
};
const requestaccess = async (req, res) => {
  try {
    const { id, id1 } = req.params;
    const data = new access({
      courseId: id1,
      corporatetrainee: id,
    });
    data.save().then((result) => res.status(200).send(result));
  } catch (error) {
    res.status(400).json({ error: error.me });
  }
};
const viewProgress = async (req, res) => {
  const id = req.params.id;
  const courseId = req.params.courseId;
  const trainee = await corporateTraineeC.findOne({ _id: id });
  const courses = trainee.courses;
  let neededCourse;
  for (i = 0; i < courses.length; i++) {
    //console.log(courses[i]);
    if (courses[i]._id == courseId) {
      neededCourse = courses[i];
      //res.status(200).send(courses[i].progress);
      //console.log(courses[i].progress);
    }
  }

  res.status(200).json(neededCourse.progress);
};

const watchVideo = async (req, res) => {
  const traineeId = req.query.traineeId;
  const CourseId = req.query.courseId;
  const videoId = req.query.videoId;
  const Course = await courses.findOne({ _id: CourseId });
  //console.log(CourseId);
  const totalVideos = Course.Subtitle.length;
  //console.log(Course.Subtitle.length);

  const Trainee = await corporateTraineeC.findOne({ _id: traineeId });
  //console.log(Trainee.courses);

  flagV = 0;
  let watchedVideos;
  Trainee.courses.map((course) => {
    if (course._id == CourseId) {
      watchedVideos = course.watchedVideos;
      oldProgress = course.progress;
    }
  });
  for (i = 0; i < watchedVideos.length; i++) {
    if (watchedVideos[i].videoId == videoId) {
      flagV = 1;
    }
  }
  if (flagV == 1) res.status(200).send("You have watched this video before");
  else if (flagV == 0) {
    const updatedWatchedVideos = await corporateTraineeC.updateOne(
      { _id: traineeId, "courses._id": CourseId },
      { $push: { "courses.$.watchedVideos": { videoId } } }
    );

    const newProgress = (watchedVideos.length + 1 / totalVideos) * 100;

    const x = await corporateTraineeC.updateOne(
      { _id: traineeId, "courses._id": CourseId },
      { $set: { "courses.$.progress": newProgress } }
    );
    let neededCourse;
    for (i = 0; i < x.courses.length; i++) {
      if (x.courses[i]._id == courseId) {
        neededCourse = x.courses[i];
      }
    }

    if (neededCourse.progress == 100) {
      const corporateTraineeId = req.params;
      //console.log(corporateTraineeId)
      const corporateTrainee = await corporateTraineeC.findById(
        corporateTraineeId.id
      );
      //console.log(corporateTrainee)
      const email = corporateTrainee.email;

      await corporateTraineeC
        .find({ email: email })
        .then(async (result) => {
          await corporateTraineeC
            .findById(result._id)
            .then((result) => {
              const mail = {
                from: process.env.AUTH_EMAIL,
                to: email,
                subject: "Certificate",
                html: `<p>Congratulations you have completed your course. Here is your certificate</p>`,
                attachments: [
                  {
                    filename: "certificate.pdf",
                    path: "./controllers/certificate.pdf",
                    contentType: "application/pdf",
                  },
                ],
              };

              let transporter = nodemailer.createTransport({
                service: "hotmail",
                auth: {
                  user: process.env.AUTH_EMAIL,
                  pass: process.env.AUTH_PASS,
                },
              });

              transporter
                .sendMail(mail)
                .then(() => {
                  return res
                    .status(200)
                    .json({ status: true, Message: "sent successfully" });
                })
                .catch((error) => {
                  return res.status(400).json({
                    status: false,
                    error: error.message,
                    Message: "Error while sending an email",
                  });
                });
            })
            .catch((error) => {
              return res.status(400).json({
                status: false,
                error: error.message,
                Message: "Error while updating the password",
              });
            });
        })
        .catch((error) => {
          return res.status(400).json({
            status: false,
            error: error.message,
            Message: "this Email is not found or undefined",
          });
        });
    }
    res.status(200).json(x);
  }
};
//42
function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument();
  doc.on("data", dataCallback);
  doc.on("end", endCallback);
  doc.fontSize(25).text("hello world");
  doc.end();
}
//53
const calculateAverageRating = (req, res) => {
  var oldRating = req.query.rating;
  var newRating = req.query.newRating;
  var calculatedRating = +oldRating + +newRating;
  var average = calculatedRating / rateValue;
  // const average: $divide : [ ((req.query.rating )+ (req.query.newRating)), (req.query.ratingCounter) ];

  res.json(average);
};
const rateInstructor = async (req, res) => {
  const { id } = req.params;
  const rating = req.body.rating;
  const review = req.body.review;

  console.log(review);
  rateValueCourse = rateValueCourse + 1;
  try {
    var kiko = 0;
    const oldRating = await Instructor.findById(id, "rating");
    if (!oldRating.rating) kiko = 0;
    else kiko = oldRating.rating;
    console.log(kiko);
    var calculatedRating =
      parseFloat(kiko.toString()) + parseFloat(rating.toString());
    var average = calculatedRating / rateValueCourse;
    console.log(average);

    const x = await Instructor.findByIdAndUpdate(
      id,

      { ratingCounter: rateValueCourse, rating: average }
    );

    const x1 = await Instructor.findByIdAndUpdate(id, {
      $set: { Review: review },
    });
    return res.status(200).json("tamam");
    //console.log(x);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const rateCourse = async (req, res) => {
  const { id } = req.params;
  const rating = req.body.rating;
  const review = req.body.review;

  console.log(review);
  rateValueCourse = rateValueCourse + 1;
  try {
    var kiko = 0;
    const oldRating = await courses.findById(id, "rating");
    if (!oldRating.rating) kiko = 0;
    else kiko = oldRating.rating;
    console.log(kiko);
    var calculatedRating =
      parseFloat(kiko.toString()) + parseFloat(rating.toString());
    var average = calculatedRating / rateValueCourse;
    console.log(average);

    const x = await courses.findByIdAndUpdate(
      id,

      { ratingCounter: rateValueCourse, rating: average }
    );

    const x1 = await courses.findByIdAndUpdate(id, {
      $set: { Review: review },
    });
    return res.status(200).json("tamam");
    //console.log(x);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const getExam = async (req, res) => {
  const examId = req.params.examId;
  const Exam = await exam.findOne({ _id: examId });
  res.status(200).json(Exam);
};

const getExams = async (req, res) => {
  const courseId = req.params.courseId;
  const course = await courses.findOne({ _id: courseId });
  const Exams = [];
  await Promise.all(
    course.mcqExam.map(async (examid) => {
      const Exam = await exam.findOne({ _id: examid });
      Exams.push(Exam);
    })
  );
  res.status(200).send(Exams);
};
const findCoursesBasedOn1 = async (req, res) => {
  try {
    const co = "";
    const { q } = req.query;
    let result = [];
    const coursesGiv = await Instructor.findOne({ name: q }, "coursesGiven");
    if (coursesGiv) {
      co = await courses.findOne({ id: coursesGiv });
    }
    const Courses = await courses.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { Subject: { $regex: q, $options: "i" } },
      ],
    });
    courses.map((course) => {
      if (course != "") result.push(course);
    });

    console.log(co);
    console.log(Courses);
    //console.log(coursesGiv)
    return res.status(200).json(Courses.concat(co));
    // return res.status(200).json(result);

    // return res.status(200).json(ayhaga)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getTrainee = async (req, res) => {
  const id = req.params.id;
  const trainee = await corporateTraineeC.findOne({ _id: id });
  res.status(200).json(trainee);
};
module.exports = {
  rateInstructor,
  calculateAverageRating,
  saveData,
  findCoursesBasedOn,
  ChangePass,
  GetInst,
  filterAllCoursesBySubject,
  finddCourses,
  findmyCourses,
  viewMyInst,
  getTrainee,
  rateCourse,
  viewall,
  viewCourse,
  selectcountry,
  reset,
  resetPost,
  forgetPassPost,
  forgetPass,
  answerMcq,
  showAnswers,
  viewallSubs,
  report,
  viewreports,
  followups,
  requestaccess,
  viewMyCourses,
  getCourse,
  viewProgress,
  watchVideo,
  answerMcq,
  buildPDF,
  // sendingCertificate,
  getExam,
  getExams,
  findCoursesBasedOn1,
};
