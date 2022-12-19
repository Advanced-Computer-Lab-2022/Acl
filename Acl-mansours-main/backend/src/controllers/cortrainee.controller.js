const corporateTraineeC= require("../models/cortrainee.model");
const courses = require("../models/courses");
const { default: mongoose } = require('mongoose');
const express = require("express");
var flash = require('express-flash');
var session = require('express-session')
//var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var async = require('async');
var crypto = require('crypto');
require('dotenv').config();



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
          return res.status(404).json({error:"No such CorporateTrainee"})}
     else{  const pass= await corporateTraineeC.findOneAndUpdate({_id:id},{password:password},{new:true})
       console.log(password)
       if(!pass){
        console.log("dakhalOut")
           return res.status(400).json({error: "No such CorporateTrainee"})
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
const filterAllCoursesBySubject = async(req,res)=> {
    console.log("sahbas");
     try{
        /*const Courses = await courses.find({Instructor:instructord,$or:[{price:pp},{Subject:sub}]})
    res.status(200).json(Courses.map((courses)=>{
        return courses.title+" :  "+courses.price+" :"+courses.Subject+"."
    }))
    console.log(Courses.toString())
        */
        const Courses = await courses.find({$or:[{Subject:req.body.Subject},{rating:req.body.rating}]})
       // console.log(req.body.rating)
       //console.log(Courses)
        res.status(200).json(Courses)
    }
    catch(error){ 
            res.status(400).json({error:error.me})
    }
}


const viewall=async(req,res)=>{
    try{
        const Courses = await courses.find()
        res.status(200).json(Courses.map((courses)=>{return courses.title+" : "+courses.duration+" : "+courses.rating+"." }))
    }
    catch (error) {
        console.log()
        return res.status(402).json({error : error})
}}

var isoCountryCurrency = require("iso-country-currency");
const Instructor = require("../models/instructor.model");
const { title } = require("process");



 
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
//req 11
    const findCoursesBasedOn=async (req, res)=> {
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
  
    //req 11
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
    const forgetPass = async(req, res) => {
        {
         const user= req.user
       };
     };
     const forgetPassPost = async(req, res, next) => {
       async.waterfall([
         function(done) {
           crypto.randomBytes(20, function(err, buf) {
             var token = buf.toString('hex');
             done(err, token);
           });
         },
         function(token, done) {
           corporateTraineeC.findOne({ email: req.body.email }, function(err, user) {
             if (!user) {
              //  req.flash('error', 'No account with that email address exists.');
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
            let testAccount =nodemailer.createTestAccount();
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
               '' +'l'+'ocalhost' + ':3000/corporatetrainee/reset/' + token + '\n\n' +
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
         res.redirect('/forgot');
       });
     };
     const resetPost= async(req, res)=> {
       async.waterfall([
         function(done) {
           corporateTraineeC.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
             if (!user) {
               //req.flash('error', 'Password reset token is invalid or has expired.');
               //return res.redirect('back');
             }
     
             user.password = req.body.password;
             user.resetPasswordToken = undefined;
             user.resetPasswordExpires = undefined;
     
             user.save(function(err) {
              // req.logIn(user, function(err) {
                // done(err, user);
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
       corporateTraineeC.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
         if (!user) {
           req.flash('error', 'Password reset token is invalid or has expired.');
           return res.redirect('/forgot');
         }
        // res.render('reset', {
          // user: req.user
         //});
       });
     };
 
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

module.exports={findCoursesBasedOn,ChangePass,filterAllCoursesBySubject,finddCourses,findmyCourses,viewall,selectcountry,reset,resetPost,forgetPassPost,forgetPass,answerMcq,showAnswers};