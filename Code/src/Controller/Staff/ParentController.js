const { Parent } = require("../../Model");

class Parnets {
  msg;
  //create
  async createParent(value) {
    await Parent.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create Parent is success",
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
  async updateParnet(Id, value) {
    const parent = await Parent.findByPk(Id);
    if (parent) {
      await parent
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update Parnent is success",
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
        msg: "The Parnet Id is notfound",
      });
    }
  }

  //remove
  async removeHS(Id) {
    const parent = await Parent.findByPk(Id);
    if (parent) {
      await parent
        .destroy()
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Remove Parent is success",
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
        msg: "The Parnet Id is notfound",
      });
    }
  }
  //get
  async getHS(employee_Id) {
    const parent = await Parent.findOne({
      where: {
        employee_Id: employee_Id,
      },
    });
    if (parent) {
      return (this.msg = {
        status: 200,
        rs: parent,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Parnet Id is notfound",
      });
    }
  }
}

module.exports = Parnets;
