const { Employee } = require("../../Model");
const { Op } = require("sequelize");
class Staff {
  msg;
  //create
  async createEmployee(value) {
    await Employee.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create employee is success",
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

  // maxId
  async MaxID() {
    await Employee.findOne({
      attribute: ["emp_Id"],
      order: [["emp_Id", "DESC"]],
    })
      .then((result) => {
        return (this.msg = {
          status: 200,
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
  //select
  async selectEmployee(Id) {
    await Employee.findOne({
      where: {
        emp_Id: {
          [Op.eq]: Id,
        },
      },
    })
      .then((result) => {
        if (result) {
          return (this.msg = {
            status: 200,
            rs: result,
          });
        } else {
          return (this.msg = {
            status: 404,
            msg: "The Employee Id is notfound",
          });
        }
      })
      .catch((err) => {
        return (this.msg = {
          status: 500,
          msg: err,
        });
      });
    return this.msg;
  }

  //modify image
  async modifyEmployee(Id, pathImage) {
    const staff = await Employee.findOne({
      where: {
        emp_Id: Id,
      },
    });
    if (staff) {
      await staff
        .update({
          emp_image: pathImage,
        })
        .then(() => {
          return (this.msg = {
            status: 200,
            rs: staff,
          });
        });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Employee Id is notfound",
      });
    }
    return this.msg;
  }

  // update
  async updateEmployee(Id, value) {
    const staff = await Employee.findOne({
      where: {
        emp_Id: Id,
      },
    });
    if (staff) {
      await staff.update(value).then(() => {
        return (this.msg = {
          status: 200,
          msg: "Update Staff is success",
          rs: staff,
        });
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Employee Id is notfound",
      });
    }
    return this.msg;
  }

  // inactive
  async inactiveEmployee(Id, value) {
    const staff = await Employee.findOne({
      where: {
        emp_Id: Id,
      },
    });
    if (staff) {
      await staff
        .update({
          emp_status: "inactive",
        })
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "The Staff to Inactive now",
            rs: staff,
          });
        });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Employee Id is notfound",
      });
    }
    return this.msg;
  }
  //all
  async allEmployee() {
    await Employee.findAll()
      .then((result) => {
        return (this.msg = {
          status: 200,
          counts: result.length,
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
}

module.exports = Staff;
