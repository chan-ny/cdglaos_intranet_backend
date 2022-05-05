const { HR } = require("../../Model");

class HumanResource {
  msg;
  ///create
  async createHR(value) {
    await HR.crate(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create HumanResource is success",
          rs: result,
        });
      })
      .catch((err) => {
        return (this.msg = {
          status: 500,
          msg: err,
        });
      });
    return this.msg;
  }
  //get
  async getHR(Id) {
    const hr = await HR.findByPk(Id);
    if (hr) {
      return (this.msg = {
        status: 200,
        rs: hr,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The HumanResource Id is notfound",
      });
    }
  }
}

module.exports = HumanResource;
