import { registerUser, loginUser, logoutUser } from "../services/user.service";

export const signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await registerUser(username, password);
    res
      .status(201)
      .json({ success: true, message: "user registered successfully", user });
  } catch (error) {}
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await loginUser(username, password);
    req.session.userId = user._id;
    res.status(200).json({ success: true, message: "user logged in", user });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error logging in",
      error: error.message,
    })
  }
};

export const logout = async (req, res) => {
  try {
    await logoutUser();
    res.status(200).json({ success: true, message: "user logged out" });
  } catch (error) {}
};
