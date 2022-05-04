const controller = require("../Controller/index");
const users = new controller.Usercontroller();

module.exports = {
  RegisterUser(req, res) {
    users.registerUser(req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  Loginuser(req, res) {
    users.loginUser(req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  DisplayUser(req, res) {
    users.displayUser().then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  ChangePassword(req, res) {
    users.changePaqssword(req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
