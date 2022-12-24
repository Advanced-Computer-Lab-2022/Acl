const indTrainee = require("../models/individualTrainee.model");
const courses = require("../models/courses");
const exam = require("../models/exam");
const { default: mongoose } = require('mongoose');
var flash = require('express-flash');
var session = require('express-session')
//var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var async = require('async');
var crypto = require('crypto');
const fs = require('fs');

require('dotenv').config();
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
  fs.writeFileSync("Notes.txt", data,{encoding:"binary"})}
    catch(err){
    return res.status(400).json({error: "something Went wrong"})}
    

      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("Notes.txt", "utf8"));
      res.status(200).json(data);
    }
  


const pay= async(req,res)=>{
  const stripe = require("stripe")
  (
    "sk_test_51MDoVyEO7urBPxcBTHaNsSOE9q5G6SIdF34EPxknIARtTehHD8ziUiGEUVdeZbodkkbL31Jv5GNrMTS2JspAgvyx00tqgovzdX"
  );

  const {email, token } = req.body;
  const Paycourses=req.params.id;
  const course = await courses.findById(Paycourses);
  //console.log(course)
  user=await IndividualTrainee.findOne({email:email,"courses._id":course._id})
  if(user)
    res.status(200).json("you already registered before for this course")
  else{
  const trainee=await IndividualTrainee.findOneAndUpdate({email},{$addToSet:{courses:course}});
  console.log(trainee)
  console.log(trainee.wallet)
  var x=(parseFloat(course.price) * 100)-((trainee.wallet)*100)
  if(x<0){
  var y=((trainee.wallet)*100)-(parseFloat(course.price) * 100)}
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
        amount: (parseFloat(course.price) * 100)-((trainee.wallet)*100),
        description: `Payment for USD ${parseFloat(course.price) * 100}`,
        currency: "USD",
        customer: customer.id,
      });
    })
    .then((charge) => res.status(200).send(charge))
    .catch((err) => console.log(err));
}};
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
          return res.status(404).json({error:"No such Individual Trainee"})}
     else{  const pass= await indTrainee.findOneAndUpdate({_id:id},{password:password},{new:true})
       console.log(password)
       if(!pass){
        console.log("dakhalOut")
           return res.status(400).json({error: "No such Individual Trainee"})
       }}
       //res.status(200).json(blog)
     console.log("done")
     res.status(200).json(pass)
     console.log(pass.toString())
     //console.log(password)
    }
catch(error){ 
    res.status(400).json({error:error.me})
}

}
//done
const filterAllCoursesBySubject = async(req,res)=> {
  const q = req.query.q;
  const q2=req.query.q2;
  
  
    //console.log(q);
    //console.log(q2);
     try{
        /*const Courses = await courses.find({Instructor:instructord,$or:[{price:pp},{Subject:sub}]})
    res.status(200).json(Courses.map((courses)=>{
        return courses.title+" :  "+courses.price+" :"+courses.Subject+"."
    }))
    console.log(Courses.toString())
        */
        const Courses = await courses.find({$or:[{Subject:q},{rating:q2}]})
       // console.log(req.body.rating)
       console.log(Courses)
        res.status(200).json(Courses)
    }
    catch(error){ 
            res.status(400).json({error:error.me})
    }
}
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
const viewall=async(req,res)=>{
    try{
        const Courses = await courses.find()
        res.status(200).json(Courses.map((courses)=>{return courses.title+" : "+courses.duration+" : "+courses.rating+"." }))
    }
    catch (error) {
        console.log()
        return res.status(402).json({error : error})
}}

