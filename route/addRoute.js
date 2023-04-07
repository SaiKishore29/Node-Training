let express=require('express');
let router=express.Router();
let addControl=require('../control/addControl');

router.post('/', addControl);

module.exports = router;