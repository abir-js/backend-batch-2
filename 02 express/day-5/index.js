import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const data = [
  {
    id: 1,
    name: "Suraj",
    email: "suraj@gmail.com",
  },
  {
    id: 2,
    name: "Abir",
    email: "abir@gmail.com",
  },
  {
    id: 3,
    name: "Ram",
    email: "Ram@gmail.com",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Home route");
});

app.get("/api/v1/welcome", (req, res) => {
  res.send("Welcome route");
});

//? get all users
app.get("/get-users", (req, res) => {
  res.status(200).json(data);
});

//* route parameter
//? get selected user
app.get("/get-user/:id", (req, res) => {
  const { id } = req.params;
  const user = data.find((user) => user.id === Number(id));
  res.status(200).send(user);
});

//? query parameter
app.get("/get-user", (req, res) => {
  const { name, age } = req.query;
  res.status(200).json({ name, age });
});

//! POST
app.post("/create-user", (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: data.length + 1,
    name,
    email,
  };
  data.push(newUser);
  res.status(201).send({ message: "User created successfully", newUser });
});

//!PUT
//? Fully Update

app.put("/update-user/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const index = data.findIndex((user) => user.id === Number(id));

  data[index] = {
    id,
    name,
    email,
  };

  res.status(200).send({
    message: "User updated successfully",
    updatedUser: data[index],
  });
});

//! PATCH

app.patch("/update-user/:id", (req, res) => {
  const { id } = req.params;

  const user = data.find((user) => user.id === Number(id));

  for (const key in req.body) {
    if (req.body[key] !== undefined && req.body[key] !== null) {
      user[key] = req.body[key];
    }
  }

  res.status(200).send({
    message: "User updated successfully",
    updatedUser: user,
  });
});

//! DELETE
app.delete("/delete-user/:id", (req, res) => {
  const { id } = req.params;

  const index = data.findIndex((user) => user.id === Number(id));
  if (index === -1) {
    return res.status(404).send({ message: "User not found" });
  }
  const deletedUser = data.splice(index, 1)[0];
  res.status(200).send({
    message: "User deleted successfully",
    deletedUser,
  });
});

app.listen(PORT, () =>
  console.log(`app is running on http://localhost:${[PORT]}`)
);
