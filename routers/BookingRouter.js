const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const { BookingController } = require("../controllers");

router.post("/bookvehicle", verifyToken, BookingController.bookVehicle);

module.exports = router;
