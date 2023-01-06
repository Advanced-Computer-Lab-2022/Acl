const Instructor = require("../models/instructor.model");
const courses = require("../models/courses");
const CC = require("currency-converter-lt");
const exam = require("../models/exam");
const bcrypt1 = require('bcrypt')//hash for password
const jwt = require('jsonwebtoken');
var flash = require('express-flash');
var session = require('express-session')
//var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var async = require('async');
var crypto = require('crypto');
var math=require('mathjs')
var reports=require('../models/report')
require('dotenv').config();
//const bcrypt = require('bcrypt')
//const jwt = require('jsonwebtoken');


// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (name) => {
    return jwt.sign({ name }, 'supersecret', {
        expiresIn: maxAge
    });
};

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const salt = await bcrypt1.genSalt();
        const hashedPassword = await bcrypt1.hash(password, salt);
        const user = await userModel.create({ name: name, email: email, password: hashedPassword });
        const token = createToken(user.name);

        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const login = async (req, res) => {
    // TODO: Login the user
    const {name, password} = req.body;
    try {
      
        user= await Instructor.findOne({name})

        if (user && bcrypt1.compareSync(password, user.password)) {

            const token = createToken(user.name);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res
              .status(200)
              .json({
               // username: user.username,
                //first_name: user.first_name,
                //last_name: user.last_name,
                name: user.name,
                token: token,
                
              });
          } else {
            res.status(400).json({ message: "Invalid Credentials" });
          }
        
    
        //const token = createToken(user.name);

       // res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        //res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const logout = async (req, res) => {
    res.cookie('jwt', 'logout', {
        expires: new Date(Date.now() + 5 * 1000),
        httpOnly: true
      });
    
      res.status(200).json({ message: "done" });
    
    // TODO Logout the user
}



const getUsers = async (req, res) => {
  const users = await Instructor.find({}).sort({createdAt: -1})

  //for (let index = 0; index < users.length; index++) {
    //  const element = users[index];
      //console.log(element.id);
  //}
  res.status(200).json(users)
}


//all can filter
const filterCoursesBySubject = async (req, res) => {
  console.log("sahbas");
  try {
    /*const Courses = await courses.find({Instructor:instructord,$or:[{price:pp},{Subject:sub}]})
    res.status(200).json(Courses.map((courses)=>{
        return courses.title+" :  "+courses.price+" :"+courses.Subject+"."
    }))
    console.log(Courses.toString())
        */
    const Courses = await courses.find({
      $or: [{ Subject: req.body.Subject }, { rating: req.body.rating }],
    });
    // console.log(req.body.rating)
    //console.log(Courses)
    res.status(200).json(Courses);
  } catch (error) {
    res.status(400).json({ error: error.me });
  }
};

//filter all courses by price
const filterCoursebyPrice1 = async (req, res) => {
  const min = parseInt(req.body.min);
  const max = parseInt(req.body.max);
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

const findCoursesBasedOn1=async (req, res)=> {
  try{
    const co="";
  const{q}= req.query; 
  const coursesGiv=await Instructor.findOne({name:q},'coursesGiven')
  if(coursesGiv){
   co = await courses.findOne({id:coursesGiv});
  }
  const Courses = await courses.find({$or:[{'title': {'$regex': q, '$options' : 'i'}},{'Subject': {'$regex': q, '$options' : 'i'}}]});
      console.log(co)
      console.log(Courses)
      //console.log(coursesGiv)
      return res.status(200).json(Courses.concat(co))

  
  
      
          // return res.status(200).json(ayhaga)

  }
  catch(error)
  { res.status(400).json({error: error.message} )
  }
}




//all can search
const findCourses = async (req, res) => {
  const { title, Subtitle, instructor } = req.body;
  try {
    /*
     */
    const Courses = await courses.find({
      $or: [{ $regex: title, $regex: Subtitle, $regex: instructor }],
    });
    // const Courses = await courses.find({title,Subtitle,price,summary})
    res.status(200).json(Courses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//instructor filtering his courses
// const filtermycoursesbyprice = async (req,res)=>{
//     const instructor = req.params.id
//     try{
//         const priceRange = await courses.find({ Instructor: eq.params.id,
//             price : { $lte: req.body.price},
//             price: { $gte:  req.body.price}},
//             {title:1,price:1})
//          res.status(200).json(priceRange)
//         }
//     catch(error){
//         res.status(400).json({error:error.me})
//     }
// }
const filtermycoursesbyprice = async (req, res) => {
  const instructord = req.params.id;
  const pp = req.body.price;
  const sub = req.body.Subject;
  try {
    /*if(instructord){
        const coursess=await courses.find({instructor:instructord})
        if(pp){const c = await coursess.find({price:pp})
         return res.status(200).json(c)
        }
        if(sub){
            coursess.find({Subject:sub})
            return res.status(200).json()

        }
    }*/
    const Courses = await courses.find({
      Instructor: instructord,
      $or: [{ price: pp }, { Subject: sub }],
    });
    res.status(200).json(
      Courses.map((courses) => {
        return (
          courses.title + " :  " + courses.price + " :" + courses.Subject + "."
        );
      })
    );
    console.log(Courses.toString());
  } catch (error) {
    console.log();
    return res.status(402).json({ error: error.message });
  }
};
//instructor view his courses //"Instructor" : req.params.id,
// const searchMyCourses = async (req,res) => {
//     const instructor = req.params.id
//     try{
//         const Courses = await courses.find({$or: [{"title":{$regex: req.body.title}},{"Subtitle":{$regex: req.body.Subtitle}}]})
//         //const inst=await instructor.find({"courses": Courses.id})
//        // const Ins=await Instructor.find("Courses": courses.id)
//         res.status(200).json(Courses)
//     }
//     catch (error) {
//         console.log()
//         return res.status(402).json({
//             error : error
//         })

// }}
//req18
const viewTitleCourses = async (req, res) => {
  //const {instid} = req.params.id
  const Courses = await courses.find(
    { Instructor: req.params.id },
    { title: 1 }
  );
  res.status(200).json(Courses);
  console.log(Courses.toString());
  if (Courses !== null) {
    let x = Object.values(Courses);
    let result = x.map((Courses) => Courses.title);
    console.log(result);
  } else {
    res.status(400).json({ error: error.message });
  }
};
//req 20
const findMyCoursesBasedOn=async (req, res)=> {
  try{
    const co="";
  const{q}= req.query; 
  const{id}=req.params;
  const coursesGiv=await Instructor.findOne({name:q},'coursesGiven')
  console.log(id)
  if(coursesGiv){
   co = await courses.findOne({id:coursesGiv});
  }
  const Courses = await courses.find({Instructor:{id},$or:[{'title': {'$regex': q, '$options' : 'i'}},{'Subject': {'$regex': q, '$options' : 'i'}}]});
      //console.log(co)
      console.log(Courses.concat(co))
      //console.log(coursesGiv)
      return res.status(200).json(Courses.concat(co))
      
  
  
      
          // return res.status(200).json(ayhaga)

  }
  catch(error)
  { res.status(400).json({error: error.message} )
  }
}




//req 20
const searchMyCourses = async (req, res) => {
  try {
    const Courses = await courses.find({
      Instructor: req.params.id,
      $or: [
        { title: { $regex: req.body.title } },
        { Subtitle: { $regex: req.body.Subtitle } },
      ],
    });
    //const inst=await instructor.find({"courses": Courses.id})
    // const Ins=await Instructor.find("Courses": courses.id)
    res.status(200).json(Courses);
  } catch (error) {
    console.log();
    return res.status(402).json({
      error: error,
    });
  }
};
//all can view "shaghala nos nos"
const viewprice = async (req, res) => {
  try {
    const Courses = await courses.find();
    const c=await courses.discount
    res.status(200).json(
      Courses.map((courses) => {
        return (
          courses.title +
          " :  " +
          courses.price +
          " : The Discount is : " +
          courses.discount.map((c)=>{
            return(
              c.discountamount+" % "+" So The Price is "+math.subtract(courses.price,(courses.price*(c.discountamount/100)))
            )
          })
         
        );
      })
    );
  } catch (error) {
    console.log();
    return res.status(402).json({ error: error.message });
  }
};

//all can view details about course
const viewall = async (req, res) => {
  try {
    const Courses = await courses.find();
    res.status(200).json(
      Courses.map((courses) => {
        return (
          "Name: " +
          courses.title +
          " : " +
          courses.duration +
          " : " +
          courses.rating +
          "."
        );
      })
    );
  } catch (error) {
    console.log();
    return res.status(402).json({ error: error });
  }
};

//all should search for a course based on title,inst,subtitle
const searchForCourse = async (req, res) => {
  try {
    // const coursesGiven=await instructor.find({"name": req.body.name})
    //console.log(coursesGiven.title)
    /*const Courses = await courses.find({"Instructor" : req.params.id,
        $or: [{"title":{$regex: req.body.title}},{"Subtitle":{$regex: req.body.Subtitle}}]})
                */
    const Courses = await courses.find({
      $or: [
        { Instructor: req.body.Instructor },
        { title: { $regex: req.body.title } },
        { Subtitle: { $regex: req.body.Subtitle } },
      ],
    });
    //const inst=await instructor.find({"courses": Courses.id})
    // const Ins=await Instructor.find("Courses": courses.id)
    res.status(200).json(Courses);
  } catch (error) {
    console.log();
    return res.status(402).json({ error: error.message });
  }
};
var isoCountryCurrency = require("iso-country-currency");
const { response } = require("express");
const IndividualTrainee = require("../models/individualTrainee.model");
const corporateTrainee = require("../models/cortrainee.model");

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
const Courses=await courses.find({
  Instructor: id})
    let currencyConverter = new CC({ from: "EGP", to: currency });
    
    Courses.map((courses) => {
      return (
        courses.update({price:currencyConverter.convert(courses.price)})
       
      );
    })
    res.status(200).json(Courses)
    // courses
    //   .updateOne({ name: "spanish" }, { price: currencyConverter.convert(100) })
    //   .then((response) => {
    //     res.status(200).json(response);
    //   });
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
//sprint 2

const createExam = async (req, res) => {
  const courseId=req.query.courseId

  const mcq = [
    {
      question: req.body.question,
      choice1: req.body.choice1,
      choice2: req.body.choice2,
      choice3: req.body.choice3,
      choice4: req.body.choice4,
      correct: req.body.correct,
    },
  ];
  const data = new exam({
    title: req.body.title,
    description: req.body.description,
    mcq: mcq,
  });
console.log(data)
console.log(data._id)
  const c=await courses.findByIdAndUpdate(courseId,{
    $push:{
      mcqExam:data._id
    }
  })
  data.save().then((data) => res.status(200).send(data));
};

const addMcq = async (req, res) => {
  const examId = req.query.examId;
  try{
  
  const b=await exam.findById(examId)
 const c= await exam.findByIdAndUpdate(examId ,
    {
      $push: {
        mcq: {
          question: req.body.question,
          choice1: req.body.choice1,
          choice2: req.body.choice2,
          choice3: req.body.choice3,
          choice4: req.body.choice4,
          correct: req.body.correct,
        },
      },
    }
  );
  console.log(examId)
  console.log(b)
  return res.status(200).json("question added successfully!");}
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//my7taga tetzabat

const viewmyallrv = async (req, res) => {
  const instr = await Instructor.find(req.query.id);
  try {
    const rating = instr.Review;
    const review = instr.Rating;
    res.status(200).json(rating, review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//malak req
const viewReviews=async(req,res)=>{
  const instructorId = req.params.id;

  const viewrr = await Instructor.findById({instructor:instructorId},{instructorReview:1,_id:1});
  if(viewrr== null){
     res.status(402).json({error : error.message})
  }
  else{
     res.json(viewrr);
  }}

const viewRatings=async(req,res)=>{
const instructorId = await Instructor.find(req.query.id);
const viewr = await Instructor.findById({ Instructor: instructorId},
  { Rating: 1 ,_id:1}
);
res.status(200).json(viewr);
console.log(viewr.toString());
if (viewr !== null) {
  let x = Object.values(viewr);
  let result = x.map((viewr) => viewr.Rating);
  console.log(result);
} else {
  res.status(400).json({ error: error.message });
}
}
//my7tag tazbeet
const upload1=async(req,res)=>{
  try{
      const id=req.params.id
  const {title,subtitle,durationsub,exercisesnum,link,Description}=req.body;
  
  const video=
 [
  {
      youtube_video_link:link,
      description:Description
  },
];


  await courses.findOneAndUpdate(
      {$and:[{'Instructor':id},{'title':title},{"Subtitle.SubName":subtitle}]},
      {
          
        $set: {
          Subtitle:{
            SubName:subtitle,
            durationSub:durationsub,
            exercisesNum:exercisesnum,
            Video:video,

             
          }
            
          
      }
      },
    );
    console.log(link)
    res.status(200).json(link)}
    catch(error){
      res.status(400).json({error: error.message})
    }

         
};
const upload2=async(req,res)=>{
  try{
      const id=req.params.id
  const {title,preview}=req.body;

 const video=
 [
  {
      youtube_video_link:preview
  },
];

  await courses.findOneAndUpdate(
      {$and:[{'Instructor': id},{'title':title}]},
      {
        $set: {
          preview:{
              Video:video
          }
            
          
        },
      }
    );
    console.log(preview)
    res.status(200).json(id)}
    catch(error){
      res.status(400).json({error: error.message})
    }
  
};
//preview reviews subtitle youtube link

const forgetPassPost = async(req, res, next) => {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      Instructor.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          req.flash('error', 'No account with that email address exists.');
          return res.redirect('/forgot');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

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
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          '' +'l'+'ocalhost' + ':3000/instructor/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
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
    
  });
};
const resetPost= async(req, res)=> {
  try{
  async.waterfall([
    function(done) {
      Instructor.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } },async function(err, user) {
        if (!user) {
          console.log("ghalat")
          //req.flash('error', 'Password reset token is invalid or has expired.');
          //return res.redirect('back');
        }
        const salt = await bcrypt1.genSalt();
        const hashedPassword = await bcrypt1.hash(req.body.password, salt);
        
              user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        user.save(function(err) {
         // req.logIn(user, function(err) {
          //  done(err, user);
          //});
        });
      });
    },
    function(user, done) {
      var smtpTransport = nodemailer.createTransport({
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
        from: 'passwordreset@demo.com',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        done(err);
        
      });
    }
  ], function(err) {
   console.log("error")
  });
  return res.status(200).json( "Success! Your password has been changed.");
          
} catch (error) {
  return res.staus(400).json(
               
    "Password reset token is invalid or has expired."
  );
  }
  
};
const reset= async(req, res)=> {
  Instructor.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      req.flash('error', 'Password reset token is invalid or has expired.');
      return res.redirect('/forgot');
    }
    //res.render('reset', {
     // user: req.user
    //});
  });
};
const ChangePass= async(req,res)=>{
  const {id}=req.params
const password=req.body.password
try{

  //await Instructor.findByIdAndUpdate({id,{password: newPass}})
//  if(!mongoose.Types.ObjectId.isValid(id)){
  //    console.log("dakhalGhalat")
    //  return res.status(404).json({error:"No such Instructor"})
     //}
     if(!(mongoose.Types.ObjectId.isValid(id))){
          console.log("dakhalGhalat")
        return res.status(404).json({error:"No such Instructor"})}
   else{ 
    const salt = await bcrypt1.genSalt();
    const hashedPassword = await bcrypt1.hash(password, salt);
     const pass= await Instructor.findOneAndUpdate({_id:id},{password:hashedPassword},{new:true})
     console.log(password)
     if(!pass){
      console.log("dakhalOut")
         return res.status(400).json({error: "No such Instructor"})
     }}
     //res.status(200).json(blog)
   console.log("done")
   return res.status(200).send({status:true,Message:"your Password has Changed Succefully"});
   console.log(pass.toString())
   //console.log(password)
  }
catch(error){ 
  res.status(400).json({error:error.me})
}

}
const definepromotion=async(req,res)=>{
  let{discountamount,startdate,enddate}=req.body;
  const id=req.params.id
  let courseId=req.query.courseId
  console.log({discountamount,startdate,enddate})
  const today=new Date()
  const endate=new Date(enddate)
  let empty=[];
 console.log(courseId)
  if(!discountamount){
      empty.push("discountamount")
  }
  if(!startdate){
      empty.push("startdate")
  }
  if(!enddate){
      empty.push("enddate")
  }
 
  if(today>=endate){
    discountamount=0;
  }
  try{
  const c= await courses.findById(courseId);
  console.log(c)
  const d=c.discount
  const title=c.title
console.log(d)

if(d.length!=0){
 empty.push("discounthere")
}

if(empty.pop()=="discounthere") 
{
  return res.status(400).json({error:'Course Already has A Discount',empty})
}
if(empty.length>0){
  return res.status(400).json({error:'Please fill in the required fields',empty})
}

else{
const b= await courses.findByIdAndUpdate(courseId,
{
  
  $set: {
    discount: {
      discountamount:discountamount,
      startdate:startdate,
      enddate:enddate
    },
  },
})


res.status(200).json(b)


}
  
 
}
catch(error)
{ res.status(400).json({error: error.message}
  )}
};


const report=async(req,res)=>{
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
          reports.create({name: reportname, type: type, course:courseId,instructor:id,Description:description})
           res.status(200).json(id)
          console.log(id)
        }
  catch(error){
    res.status(400).json({error:error.me})
  }

}
const followups=async(req,res)=>{
  const {id}=req.params
 const reportId=req.query.reportId
 const {number,followup}=req.body

 
  try{
    const r=await reports.findById(reportId)
    if(r.status=="pending"||r.status=="unseen"){
     
      await reports.findByIdAndUpdate(reportId, {
        $push: {
          followups: {
            number:number,
            Description:followup
          },
        },
      })
      res.status(200).json(followup)
    }
    else{
      res.status(200).json("Already Resolved")

    }
     
    console.log(r.status)

  }
  catch(error){
    res.status(400).json({error:error.me})
  }

}
const viewreports=async(req,res)=>{
  const {id}=req.params
 
  try{
    const r=await reports.find({instructor:id})
    res.status(200).json(r);

  }
  catch(error){
    res.status(400).json({error:error.me})
  }

}
const viewr=async(req,res)=>{
  const {id}=req.params
  try{
    const r=await Instructor.findById(id)
    
    const p= parseFloat(r.rating.toString())
    if(!p){
    return  res.status(400).json({error:error.me})

    }
   return res.status(200).json(
     p
    );
  }
  catch(error){
   return res.status(400).json({error:error.me})
  }
}
const viewre=async(req,res)=>{
  const {id}=req.params
  try{
    const r=await Instructor.findById(id)
    const re=r.Review
   if(!re){
    return  res.status(400).json({error:error.me})
   }
   return res.status(200).json(
     re
    );
  }
  catch(error){
   return res.status(400).json({error:error.me})
  }
}
const viewrc=async(req,res)=>{
  const {id}=req.params
  const courseId=req.query.courseId
  var r=0;
  try{
    const c=await courses.findById(courseId)
    if(!c.rating){
     r=0
    }else{
    r= parseFloat(c.rating.toString())
    }
    return res.status(200).json(
     r
    );
  }
  catch(error){
   return res.status(400).json({error:error.me})
  }
}
const viewrec=async(req,res)=>{
  const {id}=req.params
  const courseId=req.query.courseId
  try{
    const r=await courses.findById(courseId)
    const re=r.Review
   
    res.status(200).json(
     re
    );
  }
  catch(error){
    res.status(400).json({error:error.me})
  }
}
const editBio = async (req, res) => {
  const bio= req.body.bio;
  const id=req.params.id
  try {
     const ins= await Instructor.findByIdAndUpdate(id,
{
  $set: {
    biography: bio
  },
})
        return res.status(200).json(ins);
      
  } catch (error) {
      return res.status(402).json({
          error : error
      });
  }
}
  const editEmail = async (req, res) => {
    const email= req.body.email;
    const id=req.params.id
    try {
      const ins= await Instructor.findByIdAndUpdate(id,
        {
          $set: {
            email: email
          },
        })
          return res.status(200).json(ins);
        
    } catch (error) {
        return res.status(402).json({
            error : error
        });
    }
}
const editBioemail = async (req, res) => {
  const bio= req.body.bio;
  const email= req.body.email;
  const id=req.params.id
  
  try {
    if(!email){
      if(bio){
        const ins= await Instructor.findByIdAndUpdate(id,
          {
            $set: {
              biography: bio,
          
            },
          })
          return res.status(200).json(ins);   }}
    if(email){
      if(!bio){
        const ins= await Instructor.findByIdAndUpdate(id,
          {
            $set: {
             
              email:email
            },
          })
          return res.status(200).json(ins);  }}
    if(email){
      if(bio){
        const ins= await Instructor.findByIdAndUpdate(id,
          {
            $set: {
              biography: bio,
              email:email
            },
          })
          return res.status(200).json(ins);} } 
  } catch (error) {
      return res.status(402).json({
          error : error
      });
    }
  }
