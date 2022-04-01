const express = require('express');
const router = express.Router();

const DriverController = require('../controller/DriverController');

router.get('/getalldriver', DriverController.getAllDriver);
router.get('/:id', DriverController.getDriverById);
router.post('/createdriver', DriverController.createDriver);
router.put('/updatedriver', DriverController.updateDriver);
router.delete('/deletedriver/:id', DriverController.deleteDriver);

module.exports = router;
