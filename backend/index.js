const fileModule = require("fs");
const { response } = require("express");
const expressModule = require("express");

const app = expressModule();
const cors = require("cors");
app.options("/", cors());
//const Joi = require("joi");
//let arr = "";
app.use(expressModule.json());
let fileContents = fileModule.readFileSync("./projects.json");
console.log("IN FILE");

let arr = JSON.parse(fileContents);
console.log(arr);
const users = [];
fileContents = fileModule.readFileSync("./prog.json");
let arr2 = JSON.parse(fileContents);
console.log(arr2);

app.get("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send({ arr, arr2 });
  //res.send(arr);
});
app.post("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log("in post method");
  const user = {
    id: users.length + 1,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    country: req.body.country,
  };
  users.push(user);
  console.log(users);
  console.log(
    "Sending response back to frontend after adding user to the array"
  );
  res.send("Register Successful");
});
app.listen(3003, () => {
  console.log("Server started: Listening at port 3003");
});
