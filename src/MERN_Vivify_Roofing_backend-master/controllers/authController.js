const User = require("../models/User");
const {
  checkPassword,
  generateUser,
  generateAccessToken
} = require("../utils/auth");

const login = async (req, res) => {
  let { email, password } = req.body;
  email = email.toLowerCase();
  if (email && password) {
    try {
      const query = await User.findOne({ email: email });
      if (query) {
        const result = await checkPassword(password, query.passwordDigest);
        if (!result) {
          return res.status(403).send("bad credentials");
        } else {
          const { _id, name, role } = query;
          const token = await generateAccessToken({ _id, name, email, role });
          return res.status(200).send({ token });
        }
      } else {
        return res.status(403).send("bad credentials");
      }
    } catch (error) {
      console.log(error.stack)
      return res.status(404).send("an error occured");
    }
  } else {
    return res.status(403).send("bad credentials");
  }
};

const register = async (req, res) => {
  let { name, email, password, role, phone } = req.body;
  email = email.toLowerCase();
  if (email && password) {
    try {
      const query = await User.findOne({ email: email });
      if (!query) {
        const user = await generateUser(name, email, password, role, phone);
        const { _id } = user;
        const token = await generateAccessToken({ _id, name, email, role });
        return res.status(201).send({ token })
      }
    } catch (error) {
      console.log(error.stack)
      return res.status(404).send(error.message);
    }
  } else {
    return res.status(403).send("bad credentials");
  }
};

const identify = async (req, res) => {
  const { user } = req;
  try {
    res.status(200).send(user);
  } catch (error) {
    console.log(error.stack)
    res.status(500);
  }
}

module.exports = {
  login,
  register,
  identify
};
