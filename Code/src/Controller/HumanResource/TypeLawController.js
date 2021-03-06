const { Op } = require("sequelize");
const { TypeLaw } = require("../../Model");

class TypeLaws {
  msg;
  //create
  async createTypeLaw(value) {
    await TypeLaw.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create TypeLaw is success",
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
  async updateTypeLaw(Id, value) {
    const typelaw = await TypeLaw.findByPk(Id);
    if (typelaw) {
      await typelaw
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update TypeLaw is success",
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
        msg: "The TypeLaw Id is notfound",
      });
    }
    return this.msg;
  }

  //remove
  async removeTypeLaw(Id) {
    const typelaw = await TypeLaw.findByPk(Id);
    if (typelaw) {
      await typelaw
        .destroy()
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Remove TypeLaw is success",
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
        msg: "The TypeLaw Id is notfound",
        z,
      });
    }
    return this.msg;
  }
  //get
  async getTypeLaw(hr_Id) {
    const typelaw = await TypeLaw.findAll({
      where: {
        hr_Id: {
          [Op.eq]: hr_Id,
        },
      },
    });
    if (typelaw.length != 0) {
      return (this.msg = {
        status: 200,
        rs: typelaw,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The TypeLaw Id is notfound",
      });
    }
    return;
  }
  //select
  async selectTypeLaw(Id) {
    const typelaw = await TypeLaw.findByPk(Id);
    if (typelaw) {
      return (this.msg = {
        status: 200,
        rs: typelaw,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The TypeLaw Id is notfound",
      });
    }
  }
}

module.exports = TypeLaws;