const filterCoursebyPrice= async (req,res)=>{
    const min=parseInt(req.body.min)
    const max=parseInt(req.body.max)
    try{
        const ranges = await courses.find({ 
            price:  {$lte: max,
         $gte : min}})
         console.log(min+" "+max)
         res.status(200).json(ranges)
        }
    catch(error){ 
        res.status(400).json({error:error.me})
    }
}
const viewprice=async(req,res)=>{
    try{
        const Courses = await courses.find()  
        res.status(200).json(Courses.map((courses)=>{
            return courses.title+" :  "+courses.price+"."
        }))
    }
catch (error) {
    console.log()
    return res.status(402).json({error : error.message})
        
}
}
var isoCountryCurrency = require("iso-country-currency");
const IndividualTrainee = require("../models/individualTrainee.model");



 
const selectcountry =  async (req, res)=> {
    const country= req.body.country
    const id =req.params.id
    const currency=isoCountryCurrency.getParamByParam('countryName',country,'currency')

    try{
        const  inst= await Instructor.findByIdAndUpdate(id,{country},{new: true})
        res.status(200).json(inst)
        console.log(currency)
    }
    catch(error)
    { res.status(400).json({error: error.message}
        )}
    };
    const finddCourses =  async (req, res)=> {
        const{title,Subject,insName}= req.body 
        const ayhaga= []
        try{
            if (title){
            const Courses = await courses.find({'title': {'$regex': title, '$options' : 'i'}}).select('title');
            return res.status(200).json(Courses)
        }
        if(Subject){
            const Courses = await courses.find({'Subject': {'$regex': Subject, '$options' : 'i'}}).select('title');
            return res.status(200).json(Courses)
    
        }
        if(insName){
            let i=0;
            const c = await courses.find({});
            for (let index = 0; index < c.length; index++) {
              const x = c[index];  
              if  (x)    {        
              const ins = await Instructor.findById(x.Instructor)
              const na=ins.name
              console.log(c[3].title)
              if(insName == na){
                ayhaga[i]= c[index].title
                i++
                 } }}
                 return res.status(200).json(ayhaga)
    
        }}
        catch(error)
        { res.status(400).json({error: error.message} )
        }
    }
    
   // app.get('/forgot',
   const forgetPassPost = async(req, res, next) => {
    async.waterfall([
      function(done) {
        crypto.randomBytes(20, function(err, buf) {
          var token = buf.toString('hex');
          done(err, token);
        });
      },
      function(token, done) {
        indTrainee.findOne({ email: req.body.email }, function(err, user) {
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
            '' +'l'+'ocalhost' + ':3000/indiviual/reset/' + token + '\n\n' +
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
      if (err) return next(err);
      //res.redirect('/forgot');
      return res.status(200).json(email)
    });
  };
  const resetPost= async(req, res)=> {
    async.waterfall([
      function(done) {
        indTrainee.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
          if (!user) {
            console.log("ghalat")
            req.flash('error', 'Password reset token is invalid or has expired.');
            return res.redirect('back');
          }
  
          user.password = req.body.password;
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
          req.flash('success', 'Success! Your password has been changed.');
          done(err);
        });
      }
    ], function(err) {
      res.redirect('/');
    });
  };
  const reset= async(req, res)=> {
    indTrainee.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
      if (!user) {
        req.flash('error', 'Password reset token is invalid or has expired.');
        return res.redirect('/forgot');
      }
      //res.render('reset', {
       // user: req.user
      //});
    });
  };

    const findmyCourses =  async (req, res)=> {
            const{title,Subject,insName}= req.body 
            const instr = await Instructor.findById(req.params.id);
            const ayhaga=[];
            let i=0;
            try{
              
                if (title){  
                    const Courses = await courses.find({ $and:[{'Instructor': instr.id},{'title': {'$regex': title, '$options' : 'i'}} ]});
                    return res.status(200).json(Courses)
        
                }
                    if(Subject){
                        const Courses = await courses.find({ $and:[{'Instructor': instr.id},{'Subject': {'$regex': Subject, '$options' : 'i'}}]});
                    return res.status(200).json(Courses)
        
                }
                if(insName){
                    const c = await courses.find({});
                    for (let index = 0; index < c.length; index++) {
                      const x = c[index];                
                      const ins = await Instructor.findById(x.Instructor)
                      const na=ins.name
                      if(insName == (na)){
                        
                         ayhaga[i]= c[index]
                         i++
                        
                      
                         } }
                         return res.status(200).json(ayhaga)
                
            }
        }
        catch(error)
        { res.status(400).json({error: error.message}
            )}
    }


    const answerMcq = async (req, res) => {
        const examId = req.params.examId;
        const selectedChoices = req.body.selectedChoices;
      };
      
      const showAnswers = async (req, res) => {
        const examId = req.params.examId;
        // const Exam = await exam.findOne({ _id: examId });
        const reqExam = await exam.findOne({ _id: examId });
        res.status(200).json(reqExam);
      };
      const viewMyCourses = async (req, res) => {
        const id = req.params.id;
        // const Exam = await exam.findOne({ _id: examId });
        const trainee = await indTrainee.findOne({ _id: id });
        const {traineeC} = trainee.courses.find();
        res.status(200).json(trainee.courses.find());
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


      module.exports={ReceiveCertificate,viewMyCourses,saveData,pay,answerMcq,showAnswers,reset,resetPost,forgetPassPost,ChangePass,filterAllCoursesBySubject,viewall,findmyCourses,finddCourses,filterCoursebyPrice,viewprice,selectcountry};