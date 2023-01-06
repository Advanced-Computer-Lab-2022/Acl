const indTrainee = require("../models/individualTrainee.model");
const courses = require("../models/courses");
const Instructor = require("../models/instructor.model");
const exam = require("../models/exam");
const refund = require("../models/refundRequest");
const { default: mongoose } = require("mongoose");
var flash = require("express-flash");
var session = require("express-session");
const bcrypt1 = require('bcrypt')//hash for password
const jwt = require('jsonwebtoken');

//var mongoose = require('mongoose');
var nodemailer = require("nodemailer");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcrypt-nodejs");
var async = require("async");
var crypto = require("crypto");
var reports = require("../models/report");
const fs = require("fs");
PDFDocument = require('pdfkit');
require("dotenv").config();
let myCourses = [];
var rateValue=0;
var rateValueCourse=0;
var session = require('express-session')


const setInstructorId= async (req, res) =>{
  session["InstructorId"]=req.query.id;
  const instructorId= session["InstructorId"]
  res.json(instructorId)
}
// const filterAllPriceInstructor = require("../controllers/instructor.controller")

//done
// const filterAllPriceTrainee = async (req,res)=>{
//     const min=parseInt(req.body.min)
//     const max=parseInt(req.body.max)
//     try{
//         const ranges = await courses.find({
//             price:  {$lte: max,
//          $gte : min}})
//          console.log(min+" "+max)
//          res.status(200).json(ranges)
//         }
//     catch(error){ 
//         res.status(400).json({error:error.me})
//     }
// }
const saveData= async(req,res)=>{
  const {data}=req.body;
  try{
    fs.writeFileSync(`C:/Users/kiko/Desktop/Notes.txt`, data,{encoding:"binary"})
    const filePath = `${__dirname}/files`;
    const fileURL = `${__dirname}/Notes.txt`;
            // Setting various property values
            
            
            
  }
    catch(err){
    return res.status(400).json({error: "something Went wrong"})}
    
   return res.status(200).json("you have download your Notes succesfully")
 
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync(`C:\Users\kiko\Notes.txt`, "utf8"));
      console.log(`${__dirname}/Notes.txt`);
      
      
    }
  


const pay= async(req,res)=>{
  const stripe = require("stripe")
  (
    "sk_test_51MDoVyEO7urBPxcBTHaNsSOE9q5G6SIdF34EPxknIARtTehHD8ziUiGEUVdeZbodkkbL31Jv5GNrMTS2JspAgvyx00tqgovzdX"
  );

  const {email, token } = req.body;
  const Paycourses=req.params.id;
  const course = await courses.findById(Paycourses);
  var d=course.numOfEnrolledStudents;
  if(!d){
  d=0;}
  const z = await courses.findByIdAndUpdate(Paycourses,{numOfEnrolledStudents:d+1})
  user=await IndividualTrainee.findOne({email:email,"courses._id":course._id})
  if(user)
    res.status(200).json("you already registered before for this course")
  else{
  const trainee=await IndividualTrainee.findOneAndUpdate({email},{$addToSet:{courses:course}});
  console.log(trainee)
  var x1=trainee.wallet
  if(!x1){
    x1=0;
  }
  console.log(x1)
  var x=(parseFloat(course.price) * 100)-((x1)*100)
  if(x<0){
  var y=((x1)*100)-(parseFloat(course.price) * 100)}
  else {
  y=0;}
  await IndividualTrainee.findOneAndUpdate({email},{wallet:(y/ 100)});
  if (y>0){
  return res.status(200).json("the course is payed from yur wallet succesfully")}
  stripe.customers
  .create({
    email: email,
    source: token.id,
    name: token.card.name,
  })
  .then((customer) => {
    return stripe.charges.create({
   //const token1 = req.body.stripeToken;
    // const charge=await stripe.charges.create({
        amount: (Math.round(parseFloat(course.price)) * 100)-((x1)*100),
        description: `Payment for USD ${parseFloat(course.price) * 100}`,
        currency: "USD",
        customer: customer.id,
      });
    })
    .then((charge) => res.status(200).send(charge))
    .catch((err) => console.log(err));
}};
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
      return res.status(404).json({ error: "No such Individual Trainee" });
    } else { const salt = await bcrypt1.genSalt();
      const hashedPassword = await bcrypt1.hash(password, salt);
      
      const pass = await indTrainee.findOneAndUpdate(
        { _id: id },
        { password: hashedPassword },
        { new: true }
      );
      console.log(password);
      if (!pass) {
        console.log("dakhalOut");
        return res.status(400).json({ error: "No such Individual Trainee" });
      }
    }
    //res.status(200).json(blog)
    console.log("done");
    return res.status(200).send({status:true,Message:"your Password has Changed Succefully"});
    console.log(pass.toString());
    //console.log(password)
  } catch (error) {
    res.status(400).json({ error: error.me });
  }
};
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
//done

