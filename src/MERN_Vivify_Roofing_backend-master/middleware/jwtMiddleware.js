const jwt = require('jsonwebtoken');

const checkJWT = (req, res, next) => {
  const { token } = req.headers;
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send(err.message)
    } else {
      req.user = decoded;
      next();
    }
  })
}

const checkAdmin = (req, res, next) => {
  const { token } = req.headers;
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({error: "Bad credentials"})
    } else {
      const user = decoded;
      if (user.role === "Admin") {
        next()
      } else {
        return res.status(403).send({error: "Bad credentials"})
      }
    }
  })
}

module.exports = { checkJWT, checkAdmin }