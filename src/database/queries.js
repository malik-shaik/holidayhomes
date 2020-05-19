const User = require("./models/userModel");

module.exports = {
  createUser: async (data) => {
    const user = await new User({ ...data });
    return await user.save();
  },
  getOneUser: async (data) => {
    const user = await User.findOne({ email: data.email });
    return user;
  },
};
