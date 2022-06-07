const express = require("express");
const router = express.Router();
const { StationController } = require("../controllers");

router.post("/createstation", StationController.createStation);
router.get("/getallstation", StationController.getAllStation);
router.get("/getstationbyid/:id", StationController.getStationById);
router.delete("/deletestation/:id", StationController.deleteStation);
router.put("/updatestation/:id", StationController.updateStation);
router.get("/search", StationController.searchStation);
router.get(
  "/getallstationpagination",
  StationController.getAllStationWithPagination
);
router.get("/getStationByName", StationController.getStationByName);
router.get(
  "/getallstationbycompanyid",
  StationController.getStationByCompanyId
);

module.exports = router;