/*
const filterAllCoursesBySubject = async(req,res)=> {
    console.log();
    try{
       const Courses = await courses.find($or[{rating:req.body.rating},{Subject:req.body.Subject}])
       res.status(200).json(Courses)
       return courses.rating
   }
   catch(error){ 
           res.status(400).json({error:error.me})
   }
}
*/
// const filterAllCoursesByrating = async(req,res)=> {
//     console.log();
//     try{
//        const Courses = await courses.find({rating:req.body.rating})
//        res.status(200).json(Courses)
//        return courses.rating
//    }
//    catch(error){
//            res.status(400).json({error:error.me})
//    }
// }
//done
const viewall = async (req, res) => {
  try {
    const Courses = await courses.find();
    res.status(200).json(
      Courses
    );
  } catch (error) {
    console.log();
    return res.status(402).json({ error: error });
  }
};

const filterCoursebyPrice = async (req, res) => {
  const min = parseInt(req.query.min);
  const max = parseInt(req.query.max);
  try {
    const ranges = await courses.find({
      price: { $lte: max, $gte: min },
    });
    console.log(min + " " + max);
    res.status(200).json(ranges);
  } catch (error) {
    res.status(400).json({ error: error.me });
  }
};
const viewprice = async (req, res) => {
  try {
    const Courses = await courses.find();
    const c = await courses.discount;
    res.status(200).json(
      Courses.map((courses) => {
        return (
          courses.title +
          " :  " +
          courses.price +
          " : The Discount is : " +
          courses.discount.map((c) => {
            return (
              c.discountamount +
              " % " +
              " So The Price is " +
              math.subtract(
                courses.price,
                courses.price * (c.discountamount / 100)
              )
            );
          })
        );
      })
    );
  } catch (error) {
    console.log();
    return res.status(402).json({ error: error });
  }
};

var isoCountryCurrency = require("iso-country-currency");
const IndividualTrainee = require("../models/individualTrainee.model");
const { x } = require("pdfkit");

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

