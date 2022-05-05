const express = require("express");
const router = express.Router();
const { SchedulerDetailController } = require("../controllers");

router.post(
  "/createschedulerdetail",
  SchedulerDetailController.createSchedulerDetail
);

module.exports = router;
