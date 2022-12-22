const Admin = require('../models/adminstrator.model');
const instructor = require('../models/instructor.model');
const CorTrainee = require('../models/cortrainee.model');
const courses = require("../models/courses");




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
        const salt = await bcrypt1.genSalt();
        const hashedPassword = await bcrypt1.hash(password, salt);
        const user = await instructor.create({username: username, password: hashedPassword,admin:admin });
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
  //my7taga tetzabat
const definepromotion=async(req,res)=>{
    let{title,discountamount,startdate,enddate}=req.body;
    const today=new Date()
    const endate=new Date(enddate)
    if(today>=endate){
      discountamount=0;
    }
    try{
    const c= await courses.findOne({'title':title});
    const d=c.discount
  c.discount.map((d)=>{
  if(d.discountamount>0){
    res.status(200).json("There's already a discount issued to this course.")
  }
  else{
    courses.findOneAndUpdate(
      {'title':title},
      {
        $set: {
          discount: {
            discountamount:discountamount,
            startdate:startdate,
            enddate:enddate
          },
        },
      }
    );
    console.log(today)
  res.status(200).json(discountamount+" %")
  }
  })
  
    
   
  }
  catch(error)
  { res.status(400).json({error: error.message}
    )}
  };
module.exports = {createInstructor,createCorTrainee,createAdmin,definepromotion}