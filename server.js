const express = require("express");

const app = express();

const PORT = 5000;

app.get("/users", (req, res) => {
  res.send([{ id: 1 }, { id: 2 }]);
});

app.post(
  "/users",
  (req, res, next) => {
    console.log("first middleware");
    next();
  },
  (req, res, next) => {
    console.log("second middleware");
    next();
  },
  (req, res, next) => {
    console.log("final func");
    res.send("user created");
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
