const Query = require("../database/queries");
const helpMethods = require("../helpers");

module.exports.loginService = async (data) => {
  const user = await Query.getOneUser(data);
  if (!user) throw new Error("User does not exist. Please register.");

  const token = await helpMethods.createJWT(user._id);
  return { user, token };
};

module.exports.registerService = async (data) => {
  const existingUser = await Query.getOneUser(data);
  if (existingUser) throw new Error("User already exist. Please login.");

  data.password = await helpMethods.hashPassword(data.password);

  const newUser = await Query.createUser(data);
  const { name, email } = newUser;

  const token = await helpMethods.createJWT(newUser._id);
  return { user: { name, email }, token };
};
