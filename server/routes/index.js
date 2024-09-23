const express = require("express");
const authRoutes = require("./authRoutes");
const taskRoutes = require("./taskRoutes");
const router = express.Router();

// Use all routes here
router.use("/auth", authRoutes);
router.use("/tasks", taskRoutes);
module.exports = router;
