const { Experience, Employee } = require("../../Model");

class Experiences {
  msg;
  //create
  async createExperience(value) {
    await Experience.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create Experience is success",
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
  async updateExperience(Id, value) {
    const experience = await Experience.findByPk(Id);
    if (experience) {
      await experience
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update Experience is success",
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
        msg: "The Experience Id is notfound",
      });
    }
  }

  //remove
  async removeExperienc(Id) {
    const experience = await Experience.findByPk(Id);
    if (experience) {
      await experience
        .destroy()
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Remove Experience is success",
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
        msg: "The Experience Id is notfound",
        z,
      });
    }
  }
  //get
  async getExperience(employee_Id) {
    const experience = await Experience.findAll({
      where: {
        employee_Id: employee_Id,
      },
      order: [["epr_Id", "DESC"]],
      attibutes: [
        "epr_Id",
        "epr_companyName",
        "epr_fromdate",
        "epr_toDate",
        "epr_position",
        "epr_salary",
        "epr_detail",
      ],
      include: [{ model: Employee, as: "Employees", attibutes: ["emp_Id"] }],
    });
    if (experience) {
      return (this.msg = {
        status: 200,
        rs: experience,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Experience Id is notfound",
      });
    }
  }
  async selectExperience(Id) {
    const experience = await Experience.findByPk(Id);
    if (experience) {
      return (this.msg = {
        status: 200,
        rs: experience,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Experience Id is notfound",
      });
    }
  }
}

module.exports = Experiences;
