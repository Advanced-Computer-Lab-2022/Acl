const express = require('express');
const adminCtrl = require('../controllers/admin.controller');
const router = express.Router()

router.post('/createadmin', adminCtrl.createAdmin)
router.post('/createinstructor', adminCtrl.createInstructor)
router.post('/createcorporatetrainee', adminCtrl.createCorTrainee)
router.get('/getcortraineereports',adminCtrl.getAllCorporateReports)
router.get('/getindividualreports',adminCtrl.getAllIndividualeReports)
router.get('/getinstructorreports',adminCtrl.getAllInstructorReports)
router.post('/markProblem',adminCtrl.markProblems1)
module.exports = router

