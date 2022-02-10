const express = require('express');
const router = express.Router();
const myfetch = require('../data/authdata');



router.get('/all', myfetch);
//router.get('/alert', alertfetch);


module.exports = router;