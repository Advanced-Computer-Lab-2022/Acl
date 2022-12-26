const express = require('express');
const individualTraineeCtrl = require('../controllers/individualTrainee.controller');
const router = express.Router()

router.get('/filtercoursesbysubjects', individualTraineeCtrl.filterAllCoursesBySubject)

router.get('/viewprice', individualTraineeCtrl.viewprice)
router.get('/viewallcourses', individualTraineeCtrl.viewall)
router.get('/filter_all_courses_price', individualTraineeCtrl.filterCoursebyPrice)
router.patch('/selectcountry/:id',individualTraineeCtrl.selectcountry)
router.patch('/ChangePass/:id',individualTraineeCtrl.ChangePass)
router.get('/findMyCourses/:id',individualTraineeCtrl.findmyCourses)
router.get('/findcourses',individualTraineeCtrl.finddCourses)
router.get("/showAnswers/:examId", individualTraineeCtrl.showAnswers);
router.post('/forgetPassPost', individualTraineeCtrl.forgetPassPost);
router.get('/reset/:token',individualTraineeCtrl.reset);
router.post('/reset/:token',individualTraineeCtrl.resetPost);
router.get('/Courses',individualTraineeCtrl.showCourses)

module.exports = router