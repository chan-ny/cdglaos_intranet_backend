const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const Morgen = require("morgan");
const { sequelize } = require("./Model");

const port = process.env.PORT || 3100;
const IP = "0.0.0.0";

app.use(Morgen("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors access client
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "public")));

require("./router")(app);
require("./Helper/Passport");

app.get("/", (req, res) => {
  res.send("Hello, Intranet");
});
// sequelize.sync({ force: true }).then(() => {
//   app.listen(port, IP, () => {
//     console.log(`Server Running ${(IP, port)}`);
//   });
// });

app.listen(port, IP, () => {
  console.log(`Server Running ${(IP, port)}`);
});