const User = require("../models/User");

module.exports.createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  res.send(newUser);
};

module.exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.send(users);
};

module.exports.getUser = async (req, res) => {
  const {
    params: { userId },
    // query: {page}
  } = req;

  const foundUser = await User.findOne(userId);

  if (foundUser) {
    res.send(foundUser);
  } else {
    res.status(404).send("User not found");
  }
};

module.exports.deleteUser = async (req, res) => {
  const {
    params: { userId },
  } = req;

  try {
    const deletedUser = await User.delete(userId);
    res.send(deletedUser);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports.updateUser = async (req, res) => {
  const {
    params: { userId },
    body,
  } = req;

  try {
    const updatedUser = await User.update(userId, body);
    res.send(updatedUser);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
