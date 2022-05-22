const express = require("express");
const router = express.Router();
const { TransactionController } = require("../controllers");

router.post("/createtransaction", TransactionController.createTransaction);
router.get(
  "/gettransactionbycomid/:id",
  TransactionController.getAllTransactionByComId
);

module.exports = router;
