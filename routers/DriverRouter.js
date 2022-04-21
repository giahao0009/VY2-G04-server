const express = require("express");
const router = express.Router();
const { DriverController } = require("../controllers");

router.get("/getalldriver", DriverController.getAllDriver);
router.get("/getdriverbyid/:id", DriverController.getDriverById);
router.delete("/deletedriver/:id", DriverController.deleteDriver);
router.put("/updatedriver/:id", DriverController.updateDriver);
router.post("/createdriver", DriverController.createDriver);
router.get(
  "/getalldriverpagination",
  DriverController.getAllDriverWithPagination
);

module.exports = router;
