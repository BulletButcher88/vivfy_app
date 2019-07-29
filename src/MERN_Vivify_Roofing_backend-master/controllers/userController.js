const User = require("../models/User");
const { modifyUser, generateAccessToken } = require('../utils/auth')

const getSales = async (req, res) => {
  try {
    const salesUsers = await User.find({role: "Sales"})
    res.status(200).send(salesUsers)
  } catch (error) {
    console.log(error.stack);
    res.status(500).send("error getting users")
  }
}

const editUser = async (req, res) => {
  let { password } = req.body;
  const { id } = req.params;
  try {
    const foundUser = await User.findById(id);
    if (foundUser) {
      const user = await modifyUser(id, password);
      const newId = user._id;
      const newEmail = user.email;
      const newRole = user.role;
      const newName = user.name;
      const token = await generateAccessToken({
        _id: newId, 
        name: newName, 
        role: newRole, 
        email: newEmail
      });
      return res.status(201).send({ token })
    } else {
      console.log(error.stack)
      return res.status(404).send(error.message)
    }
  } catch (error) {
    console.log(error.stack)
    return res.status(404).send(error.message);
  }
}

const names = async (req, res) => {
  try {
    const users = await User.find();
    usernames = users.map((user) => user.name)
    res.status(200).send(usernames);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send("error getting usernames")
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(202).send(deletedUser);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send("Error deleting user");
  }
};

module.exports = {
  getSales,
  names,
  destroy,
  editUser
}