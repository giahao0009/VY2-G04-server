const express = require("express");
const router = express.Router();
const { CompanyController } = require("../controllers");

router.get("/getallcompany", CompanyController.getAllCompany);
router.post("/createcompany", CompanyController.createCompany);
router.get("/getcompanybyid", CompanyController.getCompanyById);

module.exports = router;
