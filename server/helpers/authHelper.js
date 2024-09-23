const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../../config/config");

exports.generateToken = (userId) => {
  return jwt.sign({ id: userId }, config.jwtSecret, { expiresIn: "1h" });
};

exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

exports.comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};
