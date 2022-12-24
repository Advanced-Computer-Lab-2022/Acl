const express = require('express');
const adminCtrl = require('../controllers/admin.controller');
const router = express.Router()

router.post('/createadmin', adminCtrl.createAdmin)
router.post('/createinstructor', adminCtrl.createInstructor)
router.post('/createcorporatetrainee', adminCtrl.createCorTrainee)
module.exports = router

