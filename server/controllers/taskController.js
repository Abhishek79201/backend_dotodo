const taskService = require("../services/taskService");

exports.getTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const tasks = await taskService.getTasks(userId);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;
    const task = await taskService.createTask(userId, title, description);
    res.status(201).json(task);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const updatedTask = await taskService.updateTask(id, userId, req.body);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    await taskService.deleteTask(id, userId);
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};

exports.getTaskMetrics = async (req, res) => {
  try {
    const userId = req.user.id;
    const metrics = await taskService.getTaskMetrics(userId);
    res.status(200).json(metrics);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};
