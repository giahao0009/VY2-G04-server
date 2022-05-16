const express = require("express");
const router = express.Router();
const { VehicleController } = require("../controllers");

router.post("/createvehicle", VehicleController.createVehicle);
router.get("/getallvehicle", VehicleController.getAllVehicle);
router.get("/getvehiclebyid/:id", VehicleController.getVehicleById);
router.delete("/deletevehicle/:id", VehicleController.deleteVehicle);
router.put("/updatevehicle/:id", VehicleController.updateVehicle);
router.get("/search", VehicleController.searchVehicle);
router.get("/filtervehicle", VehicleController.filterVehicle);
router.get("/getallstatus", VehicleController.getAllStatus);
router.get(
  "/getAllVehicleWithPagination",
  VehicleController.getAllVehicleWithPagination
);

module.exports = router;
