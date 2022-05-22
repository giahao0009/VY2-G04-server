const express = require("express");
const router = express.Router();
const { TransactionController } = require("../controllers");

router.post("/createtransaction", TransactionController.createTransaction);
router.get(
  "/gettransactionbycomid/:id",
  TransactionController.getAllTransactionByComId
);
router.get("/gettransactionbyid/:id", TransactionController.getTransactionById);
router.put("/refund/:id", TransactionController.refundTransaction);

module.exports = router;
