const express = require("express");
const authController = require("../controllers/authController");
const { loginSchema, registerSchema, updateProfileSchema } = require("../utils/validation");
const authMiddleware = require("../middleware/authMiddleware");
const validator = require("express-joi-validation").createValidator({});

const router = express.Router();

router.post("/register", validator.body(registerSchema), authController.register);
router.post("/login", validator.body(loginSchema), authController.login);
router.post("/profile", authMiddleware, authController.profile);
router.put("/profile", authMiddleware, validator.body(updateProfileSchema), authController.updateProfile);

module.exports = router;
