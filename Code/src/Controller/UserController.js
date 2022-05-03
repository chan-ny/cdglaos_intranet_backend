const { User } = require("../Model");
const { jwtCreate } = require("../Helper/Jwt");

class Users {
  msg;
  //regirter
  async registerUser(value) {
    await User.create(value)
      .then(() => {
        return (this.msg = {
          status: 200,
          msg: "register User is success",
        });
      })
      .catch((err) => {
        return (this.msg = {
          status: 200,
          msg: err,
        });
      });
    return this.msg;
  }

  //login
  async loginUser(value) {
    const users = await User.findOne({
      where: {
        uemail: value.uemail,
      },
    });
    if (!users) {
      return (this.msg = {
        status: 404,
        msg: "Email is not found",
      });
    }
    const isPassword = await users.comparePassword(value.upassowrd);
    if (!isPassword) {
      return (this.msg = {
        status: 404,
        msg: "Password is incurrect",
      });
    }
    const userJSON = users.toJSON();
    return (this.msg = {
      status: 200,
      result: userJSON,
      token: jwtCreate(userJSON), // create Token on User
    });
  }
  // all
  async displayUser() {
    await User.findAll().then((result) => {
      return (this.msg = {
        status: 200,
        count: result.length,
        rs: result,
      });
    });
    return this.msg;
  }
}

module.exports = Users;
