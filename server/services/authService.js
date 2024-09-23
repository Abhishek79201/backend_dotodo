const User = require("../models/user");
const authHelper = require("../helpers/authHelper");

exports.register = async (name, email, password) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw { status: 400, message: "User already exists" };
    }

    const hashedPassword = await authHelper.hashPassword(password);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    const token = authHelper.generateToken(user._id);
    return { token, user };
};

exports.login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw { status: 400, message: "User not found" };
    }

    const validPassword = await authHelper.comparePassword(password, user.password);
    if (!validPassword) {
        throw { status: 400, message: "Invalid password" };
    }

    const token = authHelper.generateToken(user._id);
    return { token, user };
};

exports.getProfile = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw { status: 404, message: "User not found" };
    }

    const token = authHelper.generateToken(user._id);
    return { token, user };
};

exports.updateProfile = async (userId, name, email) => {
    const user = await User.findById(userId);
    if (!user) {
        throw { status: 404, message: "User not found" };
    }

    if (email && email !== user.email) {
        const emailExists = await User.findOne({ email });
        if (emailExists) {
            throw { status: 400, message: "Email already in use" };
        }
    }

    user.name = name || user.name;
    user.email = email || user.email;
    await user.save();

    const token = authHelper.generateToken(user._id);
    return { token, user };
};
