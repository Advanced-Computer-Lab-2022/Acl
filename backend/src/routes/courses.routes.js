const express = require('express');
const coursesCtrl = require('../controllers/courses.controller');
const router = express.Router()

router.get('/viewcourses/:id', coursesCtrl.viewCourses)
router.get('/getCourses', coursesCtrl.getCourses)
router.post('/createcourses/:id', coursesCtrl.createCourses)
router.get('/getCourseViews', coursesCtrl.getCourseViews)

module.exports = router