const express = require("express");
const router = express.Router();
const { SchedulerController } = require("../controllers");

router.post("/createscheduler", SchedulerController.createScheduler);
router.get("/scheduler", SchedulerController.getSchedulerByVehicleId);

module.exports = router;
