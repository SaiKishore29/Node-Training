let express=require('express');
let router=express.Router();
let selectControl=require('../control/selectControl');
let selectAllControl=require('../control/selectAllControl');

router.get('/', selectAllControl);
router.get('/:key', selectControl);

module.exports = router;