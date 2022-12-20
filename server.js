const express = require("express");
const yup = require("yup");

const app = express();

const PORT = 5000;

const usersDB = [];

const bodyParser = express.json();

const USER_CREATION_SCHEMA = yup.object({
  login: yup.string().required(),
  password: yup.string().required(),
});

app.get("/users", (req, res) => {
  res.send(usersDB);
});

app.post(
  "/users",
  bodyParser,
  async (req, res, next) => {
    try {
      const validateUser = await USER_CREATION_SCHEMA.validate(req.body);
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  async (req, res) => {
    const newUser = {
      ...req.body,
      id: Date.now(),
    };

    usersDB.push(newUser);
    res.send(newUser);
  }
);

app.get("/test*", (req, res) => {
  res.send(`request.path is ${req.path} and request.method is ${req.method}`);
});

/* 
api.post
api.put
api.patch
api.
*/

app.listen(PORT);
