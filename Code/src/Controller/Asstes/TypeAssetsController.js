const { Typeassets } = require("../../Model");

class TypeAssets {
  msg;
  //create
  async createTypeassets(value) {
    await Typeassets.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create Typeassets is success",
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
  async updateTypeassets(Id, value) {
    const type_assets = await Typeassets.findByPk(Id);
    if (type_assets) {
      await type_assets
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update Typeassets is success",
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
        msg: "The Typeassets Id is notfound",
      });
    }
    return this.msg;
  }

  //remove
  async removeTypeassets(Id) {
    const type_assets = await Typeassets.findByPk(Id);
    if (type_assets) {
      await type_assets
        .destroy()
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Remove Typeassets is success",
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
        msg: "The Typeassets Id is notfound",
        z,
      });
    }
    return this.msg;
  }
  //get
  async getTypeassets(hr_Id) {
    const type_assets = await Typeassets.findAll({
      where: {
        hr_Id: {
          [Op.eq]: hr_Id,
        },
      },
    });
    if (type_assets) {
      return (this.msg = {
        status: 200,
        rs: law,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Typeassets Id is notfound",
      });
    }
  }
  //select
  async selectTypeassets(Id) {
    const type_assets = await Typeassets.findByPk(Id);
    if (type_assets) {
      return (this.msg = {
        status: 200,
        rs: type_assets,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Typeassets Id is notfound",
      });
    }
  }
}

module.exports = TypeAssets;
