const { jwtCreate } = require("../Helper/Jwt");
const { User } = require("../Model");

module.exports = {
  // Registert User
  async RegisterUser(req, res) {
    try {
      const users = await User.create(req.body);
      if (users) {
        res.status(200).send({
          msg: "Create User is The Complete",
          result: users,
        });
      }
    } catch (error) {
      res.status(500).send({
        err: error.parent.sqlMessage,
      });
    }
  },
  // Login User
  async LoginUser(req, res) {
    const { uemail, upassowrd } = req.body;
    const users = await User.findOne({
      where: {
        uemail: uemail,
      },
    });
    if (!users) {
      return res.status(404).send({
        err: " Email is not found",
      });
    }
    const isPassword = users.comparePassword(upassowrd);
    if (!isPassword) {
      return res.status(404).send({
        err: "Password is incorrect",
      });
    }
    const userJSON = users.toJSON();
    res.status(200).send({
      result: userJSON,
      token: jwtCreate(userJSON),// create Token on User
    });
  },
  // index User
  async index(req, res) {
    try {
      const users = await User.findAll();
      if (users) {
        res.status(200).send({
          result: users,
        });
      }
    } catch (error) {
      res.status(501).send({
        err: error,
      });
    }
  },
};
