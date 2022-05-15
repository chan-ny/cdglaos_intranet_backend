const { Op } = require("sequelize");
const { Typevaluation } = require("../../Model");

class TypeEvalautions {
  msg;
  //create
  async createTEVT(value) {
    await Typevaluation.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create Typevaluation is success",
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
  async updateTEVT(Id, value) {
    const type_evalaution = await Typevaluation.findByPk(Id);
    if (type_evalaution) {
      await type_evalaution
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update Typevaluation is success",
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
        msg: "The Typevaluation Id is notfound",
      });
    }
    return this.msg;
  }

  //remove
  async removeTEVT(Id) {
    const type_evalaution = await Typevaluation.findByPk(Id);
    if (type_evalaution) {
      await type_evalaution
        .destroy()
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Remove Typevaluation is success",
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
        msg: "The Typevaluation Id is notfound",
      });
    }
    return this.msg;
  }
  //get
  async getTEVT(hr_Id) {
    const type_evalaution = await Typevaluation.findAll({
      where: {
        hr_Id: {
          [Op.eq]: hr_Id,
        },
      },
    });
    if (type_evalaution.length != 0) {
      return (this.msg = {
        status: 200,
        rs: type_evalaution,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Typevaluation Id is notfound",
      });
    }
  }
  //select
  async selectTEVT(Id) {
    const type_evalaution = await Typevaluation.findByPk(Id);
    if (type_evalaution) {
      return (this.msg = {
        status: 200,
        rs: type_evalaution,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Typevaluation Id is notfound",
      });
    }
  }
}

module.exports = TypeEvalautions;
