const loginUser = (req, res) => {
  try {
    const { username } = req.body;
    if (!username) {
      res.status(400).send("Please enter username");
    }
    req.session.user = { username };

    res.cookie("username", username, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    });
    res
      .status(200)
      .json({ message: "User logged in successfully", username: username });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const logoutUser = (req, res) => {
  try {
    res.clearCookie("username");
    req.session.destroy();
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    if (error) {
      res.status(500).send(error.message);
    }
  }
};

export { loginUser, logoutUser };
