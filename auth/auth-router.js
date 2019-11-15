const authRouter = require("express").Router();
const Users = require("../Users/users-model");
const bcrypt = require("bcryptjs");

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
  // implement login
});

module.exports = authRouter;
