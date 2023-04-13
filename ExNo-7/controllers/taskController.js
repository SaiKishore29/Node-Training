const taskService=require('../services/taskService');
const logger =require('../utils/logger');

function addTask(req, res) {
  const taskContent = req.body;
  try {
      const data = taskService.addTaskService(taskContent, req.user.name);
      res.status(201).json({ status: "task added", message: data });
  } catch (error) {
    console.log(error);
    logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(500).send({ message: "Internal server Error" });
  }
}

function showTask(req, res) {
  let data;
  const page = req.query.page || 1;
  const pageLimit = req.query.pageLimit || 10;
  const startIndex = (page - 1) * pageLimit;
  const endIndex = page * pageLimit;
  if (req.query.filter) {
    try {
      data = taskService.taskFilter(req.user.name, req.query.filter);
      res.status(200).json({
        data: taskService.paginate(data,startIndex,endIndex),
        currentPage: page,
        totalPages: Math.ceil(data.length / pageLimit),
      });
    } catch (error) {
      if (error.message == "No result matching") {
        res.status(404).send({ message: error.message });
      } else {
        logger.error(
          `${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`
        );
        res.status(500).send({ message: "Internal server Error" });
      }
    }
  }
  if (req.query.sort) {
    try {
      data = taskService.taskSorter(
        req.user.name,
        req.query.sort,
        req.query.order || "asc"
      );
      res.status(200).json({
        data: taskService.paginate(data,startIndex,endIndex),
        currentPage: page,
        totalPages: Math.ceil(data.length / pageLimit),
      });
    } catch (error) {
      logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
      res.status(500).send({ message: "Internal server Error" });
    }
  }
  if (!req.query.filter && !req.query.sort) {
    try {
      data = taskService.showTaskService(req.user.name);
      res.status(200).json({
        data: taskService.paginate(data,startIndex,endIndex),
        currentPage: page,
        totalPages: Math.ceil(data.length / pageLimit),
      });
    } catch (error) {
      logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
      res.status(500).send({ message: "Internal server Error" });
    }
  }
}

function showSpecificTask(req, res) {
  try {
    const data = taskService.showSpecificTaskService(req.user.name, req.params.id);
    res.status(200).json({ task: data });
  } catch (error) {
    if (error.message == "Task not found") {
      res.status(404).send({ message: error.message });
    } else {
      logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
      res.status(500).send({ message: "Internal server Error" });
    }
  }
}

function deleteTask(req, res) {
  try {
    const data = taskService.deleteTaskService(req.user.name, req.params.id);
    res.status(200).json({ message: "Task deleted", tasks: data.tasks });
  } catch (error) {
    if (error.message == "Task not found") {
      res.status(404).send({ message: error.message });
    } else {
      logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
      res.status(500).send({ message: "Internal server Error" });
    }
  }
}

function updateTask(req, res) {
  try {
    const data = taskService.updateTaskService(req.user.name, req.params.id, req.body);
    res.status(200).json({ message: "User updated", updatedTask: data });
  } catch (error) {
    if (error.message == "Task not found") {
      res.status(404).send({ message: error.message });
    } else {
      logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
      res.status(500).send({ message: "Internal server Error" });
    }
  }
}


module.exports={ addTask, showTask, updateTask, showSpecificTask, deleteTask}