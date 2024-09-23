// Example helper functions for tasks (if needed in future)

exports.formatTaskData = (task) => {
    return {
        id: task._id,
        title: task.title,
        description: task.description,
        userId: task.userId,
    };
};

// Any other task-specific utility functions
