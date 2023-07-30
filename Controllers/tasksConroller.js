const _ = require('lodash');
const { Task } = require('../db/models')

module.exports.createTask = async (req, res, next) => {
  const { body } = req
  try {
    const createdTask = await Task.create(body);
    const prepearedTask = _.omit(createdTask.get(),["updatedAt"])
    res.status(200).send(prepearedTask)
    if (!createdTask) {
      res.status(500).send('Server error');
      return
    }
  } catch (err) {
    res.status(500).send('Server error')
    console.log('err', err)
  }
};

module.exports.getTaskById = async (req, res, next) => {
  const {taskId} = req.params
  try {
    const gettingTask = await Task.findByPk(taskId, {
      raw: true,
      attributes: {
        exclude: ["updatedAt"]
      }
      })
        if (!req) {
          res.status(404).send('Not found');
          return
}
        res.status(200).send(gettingTask);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

module.exports.getAllTasks = async(req, res, next) => {
  try {
    const allTasks = await Task.findAll({
      raw: true, attributes:{ exclude: [
      "updatedAt"
    ]} })
    if (!allTasks) {
      res.status(404).send("No tasks")
      return
    }
    res.status(200).send(allTasks)
  } catch (err) {
    res.status(500).send("Server error");
  }
};

module.exports.updateTask = async (req, res, next) => {
  const { taskId } = req.params;
  const { body } = req;
  try {
    const [,[updatedTask]] = await Task.update(body, {
      where: {id: taskId},
        raw: true,
        attributes: 
          {
            exclude: ['updatedAt'],
        },
        returning: true,
        }
    )
    if (!updatedTask) {
      return res.status(404).send("Not found");
    }
    res.status(200).send(updatedTask)
  } catch (err) {
    res.status(500).send("Server error");
  }
};

module.exports.deleteTask = async (req, res, next) => {
  const { taskId } = req.params;
  console.log("taskId", taskId);
  try {
    const deletedTask = await Task.destroy({ where: { id: taskId } });
    if (!deletedTask) {
      res.status(404).end()
      return
    }
    res.status(204).send('Deleted')
  } catch (err) {
    res.status(500).send("Server error");
    console.log('err', err)
  }
};