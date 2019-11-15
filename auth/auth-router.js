const authRouter = require("express").Router();
const Users = require("../Users/users-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

authRouter.post("/register", (req, res) => {
  // implement registration
  const { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  password = hash;
  Users.add()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({
        message: error.message
      });
    });
});

authRouter.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome back ${user.username}!`,
          token: token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = authRouter;
