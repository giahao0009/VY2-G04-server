const express = require('express');
const router = express.Router();

const TypeCarController = require('../controller/TypeCarController');

router.get('/getalltype', TypeCarController.getAllType);

module.exports = router;