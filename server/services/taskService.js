const Task = require("../models/task");

exports.getTasks = async (userId) => {
    return await Task.find({ userId });
};

exports.createTask = async (userId, title, description) => {
    const task = new Task({ title, description, userId });
    await task.save();
    return task;
};

exports.updateTask = async (id, userId, taskData) => {
    const updatedTask = await Task.findOneAndUpdate(
        { _id: id, userId },
        taskData,
        { new: true }
    );
    if (!updatedTask) {
        throw { status: 404, message: "Task not found" };
    }
    return updatedTask;
};

exports.deleteTask = async (id, userId) => {
    const task = await Task.findOneAndDelete({ _id: id, userId });
    if (!task) {
        throw { status: 404, message: "Task not found" };
    }
};

exports.getTaskMetrics = async (userId) => {
    const totalTasks = await Task.countDocuments({ userId });
    const completedTasks = await Task.countDocuments({ userId, completed: true });
    const remainingTasks = totalTasks - completedTasks;

    return {
        totalTasks,
        completedTasks,
        remainingTasks,
    };
};