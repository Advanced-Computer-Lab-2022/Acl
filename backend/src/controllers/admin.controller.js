const Admin = require('../models/adminstrator.model');
const instructor = require('../models/instructor.model');
const CorTrainee = require('../models/cortrainee.model');
const Report = require('../models/report')



const PORT = process.env.PORT;

const cors = require('cors');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const bcrypt1 = require('bcrypt')//hash for password
const jwt = require('jsonwebtoken');
const maxAge = 3 * 24 * 60 * 60;
const createToken = (name) => {
    return jwt.sign({ name }, 'supersecret', {
        expiresIn: maxAge
    });
};
const createAdmin = async (req, res) => {
    const {username,password,em,ail ,admin} = req.body;
    try {
        const salt = await bcrypt1.genSalt();
        const hashedPassword = await bcrypt1.hash(password, salt);
        const user = await instructor.create({username: username, password: hashedPassword,email: email,admin:admin });
        const token = createToken(user.username);
  
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const createInstructor =  async (req, res)=> {
    const { name,username,country, email, password ,coursesGiven} = req.body;
  try {
      const salt = await bcrypt1.genSalt();
      const hashedPassword = await bcrypt1.hash(password, salt);
      const user = await instructor.create({ name: name,username: username, email: email, password: hashedPassword,country:country,coursesGiven:coursesGiven });
      const token = createToken(user.name);

      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json(user)
  } catch (error) {
      res.status(400).json({ error: error.message })
  }
}
   const createCorTrainee = async (req, res)=> {
    const {username,country, email, password} = req.body;
    try {
        
        const salt = await bcrypt1.genSalt();
        const hashedPassword = await bcrypt1.hash(password, salt);
        const user = await CorTrainee.create({username: username, email: email, password: hashedPassword,country:country });
        const token = createToken(user.username);
  
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    
  }
//53
const getAllCorporateReports = async (req,res) =>{
    try{
   const reports=await Report.find({corporatetrainee:{ $ne: null }},{"name": true,"type":true, "course":true,"corporatetrainee":true,"Description":true,"followups":true,"status":true })
   res.status(200).json(reports)
} catch (error) {
    res.status(400).json({ error: error.message })

  
  
}
}
const getAllIndividualeReports = async (req,res) =>{
    try{
   const reports=await Report.find({individualtrainee:{ $ne: null }},{"name": true,"type":true, "course":true,"individualtrainee":true,"Description":true,"followups":true,"status":true })
   res.status(200).json(reports)
} catch (error) {
    res.status(400).json({ error: error.message })

  
  
}
}
const getAllInstructorReports = async (req,res) =>{
    try{
   const reports=await Report.find({instructor:{ $ne: null }},{"name": true,"type":true, "course":true,"instructor":true,"Description":true,"followups":true,"status":true })
   res.status(200).json(reports)
} catch (error) {
    res.status(400).json({ error: error.message })

  
  
}
}
const markProblems1= async (req,res)=>{
    const statusss=req.body.status;
    Report1=req.query.id;

    try{
        console.log(Report1);
const problem=await Report.findByIdAndUpdate(Report1,{status:statusss})

res.status(200).json(problem)
    }catch(error){
        res.status(400).json({ error: error.message })
    }
}
module.exports = {createInstructor,createCorTrainee,createAdmin,getAllCorporateReports,getAllIndividualeReports,getAllInstructorReports,markProblems1}