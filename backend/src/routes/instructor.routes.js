const express = require("express");
const instructorCtrl = require("../controllers/instructor.controller");
const router = express.Router();


router.get("/filtersubject", instructorCtrl.filterCoursesBySubject);
// router.get('filter_all_courses_price/"',instructorCtrl.filterAllPriceInstructor)

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
router.post("/createExam/:id", instructorCtrl.createExam);
router.patch("/addQuestion/:examId", instructorCtrl.addMcq);
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
router.get('/SearchHisCourse/:id', instructorCtrl.findMyCoursesBasedOn);
router.get('/FindMyStudents/:id',instructorCtrl.FindMyStudents);
router.get('/findCoursesBasedOn',instructorCtrl.findCoursesBasedOn1);
router.patch("/EditMyProfile/:id",instructorCtrl.editBioemail)
router.get("/ViewMyCourses/:id",instructorCtrl.viewMyCourses);
router.get("/viewre/:id",instructorCtrl.viewre) 
router.get("/viewrc/:id",instructorCtrl.viewrc)
router.get("/viewrec/:id",instructorCtrl.viewrec)
router.get("/viewr/:id",instructorCtrl.viewr)
router.get("/viewmywallet/:id",instructorCtrl.ViewMyWallet)
router.get("/findMyStudents/:id",instructorCtrl.FindMyStudents)
router.get(
    "/filtermyCoursesSubject/:id",
    instructorCtrl.filterCoursesBySubject1
  )
router.get("/filtermyCoursePrice/:id",instructorCtrl.filterMYCoursebyPrice3)
  

module.exports = router;
