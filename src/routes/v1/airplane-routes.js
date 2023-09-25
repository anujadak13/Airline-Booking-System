const express = require('express');

const {AirplaneController}= require('../../controllers');

const router= express.Router();
// /api/v1/airplanes---> POST REQUEST
router.post('/airplanes', AirplaneController.createAirplane);

module.exports = router;