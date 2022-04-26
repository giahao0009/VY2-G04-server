const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const BookingController = require("../controllers/BookingController");

router.post("/bookvehicle", verifyToken, BookingController.bookVehicle);

const { BookingController } = require("../controllers");
