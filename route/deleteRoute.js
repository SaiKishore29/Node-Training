let express=require('express');
let router=express.Router();
let deleteControl=require('../control/deleteControl');

router.delete('/:key', deleteControl);
module.exports = router;