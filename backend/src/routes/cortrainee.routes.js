const express = require("express");
const instructorCtrl = require("../controllers/instructor.controller");
const router = express.Router();
const corporateTraineeCtrl = require("../controllers/cortrainee.controller");
const coursesCtrl = require("../controllers/courses.controller");

router.get(
  "/filterallcoursessubject",
  corporateTraineeCtrl.filterAllCoursesBySubject
);
router.get("/viewallcourses", corporateTraineeCtrl.viewall);
router.get("/viewallSubs/:id", corporateTraineeCtrl.viewallSubs);
router.get("/viewCourse/:id", corporateTraineeCtrl.viewCourse);
router.patch("/watchvideo", corporateTraineeCtrl.watchVideo);
router.patch("/selectcountry/:id", corporateTraineeCtrl.selectcountry);
router.get("/findMyCourses/:id", corporateTraineeCtrl.findmyCourses);
router.get("/findcourses", corporateTraineeCtrl.finddCourses);
router.patch("/ChangePass/:id", corporateTraineeCtrl.ChangePass);
router.get("/forgetPass", corporateTraineeCtrl.forgetPass);
router.post("/forgetPassPost", corporateTraineeCtrl.forgetPassPost);
router.get("/reset/:token", corporateTraineeCtrl.reset);
router.post("/reset/:token", corporateTraineeCtrl.resetPost);
router.get("/showAnswers/:examId", corporateTraineeCtrl.showAnswers);
router.get("/showCourses/:id", corporateTraineeCtrl.viewMyCourses);
router.get("/progress/:id/:courseId", corporateTraineeCtrl.viewProgress);
router.post("/reportcourse/:id", corporateTraineeCtrl.report);
router.get("/viewreports/:id", corporateTraineeCtrl.viewreports);
router.get("/viewMyInst/:id", corporateTraineeCtrl.viewMyInst);

router.patch("/followup/:id", corporateTraineeCtrl.followups);
router.post("/requestaccess/:id/:id1", corporateTraineeCtrl.requestaccess);
router.post(
  "/submit/:id/:courseId/:examId/:grade",
  corporateTraineeCtrl.answerMcq
);
router.get("/showAnswers/:examId", corporateTraineeCtrl.showAnswers);
router.get("/findCoursesBasedOn", corporateTraineeCtrl.findCoursesBasedOn);
// router.post('/sendingCertificate',corporateTraineeCtrl.sendingCertificate);
router.get("/invoice", (req, res, next) => {
  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment;filename=certificate.pdf",
  });
  corporateTraineeCtrl.buildPDF(
    (chunk) => stream.write(chunk),
    () => stream.end()
  );
});router.get("/getTrainee/:id", corporateTraineeCtrl.getTrainee);
router.post("/calculateavgrating", corporateTraineeCtrl.calculateAverageRating);
router.patch("/rateinstructor/:id", corporateTraineeCtrl.rateInstructor);
router.get("/getInst/:id", corporateTraineeCtrl.GetInst);
router.patch("/rateCourse/:id", corporateTraineeCtrl.rateCourse);
router.get("/getCourse/:id", corporateTraineeCtrl.getCourse);

router.post("/calculateavgrating", coursesCtrl.calculateAverageRating);

module.exports = router;
//new

/*const express = require('express');
const coursesCtrl = require('../controllers/courses.controller');
const router = express.Router()

router.get('/viewcourses/:id', coursesCtrl.viewCourses)
router.post('/createcourses/:id', coursesCtrl.createCourses)

module.exports = router*/
