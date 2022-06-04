const express = require("express");
const router = express.Router();
const { UltilsController } = require("../controllers");

router.post("/payment-stripe", UltilsController.createPaymentIntent);
router.post("/refund", UltilsController.refundCost);

module.exports = router;
