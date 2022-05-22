const express = require("express");
const router = express.Router();
const { SchedulerController } = require("../controllers");

router.post("/createscheduler", SchedulerController.createScheduler);
router.post(
  "/createdetailscheduler",
  SchedulerController.createDetailScheduler
);
router.get("/scheduler", SchedulerController.getSchedulerByVehicleId);
router.get("/allscheduler", SchedulerController.getAllSchedulerByCompany);
router.get("/detail/:id", SchedulerController.getDetail);

module.exports = router;
