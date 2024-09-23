const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const taskSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().allow(""),
  completed: Joi.boolean(),
});
const UpdatedtaskSchema = Joi.object({
  title: Joi.string().min(3).max(100),
  description: Joi.string().allow(""),
  completed: Joi.boolean(),
});

const ParamIdSchema = Joi.object({
  id: Joi.string().required(),
});
const updateProfileSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().optional(),
});

module.exports = { registerSchema, loginSchema, taskSchema, updateProfileSchema, UpdatedtaskSchema, ParamIdSchema };
