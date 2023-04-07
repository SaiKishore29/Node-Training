let express=require('express');
let router=express.Router();

let updateControl=require('../control/updateControl');

router.put('/', updateControl);

module.exports = router;