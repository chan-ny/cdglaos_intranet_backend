const { HusbandWife } = require("../../Model");

class Husbandwifes {
  msg;
  //create
  async createHW(value) {
    await HusbandWife.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create HusbandWife is success",
          re: result,
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
  //update
  async updateHW(Id, value) {
    const husbandwife = await HusbandWife.findByPk(Id);
    if (husbandwife) {
      await husbandwife
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update HusbandWife is success",
            rs: result,
          });
        })
        .catch((err) => {
          return (this.msg = {
            status: 500,
            msg: err,
          });
        });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The HusbandWife Id is notfound",
      });
    }
    return this.msg;
  }

  //remove
  async removeHW(Id) {
    const husbandwife = await HusbandWife.findByPk(Id);
    if (husbandwife) {
      await husbandwife
        .destroy()
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Remove HusbandWife is success",
          });
        })
        .catch((err) => {
          return (this.msg = {
            status: 500,
            msg: err,
          });
        });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The HusbandWife Id is notfound",
        z,
      });
    }
    return this.msg;
  }
  //get
  async getHW(employee_Id) {
    const husbandwife = await HusbandWife.findAll({
      where: {
        employee_Id: employee_Id,
      },
    });
    if (husbandwife) {
      return (this.msg = {
        status: 200,
        rs: husbandwife,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The HusbandWife Id is notfound",
      });
    }
  }
}

module.exports = Husbandwifes;
