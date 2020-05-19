const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { jwtSecret } = require("../config");

module.exports.createJWT = async (userid) => {
  const payload = { id: userid };
  console.log(jwtSecret);
  return await JWT.sign(payload, jwtSecret, { expiresIn: 360000 });
};

module.exports.hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