const viewMyCourses=async(req,res)=>{
  const id=req.params.id;
  try{
    const Courses=await courses.find({Instructor:id})
   
    res.status(200).json(
      Courses
    );
  }
  catch (error) {
    return res.status(402).json({
        error : error
    });
}}
ViewMyWallet=async(req,res)=>{
  const id=req.params.id
  try{
    const i=await Instructor.findById(id)
    res.status(200).json(
      i.wallet
    );
  }
  catch(error){
    return res.status(402).json({
      error : error
  });
  }

}
ViewMyWallet=async(req,res)=>{
  const id=req.params.id
  try{
    const i=await Instructor.findById(id)
    res.status(200).json(
      i.wallet
    );
  }
  catch(error){
    return res.status(402).json({
      error : error
  });
  }

}
const FindMyStudents = async (req, res) => {
  const { instructor } = req.params.id;

  const courseId=req.query.courseId
  try {
    /* 
     */
    const Course=await courses.findById(courseId)
    var total=0;
   const trainee=await IndividualTrainee.find({"courses.courseId":Course.id})
   const traineeCorp=await corporateTrainee.find({"courses.courseId":Course.id})
   total=trainee.length+traineeCorp.length
    res.status(200).json(total);
  } catch (error) {
    res.status(400).json({ error: error.message });
  } 
};

