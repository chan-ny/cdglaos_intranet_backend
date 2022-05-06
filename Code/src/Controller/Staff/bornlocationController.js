const { BornLocation } = require("../../Model");

class Bornlocations {
  msg;
  //create
  async createBL(value) {
    await BornLocation.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create BornLocation is success",
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
  async updateBL(Id, value) {
    const bornlocation = await BornLocation.findByPk(Id);
    if (bornlocation) {
      await bornlocation
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update BornLocation is success",
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
        msg: "The BornLocation Id is notfound",
      });
    }
  }

  //remove
  async removeBL(Id) {
    const bornlocation = await BornLocation.findByPk(Id);
    if (bornlocation) {
      await bornlocation
        .destroy()
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Remove BornLocation is success",
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
        msg: "The BornLocation Id is notfound",
      });
    }
  }
  //get
  async getBL(employee_Id) {
    const bornlocation = await BornLocation.findOne({
      where: {
        employee_Id: employee_Id,
      },
    });
    if (bornlocation) {
      return (this.msg = {
        status: 200,
        rs: bornlocation,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Bornlocation Id is notfound",
      });
    }
  }
}

module.exports = Bornlocations;
