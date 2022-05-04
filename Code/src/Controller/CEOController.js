const { CEOS, sequelize } = require("../Model");
const { QueryTypes } = require("sequelize");

class ChiefExecutiveOfficer {
  msg;

  //create
  async createCEO(value) {
    await CEOS.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create Chif Excecutive Officer is success",
          rs: result,
        });
      })
      .catch((err) => {
        return (this.msg = {
          status: 501,
          msg: err,
        });
      });
    return this.msg;
  }
  // upload profile
  async uploadProfile(Id, profile) {
    const ceo = await CEOS.findByPk(Id);
    if (ceo) {
      await ceo
        .update({
          ceo_image: profile,
        })
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Update ceo profiel is success",
          });
        });
    } else {
      return (this.msg = {
        status: 404,
        msg: "CEO Id is notfound",
      });
    }
    return this.msg;
  }
  //update
  async updateCEO(Id, value) {
    // require name, phone, tell
    const ceo = await CEOS.findByPk(Id);
    if (ceo) {
      await ceo.update(value).then(() => {
        return (this.msg = {
          status: 200,
          msg: "Update ceo content is success",
        });
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "CEO Id is notfound",
      });
    }
    return this.msg;
  }
  //get
  async getCEO(Id) {
    const ceo = await CEOS.findByPk(Id);
    if (ceo) {
      return (this.msg = {
        status: 200,
        msg: "find ceo profiel is success",
        rs: ceo,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "CEO Id is notfound",
      });
    }
  }
  //all
  async allCEO() {
    await sequelize
      .query(
        "select CEOs.ceo_Id,Compnays.cpn_name,Compnays.cpn_serialNumber,Roles.role_name, CEOs.ceo_name,CEOs.ceo_tell,CEOs.ceo_image from CEOs" +
          " inner join Compnays on CEOs.company_Id = Compnays.cpn_Id " +
          " inner join Users on CEOs.user_Id = Users.uer_Id " +
          " inner join Roles on Users.role_Id = Roles.role_Id ",
        { type: QueryTypes.SELECT }
      )
      .then((result) => {
        return (this.msg = {
          status: 200,
          counts: result.length,
          rs: result,
        });
      })
      .catch((err) => {
        return (this.msg = {
          status: 200,
          msg: err,
        });
      });
    return this.msg;
  }
}

module.exports = ChiefExecutiveOfficer;
