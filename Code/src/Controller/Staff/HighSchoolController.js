const { Highschool } = require("../../Model");

class HighSchools {
  msg;
  //create
  async createHS(value) {
    await Highschool.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create HighSchool is success",
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
  async updateHS(Id, value) {
    const highschool = await Highschool.findByPk(Id);
    if (highschool) {
      await highschool
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update HighSchool is success",
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
        msg: "The HighSchool Id is notfound",
      });
    }
    return this.msg;
  }

  //remove
  async removeHS(Id) {
    const highschool = await Highschool.findByPk(Id);
    if (highschool) {
      await highschool
        .destroy()
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Remove HighSchool is success",
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
        msg: "The HighSchool Id is notfound",
      });
    }
    return this.msg;
  }
  //get
  async getHS(employee_Id) {
    const highschool = await Highschool.findOne({
      where: {
        employee_Id: employee_Id,
      },
    });
    if (highschool) {
      return (this.msg = {
        status: 200,
        rs: highschool,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The HighSchool Id is notfound",
      });
    }
  }
}
module.exports = HighSchools;
