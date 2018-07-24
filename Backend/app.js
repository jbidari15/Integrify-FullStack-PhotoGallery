const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const studentRoutes = require("./routes/students.js");
app.use("/integrify/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("This is the root route");
});

app.listen(port, (req, res) => {
  console.log(`The server is running at port - ${port}`);
});
