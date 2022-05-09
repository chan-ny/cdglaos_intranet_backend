const { Op } = require("sequelize");
const { Ability } = require("../../Model");

class Abilties {
  msg;
  //create
  async createAbility(value) {
    await Ability.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create Ability is success",
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
  async updateAbility(Id, value) {
    const ability = await Ability.findByPk(Id);
    if (ability) {
      await ability
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update Ability is success",
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
        msg: "The Ability Id is notfound",
      });
    }
    return this.msg;
  }

  //remove
  async removeAbility(Id) {
    const ability = await Ability.findByPk(Id);
    if (ability) {
      await ability
        .destroy()
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Remove Ability is success",
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
        msg: "The Ability Id is notfound",
        z,
      });
    }
    return this.msg;
  }
  //get
  async getAbility(employee_Id) {
    const ability = await Ability.findOne({
      where: {
        employee_Id: {
          [Op.eq]: employee_Id,
        },
      },
    });
    if (ability) {
      return (this.msg = {
        status: 200,
        rs: ability,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Ability Id is notfound",
      });
    }
  }
  //select
  async selectAbility(Id) {
    const ability = await Ability.findByPk(Id);
    if (ability) {
      return (this.msg = {
        status: 200,
        rs: ability,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Ability Id is notfound",
      });
    }
  }
  // check value duplicate
  async duplicateAbility(Id) {
    await Ability.findOne({
      where: {
        employee_Id: {
          [Op.eq]: Id,
        },
      },
    })
      .then((result) => {
        if (result) {
          return (this.msg = {
            status: 200,
            msg: "Value Emplouyee Id is Duplicate",
            rs: result,
          });
        } else {
          return (this.msg = {
            status: 404,
            msg: "Ability Id Is notfound",
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
}

module.exports = Abilties;
