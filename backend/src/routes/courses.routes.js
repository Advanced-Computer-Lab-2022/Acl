const express = require('express');
const coursesCtrl = require('../controllers/courses.controller');
const router = express.Router()

router.get('/viewcourses/:id', coursesCtrl.viewCourses)
router.post('/createcourses/:id', coursesCtrl.createCourses)
router.get('/viewCourse/:id',coursesCtrl.viewCourse)
router.get("/MostPopular",coursesCtrl.SortMostPopular)
router.get("/MostEnrolled",coursesCtrl.SortMostEnrolled)




module.exports = router