// app.get('/forgot',
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
        indTrainee.findOne({ email: req.body.email }, function (err, user) {
          if (!user) {
            req.flash("error", "No account with that email address exists.");
            return res.redirect("/forgot");
          }

          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

          user.save(function (err) {
            done(err, token, user);
          });
        });
      },
      function (token, user, done) {
        //let testAccount =nodemailer.createTestAccount();
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
            ":3000/indiviual/reset/" +
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
      //res.redirect('/forgot');
      return res.status(200).json(email);
    }
  );
};
const resetPost = async (req, res) => {
  try{
  async.waterfall(
    [
      function (done) {
        indTrainee.findOne(
          {
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() },
          },
          async function (err, user) {
            if (!user) {
              console.log("ghalat");
            }
            const salt = await bcrypt1.genSalt();
      const hashedPassword = await bcrypt1.hash(req.body.password, salt);
      
            user.password = hashedPassword;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;

            user.save(function (err) {
              // req.logIn(user, function(err) {
              //  done(err, user);
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
          done(err);
          
        });
      },
    ],
    function (err) {
      console.log("error")
    }
  );
  return res.status(200).json( "Success! Your password has been changed.");
          
} catch (error) {
  return res.staus(400).json(
               
    "Password reset token is invalid or has expired."
  );
  }
  
};
const reset = async (req, res) => {
  indTrainee.findOne(
    {
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    },
    function (err, user) {
      if (!user) {
        req.flash("error", "Password reset token is invalid or has expired.");
        return res.redirect("/forgot");
      }
      //res.render('reset', {
      // user: req.user
      //});
    }
  );
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

const answerMcq = async (req, res) => {
  const traineeId = req.params.id;
  const examId = req.params.examId;
  const courseId = req.params.courseId;
  const grade = req.params.grade;
  const data = {
    examId: examId,
    grade: grade,
  };
  const Trainee = indTrainee.findOne({ _id: traineeId });
  for (i = 0; i < Trainee.courses.length; i++) {
    if (Trainee.courses[i]._id == courseId) {
      Trainee.courses[i].examGrades.push(data);
      break;
    }
  }
  res.status(200).json(Trainee);
};

const showAnswers = async (req, res) => {
  const examId = req.params.examId;
  // const Exam = await exam.findOne({ _id: examId });
  const reqExam = await exam.findOne({ _id: examId });
  res.status(200).json(reqExam);
};
const viewMyCourses = async (req, res) => {
  const {id} = req.params;
  const myCoursess=[];
  // const Exam = await exam.findOne({ _id: examId });
  const trainee = await indTrainee.findById(id);
  console.log(trainee)
  await Promise.all(trainee.courses.map(async (course)=>
  {const Coursess=await courses.findById(course._id);
    
    if (!(myCoursess.includes(Coursess))) {
    myCoursess.push(Coursess);
   }}
    
  ))
  console.log(myCoursess);
  res.status(200).json(myCoursess);

  
};

const getCourse = async (req, res) => {
  const id = req.params.id;
  const course = await courses.findOne({ _id: id });
  res.status(200).json(course);
};
const viewMyInst = async (req, res) => {
  const {id} = req.params;
  const myCoursess=[];
  const myInst=[];
  // const Exam = await exam.findOne({ _id: examId });
  const trainee = await indTrainee.findById(id);
  //console.log(trainee.courses)
  await Promise.all(trainee.courses.map(async (course)=>
  {const Coursess=await courses.findOne({_id:course._id},'Instructor');
    
    if (!(myCoursess.includes(Coursess))) {
    myCoursess.push(Coursess);
   }}
    
  ))
  await Promise.all(myCoursess.map(async(instr)=>
  {const Instruct=await Instructor.findById(instr.Instructor);
  //console.log(Instruct)
    if (!(myInst.includes(Instruct))) {
    myInst.push(Instruct);
    //console.log(myInst)
   }
}))
let uniqueChars = [...new Set(myInst)]
let x=[]
for(let i=0;i<uniqueChars.length/2;i=i+1){

x[i]=uniqueChars[i]}

  console.log("");
  res.status(200).json(x);

  
};

const requestRefund = async (req, res) => {
  const id = req.params.id;
  const courseId = req.params.courseId;
  try {
  const data = await refund.create({
    trainee: id,
    course: courseId,
  });
  return res.status(200).json(data)
} catch (error) {
  return res.status(400).json("something went wrong");
}
};

const getTrainee = async (req, res) => {
  const id = req.params.id;
  const trainee = await indTrainee.findOne({ _id: id });
  res.status(200).json(trainee);
};

const viewWallet = async (req, res) => {
  const id = req.params.id;
  const trainee = await indTrainee.findOne({ _id: id });
  res.status(200).json(trainee.wallet);
};
const report = async(req, res)=> {
  const {id}=req.params
  let courseId=req.query.courseId
        const {reportname,type,description}=req.body
        const c=await courses.findById(courseId)
        let empty=[];
        if(!reportname){ 
          empty.push("reportname")
      }
      if(!type){
          empty.push("type")
      }
      if(!description){
          empty.push("description")
      }
      if(empty.length>0){
        return res.status(400).json({error:'Please fill in the required fields',empty})
      }
        try{
          reports.create({name: reportname, type: type, course:c,individualtrainee:id,Description:description})
           res.status(200).json(id)
          console.log(id)
        }
  catch(error){
    res.status(400).json({error:error.me})
  }

}


const viewProgress = async (req, res) => {
  const id = req.params.id;
  const courseId = req.params.courseId;
  const trainee = await indTrainee.findOne({ _id: id });
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
 

  return res.status(200).json(neededCourse.progress);
};

const viewreports = async (req, res) => {
  const { id } = req.params;

  try {
    const r = await reports.find({ individualtrainee: id });

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
      $and: [{ name: title }, { individualtrainee: id }],
    });
    if (r.status == "pending" || r.status == "unseen") {
      const { followup, number } = req.body;
      await reports.updateOne(
        { $and: [{ name: title }, { individualtrainee: id }] },
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

const watchVideo = async (req, res) => {
  const traineeId = req.query.traineeId;
  const CourseId = req.query.courseId;
  const videoId = req.query.videoId;
  const Course = await courses.findOne({ _id: CourseId });
  //console.log(CourseId);
  const totalVideos = Course.Subtitle.length;
  //console.log(Course.Subtitle.length);

  const Trainee = await IndividualTrainee.findOne({ _id: traineeId });
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
    const updatedWatchedVideos = await IndividualTrainee.updateOne(
      { _id: traineeId, "courses._id": CourseId },
      { $push: { "courses.$.watchedVideos": { videoId } } }
    );

    const newProgress = (watchedVideos.length + 1 / totalVideos) * 100;

     await IndividualTrainee.updateOne(
      { _id: traineeId, "courses._id": CourseId },
      { $set: { "courses.$.progress": newProgress } }
    );
    const x=IndividualTrainee.findById(traineeId)
   

    if (newProgress == 100) {
      
      //console.log(corporateTraineeId)
      const corporateTrainee = await IndividualTrainee.findById(
        traineeId
      );
      //console.log(corporateTrainee)
      const email = corporateTrainee.email;

      await IndividualTrainee
        .find({ email: email })
        .then(async (result) => {
          await IndividualTrainee
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
    
  }
};
const ReceiveCertificate = async(req, res, next) => {
  indTrainee.findOne({_id: req.params.id }).populate('courses','name'). // i want from here the course name that the process of it is 100% 
  exec(function (err, courseNeeded) {
    if (err) return handleError(err);
  //courseNeeded
});
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      indTrainee.findById({_id: req.params.id }, function(err, user) {
        if (!user) {
          req.flash('error', 'No account with this id exists');
          //return res.redirect('/forgot');
        }

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
       //let testAccount =nodemailer.createTestAccount();
//clientID     459689521337-pkpimajok78e5f00jhlubvtr28smvm0p.apps.googleusercontent.com
// create reusable transporter object using the default SMTP transport
let transport= nodemailer.createTransport({
service: 'gmail',
 auth: {
   type: 'OAuth2',
   user: process.env.user,
   pass: process.env.pass,
   clientId: process.env.clientId,
   clientSecret: process.env.clientSecret,
   refreshToken:process.env.refreshToken
   //accessToken:"ya29.a0AeTM1ieMVZBpenPBICXA6zFObVV3zENDTYEAiEMRxQutN09Fmw1aiKnsYXqWH8z1VZHkOP-X6D4bwwivH91txfzPC730fkVQYNZYlimvuvhHNGxN7LDcavYBWEfDCxB7YGo-vkH44C6yjXqLlYb8t3wa17uFaCgYKAa0SARESFQHWtWOmDzsiOVBe6Tm3hh0v15kMsQ0163"
 },
});
      var mailOptions = {
        to: user.email,
        from: 'kikomarco12345@gmail.com',
        subject: 'Congratulations your Certificate is finally here',
        text: 'Your finally completing your course successfully and here it is your certificate\n\n',
        attachments: [
          {
              filename: 'Alison_Certificate-1447-15764499.pdf', // <= Here: made sure file name match
              path:'C:/Users/kiko/Downloads/Alison_Certificate-1447-15764499.pdf', // <= Here
              contentType: 'application/pdf'
          }
      ]
      };
      transport.sendMail(mailOptions, function(error, response){
       if(error){
           console.log(error);
       }else{
           console.log("Message sent: " + response.message);
       }
      });
    }
  ], function(err) {
    if (err) return next(err);
    //res.redirect('/forgot');
    return res.status(200).json(email)
  });
};
const sendingCertificate = async(req,res)=>{
  const email = req.body.email;
  await indTrainee.find({email: email}).then(async (result)=>{
  await indTrainee.findById(result._id).then((result)=>{
      const mail = {
          from: process.env.AUTH_EMAIL,
          to: email,
          subject: "Certificate",
          html: `<p>Congratulations you have completed your course. Here is your certificate</p>`,
          attachments: [
                                      {
                                          filename : "certificate.pdf" , path : './controllers/certificate.pdf', contentType: 'application/pdf'
                                      }
                                  ]
      }
  
      let transporter = nodemailer.createTransport({
          service: 'hotmail',
          auth: {
              user: process.env.AUTH_EMAIL,
              pass: process.env.AUTH_PASS
          }
      })
  
      transporter.sendMail(mail).then(()=>{
          return res.status(200).json({status:true,Message:"sent successfully"})
      }).catch((error) => {
          return res.status(400).json({status:false, error:error.message ,Message:"Error while sending an email"})
      })
  }).catch((error)=>{
      return res.status(400).json({status:false, error:error.message,Message:"Error while updating the password"})
  })
  }).catch((error)=>{
      return res.status(400).json({status:false, error:error .message,Message:"this Email is not found or undefined"})
  });
  
  
  }
//42
function buildPDF(dataCallback,endCallback){
  const doc = new PDFDocument();
  doc.on('data',dataCallback)
  doc.on('end', endCallback)
  doc.fontSize(25).text('hello world');
  doc.end();
}
const calculateAverageRating= (req, res) =>{
     
  var oldRating =(req.query.rating);
  var newRating=(req.query.newRating);
  var calculatedRating= +oldRating+ +newRating;
var average =
calculatedRating /(req.query.ratingCounter);
// const average: $divide : [ ((req.query.rating )+ (req.query.newRating)), (req.query.ratingCounter) ];

res.json(average)
}
const rateInstructor= (req, res) =>{

Instructor.findById(req.query.InstructorId).then(instructor => {
instructor.ratingCounter =req.query.ratingCounter;
instructor.rating = req.query.rating;

instructor.save()
.then(() => res.json(instructor))
.catch(err => res.status(400).json('Error: ' + err));
})
.catch(err => res.status(400).json('Error: ' + err));
}
module.exports = {rateInstructor,calculateAverageRating,buildPDF,sendingCertificate,
  ReceiveCertificate,
  saveData,
  pay,
  answerMcq,
  showAnswers,
  reset,
  resetPost,
  forgetPassPost,
  ChangePass,
  filterAllCoursesBySubject,
  viewall,
  findmyCourses,
  finddCourses,
  filterCoursebyPrice,
  viewprice,
  selectcountry,
  report,
  viewreports,
  followups,
  viewMyCourses,
  viewMyInst,
  getCourse,
  getTrainee,
  requestRefund,
  viewWallet,
  viewProgress,
  watchVideo,
  answerMcq,
  setInstructorId
};
