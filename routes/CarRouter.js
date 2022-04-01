const express = require('express');
const router = express.Router();

const CarController = require('../controller/CarController');

router.get('/getallcar', CarController.getAllCar);
router.get('/:id', CarController.getCarById);
router.post('/createcar', CarController.createCar);

module.exports = router;
