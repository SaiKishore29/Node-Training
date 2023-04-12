const express = require('express');
const router = express.Router();


const taskController=require('../controllers/taskController');

router.route("/").get(taskController.showTask)
router.route("/").post(taskController.addTask);
router.route("/:id").get(taskController.showSpecificTask)
router.route("/:id").put(taskController.updateTask)
router.route("/:id").delete(taskController.deleteTask);

module.exports=router;
