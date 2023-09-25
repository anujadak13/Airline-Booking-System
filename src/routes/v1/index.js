const express= require('express');

const {infocontroller} = require('../../controllers');

const airplaneRoutes= require('./airplane-routes');

const router= express.Router();

router.use('/airplanes', airplaneRoutes);

router.get('/info', infocontroller.info);

module.exports=router;