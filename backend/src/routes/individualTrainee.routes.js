const express = require("express");
const individualTraineeCtrl = require("../controllers/individualTrainee.controller");
const corporateTraineeCtrl = require("../controllers/cortrainee.controller");

const coursesCtrl = require('../controllers/courses.controller');
const router = express.Router();

router.get(
  "/filtercoursesbysubjects",
  individualTraineeCtrl.filterAllCoursesBySubject
);
router.get("/viewprice", individualTraineeCtrl.viewprice);
router.get("/viewallcourses", individualTraineeCtrl.viewall);
router.get("/viewMycourses/:id", individualTraineeCtrl.viewMyCourses);
router.get("/viewMyInst/:id", individualTraineeCtrl.viewMyInst);
router.post('/reportcourse/:id',individualTraineeCtrl.report);
router.get(
  "/filter_all_courses_price",
  individualTraineeCtrl.filterCoursebyPrice
);
router.post("instructorId",individualTraineeCtrl.setInstructorId)
router.patch("/selectcountry/:id", individualTraineeCtrl.selectcountry);
router.patch("/ChangePass/:id", individualTraineeCtrl.ChangePass);
router.get("/findMyCourses/:id", individualTraineeCtrl.findmyCourses);
router.get("/findcourses", individualTraineeCtrl.finddCourses);
router.get("/showAnswers/:examId", individualTraineeCtrl.showAnswers);
router.post("/forgetPassPost", individualTraineeCtrl.forgetPassPost);
router.get("/reset/:token", individualTraineeCtrl.reset);
router.post("/reset/:token", individualTraineeCtrl.resetPost);
router.post("/pay/:id", individualTraineeCtrl.pay);
router.post("/Save", individualTraineeCtrl.saveData);
router.get("/showCourses/:id", individualTraineeCtrl.viewMyCourses);
router.get("/getCourse/:id", individualTraineeCtrl.getCourse);
router.get("/getTrainee/:id", individualTraineeCtrl.getTrainee);
router.post(
  "/requestRefund/:id/:courseId",
  individualTraineeCtrl.requestRefund
);
router.patch("/watchvideo", individualTraineeCtrl.watchVideo);

router.get("/wallet/:id", individualTraineeCtrl.viewWallet);
router.get("/progress/:id/:courseId", individualTraineeCtrl.viewProgress);
router.post("/reportcourse/:id", individualTraineeCtrl.report);
router.get("/viewreports/:id", individualTraineeCtrl.viewreports);
router.patch("/followup/:id", individualTraineeCtrl.followups);
router.post(
  "/submit/:id/:courseId/:examId/:grade",
  individualTraineeCtrl.answerMcq
);
router.post('/sendingCertificate',individualTraineeCtrl.sendingCertificate);
router.get('/invoice',(req,res,next)=>{
    const stream= res.writeHead(200,{
         'Content-Type':'application/pdf',
         'Content-Disposition':'attachment;filename=certificate.pdf'
});
corporateTraineeCtrl.buildPDF(
    (chunk)=> stream.write(chunk),
    () => stream.end()
);
   
});
router.post("/calculateavgrating",individualTraineeCtrl.calculateAverageRating);
router.put("rateinstructor",individualTraineeCtrl.rateInstructor);
router.post("/calculateavgrating",coursesCtrl.calculateAverageRating);
router.put("ratecourse",coursesCtrl.rateCourse)

module.exports = router;
