const {Router} = require('express');
const { tasksController } = require("../Controllers");

const tasksRouter = Router();

tasksRouter
  .route("/")
  .get(tasksController.getAllTasks)
  .post(tasksController.createTask);
tasksRouter
  .route("/:taskId")
  .get(tasksController.getTaskById)
  .patch(tasksController.updateTask)
  .delete(tasksController.deleteTask);

module.exports = tasksRouter;