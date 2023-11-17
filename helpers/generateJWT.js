const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;


const generateJWT = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
};

module.exports = generateJWT;

