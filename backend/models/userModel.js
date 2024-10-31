const { auth } = require("../firebase");

const createUser = async (email, password) => {
  return await auth.createUser({ email, password });
};

const getUserByEmail = async (email) => {
  return await auth.getUserByEmail(email);
};

module.exports = { createUser, getUserByEmail };
