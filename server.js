const express = require("express");
const { validateUserMW } = require("./middlewares/userMW");
const UserController = require("./controllers/user.controller");

const app = express();

const PORT = 5000;

const bodyParser = express.json();

app.get("/users", UserController.getUsers);

app.get("/users/:userId", UserController.getUser);

app.post("/users", bodyParser, validateUserMW, UserController.createUser);

app.delete("/users/:userId", UserController.deleteUser);

app.put("/users/:userId", bodyParser, UserController.updateUser);

app.get("/test*", (req, res) => {
  res.send(`request.path is ${req.path} and request.method is ${req.method}`);
});

/*
app.post
app.put
app.patch
app.delete
*/

app.listen(PORT);
