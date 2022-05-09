const { Op } = require("sequelize");
const { HR } = require("../../Model");

class HumanResource {
  msg;
  ///create
  async createHR(value) {
    const hr = await HR.findOne({
      where: {
        employee_Id: {
          [Op.eq]: value.employee_Id,
        },
      },
    });
    if (hr) {
      return (this.msg = {
        status: 501,
        msg: "Data Employee Id is Duplicate",
      });
    } else {
      await HR.create(value)
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
    }
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
