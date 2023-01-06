const express = require("express");
const adminCtrl = require("../controllers/admin.controller");
const router = express.Router();
router.post("/upS/:id", adminCtrl.editStat);
router.post("/createadmin", adminCtrl.createAdmin);
router.post("/createinstructor", adminCtrl.createInstructor);
router.post("/createcorporatetrainee", adminCtrl.createCorTrainee);
router.patch("/definepromotion/:id", adminCtrl.definepromotion);
router.patch("/approverefund/:id", adminCtrl.approveRefund);
router.patch("/declinerefund/:id", adminCtrl.declineRefund);
router.get("/refundrequests/:id", adminCtrl.viewRefundRequests);
router.get("/accessrequests/:id", adminCtrl.viewAccessRequests);
router.patch("/declineaccess/:id", adminCtrl.declineAccess);
router.patch("/approveaccess/:id", adminCtrl.approveAccess);
router.get("/getcortraineereports/:id", adminCtrl.getAllCorporateReports);
router.get("/getindividualreports/:id", adminCtrl.getAllIndividualeReports);
router.get("/getinstructorreports/:id", adminCtrl.getAllInstructorReports);
router.post("/markProblem", adminCtrl.markProblems1);
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const status = req.body.status;
    const updatedReport = await Report.findOneAndUpdate(
      { _id: id },
      { status: status },
      { new: true }
    );
    console.log(status);
    if (!updatedReport) {
      return res.status(400).json({ error: "Report not found" });
    }
    res.status(200).json(updatedReport);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});
router.get("/viewalladmin/:id",adminCtrl.viewAllCourses)
module.exports = router;
