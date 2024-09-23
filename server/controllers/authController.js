const authService = require("../services/authService");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await authService.register(name, email, password);
    res.status(201).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};

exports.profile = async (req, res) => {
  try {
    const userId = req.user.id;
    const result = await authService.getProfile(userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    const userId = req.user.id;
    const result = await authService.updateProfile(userId, name, email);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};