const filterCoursesBySubject1 = async (req, res) => {
  try {
    /*const Courses = await courses.find({Instructor:instructord,$or:[{price:pp},{Subject:sub}]})
    res.status(200).json(Courses.map((courses)=>{
        return courses.title+" :  "+courses.price+" :"+courses.Subject+"."
    }))
    console.log(Courses.toString())
        */
    const id = req.params.id;
    const Courses = await courses.find({
      $and: [{ Subject: req.query.subject }, { Instructor: id }],
    });
    // console.log(req.body.rating)
    //console.log(Courses)
    res.status(200).json(Courses);
  } catch (error) {
    res.status(400).json({ error: error.me });
  }
};

const filterMYCoursebyPrice3 = async (req, res) => {
  try{console.log("hi")
  const {id} = req.params;
  const min = parseInt(req.query.min);
  const max = parseInt(req.query.max);
  console.log("hi")
  console.log(id,min,max)
  try {
    const ranges = await courses.find({
      $and: [{ price: { $lte: max, $gte: min } }, { Instructor: id }],
    });
    console.log(ranges)
    console.log(min + " " + max);
    res.status(200).json(ranges);
  } catch (error) {
    res.status(400).json({ error: error.me });
  }
} catch (error) {
  res.status(400).json({ error: error.me });
}
};

module.exports = {
FindMyStudents,
  findMyCoursesBasedOn,
  findCoursesBasedOn1,  
viewTitleCourses,
  findmyCourses,
  finddCourses,
  filterCoursesBySubject,
  findCourses,
  filtermycoursesbyprice,
  selectcountry,
  searchMyCourses,
  viewall,
  viewprice,
  filterMYCoursebyPrice3,
  searchForCourse,
  definepromotion,
  viewmyallrv,
  upload1,
  upload2,
  createExam,
  addMcq,getUsers,
  viewRatings,
  viewReviews,
  signUp,
  login,logout,ChangePass,
  reset,resetPost,
  forgetPassPost,
  report,
  viewreports,
  followups,
  viewMyCourses,
  viewr,
  viewre,
  viewrec,
  viewrc,editBio,editEmail,editBioemail,FindMyStudents,
  ViewMyWallet,
  filterCoursesBySubject1,
  filterCoursebyPrice1
};
