const { auth } = require("../firebase");

const signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await auth.createUser({ email, password });
    res.status(201).json({ message: "User created", uid: user.uid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await auth.getUserByEmail(email);
    res.status(200).json({ message: "Sign-in successful", uid: user.uid });
  } catch (error) {
    res.status(400).json({ error: "Invalid credentials" });
  }
};

module.exports = { signUp, signIn };
