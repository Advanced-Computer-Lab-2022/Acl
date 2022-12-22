const express = require("express");
const instructorCtrl = require("../controllers/instructor.controller");
const router = express.Router();

router.get("/filtersubject", instructorCtrl.filterCoursesBySubject);
// router.get('filter_all_courses_price/"',instructorCtrl.filterAllPriceInstructor)
router.get("/filter_all_courses_price", instructorCtrl.filterCoursebyPrice);
router.get("/filtermycoursesprice/:id", instructorCtrl.filtermycoursesbyprice);
router.get("/findcourses", instructorCtrl.findCourses);
router.patch("/selectcountry/:id", instructorCtrl.selectcountry);
router.get("/viewprice", instructorCtrl.viewprice);
router.get("/viewallcourses", instructorCtrl.viewall);
router.get("/searchmycourses/:id", instructorCtrl.searchMyCourses);
router.get("/searchForCourse", instructorCtrl.searchForCourse);
router.get("/viewtitlecourses/:id", instructorCtrl.viewTitleCourses);
router.get("/findMyCourses/:id", instructorCtrl.findmyCourses);
router.get("/findcourses", instructorCtrl.finddCourses);
router.post("/createExam", instructorCtrl.createExam);
router.post("/addQuestion/:examId", instructorCtrl.addMcq);
router.patch("/definepromotion/:id", instructorCtrl.definepromotion);
router.get("/viewrating/:id", instructorCtrl.viewmyallrv);
router.get("/viewratings/:id",instructorCtrl.viewRatings)
router.get("/viewreviews/id",instructorCtrl.viewReviews)
router.patch("/uploadlinksub/:id", instructorCtrl.upload1);
router.patch("/uploadlinkprev/:id", instructorCtrl.upload2);
router.post('/forgetPassPost', instructorCtrl.forgetPassPost);
router.get('/reset/:token',instructorCtrl.reset);
router.post('/reset/:token',instructorCtrl.resetPost);
router.patch('/ChangePass/:id',instructorCtrl.ChangePass)
router.get('/users', instructorCtrl.getUsers);
router.post("/signup", instructorCtrl.signUp);
router.post('/login', instructorCtrl.login)
router.get('/logout', instructorCtrl.logout);
router.post('/reportcourse/:id',instructorCtrl.report);
router.get('/viewreports/:id',instructorCtrl.viewreports);
router.patch('/followup/:id',instructorCtrl.followups);
module.exports = router;
