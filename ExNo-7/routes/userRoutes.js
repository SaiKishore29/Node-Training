const express = require('express');
const router = express.Router();

const authUserController = require('../controllers/authUserController');

router.post("/login", authUserController.login);
router.post("/register", authUserController.register);

module.exports=router;
