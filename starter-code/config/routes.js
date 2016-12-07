var express = require('express');
var router = express.Router();



var cargoController = require("../controllers/cargoController");

router.get('/cargo/new',cargoController.cargoNew);

router.post('/cargo',cargoController.cargoCreate);

module.exports = router;