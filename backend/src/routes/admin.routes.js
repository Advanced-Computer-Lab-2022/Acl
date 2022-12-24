const express = require('express');
const adminCtrl = require('../controllers/admin.controller');
const router = express.Router()

router.post('/createadmin', adminCtrl.createAdmin)
router.post('/createinstructor', adminCtrl.createInstructor)
router.post('/createcorporatetrainee', adminCtrl.createCorTrainee)
router.patch('/definepromotion',adminCtrl.definepromotion)
router.patch("/approverefund/:id", adminCtrl.approveRefund);
router.patch("/declinerefund/:id", adminCtrl.declineRefund);
router.get("/refundrequests", adminCtrl.viewRefundRequests);
router.get("/accessrequests", adminCtrl.viewAccessRequests);
router.patch("/declineaccess/:id", adminCtrl.declineAccess);
router.patch("/approveaccess/:id", adminCtrl.approveAccess);
module.exports = router

