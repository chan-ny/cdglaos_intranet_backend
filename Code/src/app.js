const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const Morgen = require("morgan");
const { sequelize } = require("./Model");
const middleware = require("./Helper/isAuthen");

const port = process.env.PORT || 3100;
const IP = "0.0.0.0";

app.use(Morgen("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors access client
app.use(cors());

// uri = http://127.0.0.1:3100/public/images/default_iamge.jpg
app.use("/public", express.static(path.join(__dirname, "public")));
require("./Helper/Passport");

app.use("/api", middleware, require("./Router/index"));

app.use("/pm", require("./Router/index"));

app.get("/", (req, res) => {
  res.send("Hello, Intranet");
});
// sequelize.sync({ force: false }).then(() => {
//   app.listen(port, IP, () => {
//     console.log(`Server Running ${(IP, port)}`);
//   });
// });

app.listen(port, IP, () => {
  console.log(`Server Running ${(IP, port)}`);
});
