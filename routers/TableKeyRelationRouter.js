const express = require("express");
const router = express.Router();
const { TableKeyRelationController } = require("../controllers");

router.get("/getall", TableKeyRelationController.getAll);

module.exports = router;
