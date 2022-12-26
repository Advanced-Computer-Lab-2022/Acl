const Admin = require('../models/adminstrator.model');
const instructor = require('../models/instructor.model');
const CorTrainee = require('../models/cortrainee.model');
const createAdmin = async (req, res) => {
    try {
        const data = new Admin({
            username: req.body.username,
            password: req.body.password,
            admin: req.body.admin,
          });
          const val = await data.save();
          return res.status(200).json(val);
        
    } catch (error) {
        return res.status(402).json({
            error : error
        });
    }
}
const createInstructor =  async (req, res)=> {
    const data = new instructor ({
           name :req.body.name,
           username:req.body.username,
           country:req.body.country,
           password:req.body.password,
           coursesGiven:req.body.coursesGiven,
           email:req.body.email,
        //    biography:req.body.biography,
        //    profileViews:req.body.profileViews,
        //    wallet:req.body.wallet,
        //    profit:req.body.profit
       })
        data.save()
        .then (result => res.status(200).send(result))
       
   }
   const createCorTrainee = async (req, res)=> {
    try {
        const data = new CorTrainee({
          username: req.body.username,
          password: req.body.password,
        });
        const val = await data.save();
        return res.status(200).json(val);
    } catch (error) {
        return res.status(402).json({
            error : error
        });
    }
  }
module.exports = {createInstructor,createCorTrainee,createAdmin}