/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require("jsonwebtoken");
const jwtSecret = require('./auth-secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret.secret, (error, decodedToken) => {
      if (error) {
        res.status(401).status({
          message: error.message
        });
      } else {
        req.user = {
          username: decodedToken.username,
        };
        next();
      }
    });
  } else {
    res.status(401).json({ you: "shall not pass!" });
  }
};
