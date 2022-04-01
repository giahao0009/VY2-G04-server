const express = require('express');
const router = express.Router();

const CompanyController = require('../controller/CompanyController');

router.get('/getallcompany', CompanyController.getAllCompany);
router.get('/:id', CompanyController.getCompanyWithId);
router.post('/createcompany', CompanyController.createCompany);
router.put('/updatecompany', CompanyController.updateCompany);
router.delete('/deletecompany/:id', CompanyController.deleteCompany);

module.exports = router;
