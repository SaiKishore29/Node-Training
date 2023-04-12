const suid=require('short-unique-id');
const fileOps=require('../utils/fileOps');
const uid = new suid({ length: 3, dictionary: "number" });

function showTaskService(userName) {
  const tasks = fileOps.readFile(`taskData/${userName}.json`);
  return tasks;
}

function showSpecificTaskService(userName, taskId) {
  const tasks = fileOps.readFile(`taskData/${userName}.json`);
  const specificTask = tasks.find((task) => task.id == taskId);
  if (!specificTask) {
    throw new Error("Task not found");
  }
  return specificTask;
}

function taskFilter(userName, filter) {
  let tasks = fileOps.readFile(`taskData/${userName}.json`);
  const filters = filter.split(",");
  filters.forEach((filter) => {
    const [filterBy, filterValue] = filter.split(":");
    tasks = tasks.filter((task) => task[filterBy] == filterValue);
  });
  if (tasks.length == 0) {
    throw new Error("No result matching");
  }
  return tasks;
}

function taskSorter(userName, sortBy, order) {
  let tasks = fileOps.readFile(`taskData/${userName}.json`);
  const direction = order == "desc" ? -1 : 1;
  tasks.sort((a, b) => {
    return direction * a[sortBy].localeCompare(b[sortBy]);
  });
  return tasks;
}

function addTaskService(taskDetails, userName) {
  taskDetails.id = uid();
  taskDetails.timestamp = new Date();
  let tasks = [];
  try {
    tasks = fileOps.readFile(`taskData/${userName}.json`);
  } catch (error) {
    fileOps.writeFile(`taskData/${userName}.json`, JSON.stringify([]));
  }
  tasks.push(taskDetails);
  fileOps.writeFile(`taskData/${userName}.json`, tasks);
  return tasks;
}

function updateTaskService(userName, taskId, newTaskContent) {
  const tasks = fileOps.readFile(`taskData/${userName}.json`);
  const specificTaskIdx = tasks.findIndex((task) => task.id == taskId);
  if (specificTaskIdx == -1) {
    throw new Error("Task not found");
  }
  tasks[specificTaskIdx] = { ...tasks[specificTaskIdx], ...newTaskContent };
  tasks[specificTaskIdx].timestamp = new Date();
  fileOps.writeFile(`taskData/${userName}.json`, tasks);
  return tasks[specificTaskIdx];
}

function deleteTaskService(userName, taskId) {
  const tasks = fileOps.readFile(`taskData/${userName}.json`);
  const specificTaskIdx = tasks.findIndex((task) => task.id == taskId);
  if (specificTaskIdx == -1) {
    throw new Error("Task not found");
  }
  tasks.splice(specificTaskIdx, 1);
  fileOps.writeFile(`taskData/${userName}.json`, tasks);
  return tasks;
}


module.exports={showTaskService, showTaskService, taskFilter, taskSorter, addTaskService, updateTaskService, deleteTaskService, showSpecificTaskService}