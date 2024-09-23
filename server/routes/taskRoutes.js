const express = require("express");
const taskController = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");
const { taskSchema, UpdatedtaskSchema, ParamIdSchema } = require("../utils/validation");
const validator = require("express-joi-validation").createValidator({});

const router = express.Router();

router.get("/", authMiddleware, taskController.getTasks);
router.get("/metrics", authMiddleware, taskController.getTaskMetrics);
router.post("/", authMiddleware, validator.body(taskSchema), taskController.createTask);
router.put("/:id", authMiddleware, validator.body(UpdatedtaskSchema), taskController.updateTask);
router.delete("/:id", authMiddleware, validator.params(ParamIdSchema), taskController.deleteTask);

module.exports = router;
