const Admin = require('../models/adminstrator.model');
const instructor = require('../models/instructor.model');
const CorTrainee = require('../models/cortrainee.model');
const indTrainee = require("../models/individualTrainee.model");



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
    const {username,password ,admin} = req.body;
    try {
        user =await instructor.findOne({username})
        user1 =await indTrainee.findOne({username})
        user2=await Admin.findOne({username})
        user3 =await CorTrainee.findOne({username})
        if(user||user1||user2||user3)
        res.status(400).json({ error:"USername Already In Use" })
        
         else{ 



        const salt = await bcrypt1.genSalt();
        const hashedPassword = await bcrypt1.hash(password, salt);
        const user = await Admin.create({username: username, password: hashedPassword,admin:admin });
        const token = createToken(user.username);
  
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json(user)}
    } catch (error) {
       res.status(400).json({ error: "USername Already In Use" })
    }
}
const createInstructor =  async (req, res)=> {
    const { name,username,country, email, password ,coursesGiven} = req.body;
  try {
    user =await instructor.findOne({username})
    user1 =await indTrainee.findOne({username})
    user2=await Admin.findOne({username})
    user3 =await CorTrainee.findOne({username})
    if(user||user1||user2||user3)
    res.status(400).json({ error:"USername Already In Use" })
    
     else{ 
      const salt = await bcrypt1.genSalt();
      const hashedPassword = await bcrypt1.hash(password, salt);
      const user = await instructor.create({ name: name,username: username, email: email, password: hashedPassword,country:country,coursesGiven:coursesGiven });
      const token = createToken(user.name);

      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json(user)
  }} catch (error) {
      res.status(400).json({ error:"USername Already In Use" })
  }
}
   const createCorTrainee = async (req, res)=> {
    const {username,country, email, password} = req.body;
    try {
        user =await instructor.findOne({username})
        user1 =await indTrainee.findOne({username})
        user2=await Admin.findOne({username})
        user3 =await CorTrainee.findOne({username})
        if(user||user1||user2||user3)
        res.status(400).json({ error:"USername Already In Use" })
        
         else{ 
        
        const salt = await bcrypt1.genSalt();
        const hashedPassword = await bcrypt1.hash(password, salt);
        const user = await CorTrainee.create({username: username, email: email, password: hashedPassword,country:country });
        const token = createToken(user.username);
  
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json(user)
    } }catch (error) {
        res.status(400).json({ error: error.message })
    }
    
  }
module.exports = {createInstructor,createCorTrainee,createAdmin}