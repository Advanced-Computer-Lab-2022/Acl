const express = require("express");
const individualTraineeCtrl = require("../controllers/individualTrainee.controller");
const router = express.Router();

router.get(
  "/filtercoursesbysubjects",
  individualTraineeCtrl.filterAllCoursesBySubject
);
router.get("/viewprice", individualTraineeCtrl.viewprice);
router.get("/viewallcourses", individualTraineeCtrl.viewall);
router.get("/viewMycourses/:id", individualTraineeCtrl.viewMyCourses);
router.get(
  "/filter_all_courses_price",
  individualTraineeCtrl.filterCoursebyPrice
);
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
router.get("/wallet/:id", individualTraineeCtrl.viewWallet);
router.get("/progress/:id/:courseId", individualTraineeCtrl.viewProgress);
router.post("/reportcourse/:id", individualTraineeCtrl.report);
router.get("/viewreports/:id", individualTraineeCtrl.viewreports);
router.patch("/followup/:id", individualTraineeCtrl.followups);
router.post(
  "/submit/:id/:courseId/:examId/:grade",
  individualTraineeCtrl.answerMcq
);

module.exports = router;
