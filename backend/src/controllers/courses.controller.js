const courses = require('../models/courses');
const instructor =require('../models/instructor.model')


const viewCourses = async (req,res) => {
    try{
        const Courses = await courses.find({"Instructor": req.params.id})
        //const inst=await instructor.find({"courses": Courses.id})
       // const Ins=await Instructor.find("Courses": courses.id)
        res.status(200).json(Courses)
    }
    catch (error) {
        console.log()
        return res.status(402).json({
            error : error
        })
    }
}

//instructor create course
const createCourses =  async (req, res)=> {
    const Instructor=req.params.Instructor
    const{title,SubName,Subject,price,summary,duration,levelOfCourse,rating}= req.body
    try{
       
        const Subtitle=[{
            SubName:SubName
        }]
        //console.log(Instructor)
        const Courses = await courses.create({title:title,Subtitle,Subject:Subject,price:price,summary:summary,duration:duration,levelOfCourse:levelOfCourse,Instructor:Instructor.id})
        const specificCourse=await courses.findById(Courses.id)
        console.log(specificCourse)
       
        const inst=await instructor.findByIdAndUpdate({_id:Instructor.id},{$addToSet:{coursesGiven:Courses._id}})
        res.status(200).json(Courses)

    }
    catch(error)
    { res.status(400).json({error: error.message}
        )}
}


    /*
const filterCourses = async(req,res) => {
   
    const {subject,price,rating} = req.body;
    try{
    // check if userId is not empty
    if(courseTitle){
    const result = await coursesModel.find({subject:mongoose.Types.ObjectId(courseTitle)}).populate('subject');
    res.status(200).json(result)
    }
    catch (error)
    {
        res.status(400).json({error:"userId is required"})
    }
}*/
    

//add course rating function
const addCourseRating = async(req , res) => {
    const courseId=req.query.id;
    const userId=req.body.id;
    const rating=req.body.rating;
    const uId=mongoose.Types.ObjectId(userId);
    const tuple={uId,rating};
    if (courseId){
        try{
            //check if the user has already rated the course
            const check = await courses.findOne({_id:mongoose.Types.ObjectId(courseId), Rating:{$elemMatch:{uId:uId}}});
            if (!check){
            const resCourse = await courses.findOneAndUpdate({_id:mongoose.Types.ObjectId(courseId)}, { $push: { Rating: tuple } }, { new: true });
            res.status(200).json(resCourse);
            }
            else{
                res.status(400).json({error:"User has already rated this course"});
            }

        }
        catch(error){
            res.status(400).json({error:error.message})
        }
    }
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
const rateCourse= (req, res) =>{
 
  courses.findById(req.query.CourseID).then(course => {
  courses.ratingCounter =req.query.ratingCounter;
  courses.rating = req.query.rating;

instructor.save()
  .then(() => res.json(course))
  .catch(err => res.status(400).json('Error: ' + err));
})
.catch(err => res.status(400).json('Error: ' + err));
}
const getCourses = async (req, res) => {
    const cId=req.query.cId
    
    try{
    const course= await courses.findById(cId)
    res.status(200).json(course);
}
    catch(error){
        res.status(400).json({error:error.message})
    }
   
}
   
module.exports={createCourses,viewCourses,addCourseRating,rateCourse,calculateAverageRating,getCourses}
