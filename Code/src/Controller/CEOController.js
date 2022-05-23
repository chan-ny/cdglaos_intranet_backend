const { CEOS, sequelize, User } = require("../Model");
const { QueryTypes } = require("sequelize");

class ChiefExecutiveOfficer {
  msg;

  //create
  async createCEO(value) {
    await CEOS.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msgen: "Create Chif Excecutive Officer is success",
          msgla: "ບັນທຶກຂໍ້ມູນຜູ້ບໍລິຫານສຳເລັດແລ້ວ",
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
      const user = await User.findOne({
        where: {
          uemail: value.uemail,
        },
      });
      if (user) {
        return (this.msg = {
          status: 501,
          msgen: "Email is Duplicate",
          msgla: "ອີເມວມີຢູ່ແລ້ວ",
        });
      } else {
        const user_Id = ceo.dataValues.user_Id;
        const userUpdate = await User.findByPk(user_Id);
        userUpdate.update(value);
        ceo.update(value);
        return (this.msg = {
          status: 200,
          msgen: "Update ceo content is success",
          msgla: "ແກ້ໄຂຂໍ້ມູນຜູ້ບໍລິຫານສຳເລັດແລ້ວ",
        });
      }
    } else {
      return (this.msg = {
        status: 404,
        msg: "CEO Id is notfound",
      });
    }
  }
  //datete
  async removeCEO(Id) {
    const ceo = await CEOS.findByPk(Id);
    if (ceo) {
      const user_Id = ceo.dataValues.user_Id;
      try {
        ceo.destroy();
        const user = await User.findByPk(user_Id);
        user.destroy();
        return (this.msg = {
          status: 200,
          msgen: "find ceo profiel is success",
          msgla: "ລືບຂໍ້ມູນຜູ້ບໍລິຫານສຳເລັດແລ້ວ",
        });
      } catch (error) {
        return (this.msg = {
          status: 501,
          msgen: "Error server",
          msgls: "ເຊີເວິເກີດຂໍ້ຜີດພາດ",
        });
      }
    } else {
      return (this.msg = {
        status: 404,
        msg: "CEO Id is notfound",
      });
    }
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
        "select CEOs.ceo_Id,Compnays.cpn_name,Compnays.cpn_serialNumber,Roles.role_name, CEOs.ceo_name,CEOs.ceo_phone,CEOs.ceo_tell,Users.uemail,CEOs.ceo_image from CEOs" +
          " inner join Compnays on CEOs.company_Id = Compnays.cpn_Id " +
          " inner join Users on CEOs.user_Id = Users.uer_Id " +
          " inner join Roles on Users.role_Id = Roles.role_Id ",
        { type: QueryTypes.SELECT }
      )
      .then((result) => {
        if (result.length != 0) {
          return (this.msg = {
            status: 200,
            counts: result.length,
            rs: result,
          });
        } else {
          return (this.msg = {
            status: 404,
            msgen: "Don`t have Date",
            msgla: "ບໍ່ມີຂໍ້ມູນ",
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

module.exports = ChiefExecutiveOfficer;
