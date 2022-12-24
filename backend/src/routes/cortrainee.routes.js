const express = require("express");
const instructorCtrl = require("../controllers/instructor.controller");
const router = express.Router();
const corporateTraineeCtrl = require("../controllers/cortrainee.controller");

router.get(
  "/filterallcoursessubject",
  corporateTraineeCtrl.filterAllCoursesBySubject
);
router.get("/viewallcourses", corporateTraineeCtrl.viewall);
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
router.patch("/followup/:id", corporateTraineeCtrl.followups);
router.patch("/requestaccess/:id/:id1", corporateTraineeCtrl.requestaccess);
router.post(
  "/submit/:id/:courseId/:examId/:grade",
  corporateTraineeCtrl.answerMcq
);

module.exports = router;
//new

/*const express = require('express');
const coursesCtrl = require('../controllers/courses.controller');
const router = express.Router()

router.get('/viewcourses/:id', coursesCtrl.viewCourses)
router.post('/createcourses/:id', coursesCtrl.createCourses)*/
