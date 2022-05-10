const { Welfare } = require("../../Model");

class Welfares {
  msg;
  //create
  async createWelfare(value) {
    await Welfare.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create Welfare is success",
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
  async updateWelfare(Id, value) {
    const welfare = await Welfare.findByPk(Id);
    if (welfare) {
      await welfare
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update Welfare is success",
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
        msg: "The Welfare Id is notfound",
      });
    }
    return this.msg;
  }

  //remove
  async removeWelfare(Id) {
    const welfare = await Welfare.findByPk(Id);
    if (welfare) {
      await welfare
        .destroy()
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Remove Welfare is success",
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
        msg: "The Welfare Id is notfound",
        z,
      });
    }
    return this.msg;
  }
  //get
  async getWelfare(hr_Id) {
    const welfare = await Welfare.findAll({
      where: {
        hr_Id: {
          [Op.eq]: hr_Id,
        },
      },
    });
    if (welfare) {
      return (this.msg = {
        status: 200,
        rs: law,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Welfare Id is notfound",
      });
    }
  }
  //select
  async selectWelfare(Id) {
    const welfare = await Welfare.findByPk(Id);
    if (welfare) {
      return (this.msg = {
        status: 200,
        rs: welfare,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Welfare Id is notfound",
      });
    }
  }
}

module.exports = Welfares;
