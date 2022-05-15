const { Op } = require("sequelize");
const { Evaluation } = require("../../Model");

class Evalautions {
  msg;
  //create
  async createEvaluation(value) {
    await Evaluation.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create Evaluation is success",
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
  async updateEvaluation(Id, value) {
    const evalaution = await Evaluation.findByPk(Id);
    if (evalaution) {
      await evalaution
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update Evaluation is success",
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
        msg: "The Evaluation Id is notfound",
      });
    }
    return this.msg;
  }

  //remove
  async removeEvaluation(Id) {
    const evalaution = await Evaluation.findByPk(Id);
    if (evalaution) {
      await evalaution
        .destroy()
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Remove Evaluation is success",
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
        msg: "The Evaluation Id is notfound",
      });
    }
    return this.msg;
  }
  //get
  async getEvaluation(hr_Id) {
    const evalaution = await Evaluation.findAll({
      where: {
        hr_Id: {
          [Op.eq]: hr_Id,
        },
      },
    });
    if (evalaution.length != 0) {
      return (this.msg = {
        status: 200,
        rs: evalaution,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Evaluation Id is notfound",
      });
    }
  }
  //select
  async selectEvaluation(Id) {
    const evalaution = await Evaluation.findByPk(Id);
    if (evalaution) {
      return (this.msg = {
        status: 200,
        rs: evalaution,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Evaluation Id is notfound",
      });
    }
  }
}

module.exports = Evalautions;
