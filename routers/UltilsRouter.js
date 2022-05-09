const express = require("express");
const router = express.Router();
const { UltilsController } = require("../controllers");

router.post("/payment-stripe", UltilsController.createPaymentIntent);

module.exports = router;
