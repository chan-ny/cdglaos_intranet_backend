const { Province, District } = require("../Model");

class Provinces {
  msg;
  //create
  async createProvince(value) {
    const provice = await Province.create(value)
      .then((result) => {
        return {
          status: 200,
          msgen: "Create The Province is success",
          msgla: "ບັນທືກແຂວງສຳເລັດແລ້ວ",
          rs: result,
        };
      })
      .catch(() => {
        return {
          status: 501,
          msgen: "Can`t Create The province Because value incurrect",
          msgla: "ບໍ່ສາມາດບັນທຶກຂໍ້ມູນແຂວງໄດ້ ເນື່ອງຈາກເກີດຂໍ້ຜີດພາດ",
        };
      });
    return provice;
  }
  //update
  async updateProvince(Id, value) {
    let msg;
    const provice = await Province.findByPk(Id);
    if (provice) {
      await provice
        .update(value)
        .then(() => {
          return (msg = {
            status: 200,
            msgen: "Updatae The Province is success",
            msgla: "ແກ້ໄຂຂໍ້ມູນແຂວງສຳເລັດແລ້ວ",
          });
        })
        .catch(() => {
          return (msg = {
            status: 501,
            msgen: "Can`t Updatae at The Province",
            msgla: "ບໍ່ສາມາດຂໍ້ມູນແຂວງ",
          });
        });
    } else {
      return (msg = {
        status: 404,
        msgen: "The Province ID is notfound",
        msgla: "ລະຫັດແຂວງບໍ່ມີ",
      });
    }
    return msg;
  }
  //remove
  async removeProvince(Id) {
    let msg;
    const provice = await Province.findByPk(Id);
    if (provice) {
      await provice
        .destroy()
        .then(() => {
          return (msg = {
            status: 200,
            msgen: "Delete The Province is success",
            msgla: "ລືບຂໍ້ມູນແຂວງສຳເລັດແລ້ວ",
          });
        })
        .catch(() => {
          return (msg = {
            status: 501,
            msgen: "Can`t delete at The Province",
            msgla: "ບໍ່ສາມາດລືບຂໍ້ມູນແຂວງ",
          });
        });
    } else {
      return (msg = {
        status: 404,
        msgen: "The Province ID is notfound",
        msgla: "ລະຫັດແຂວງບໍ່ມີ",
      });
    }
    return msg;
  }
  //all
  async allProvince() {
    const provice = await Province.findAll({
      include: [
        {
          model: District,
          attributes: ["dt_laoName", "dt_engName", "createdAt"],
        },
      ],
    })
      .then((result) => {
        if (result) {
          return {
            status: 200,
            consts: result.length,
            rs: result,
          };
        } else {
          return {
            status: 404,
            msgen: "The Province Id is notfound",
            msgla: "ຂໍ້ມູນແຂວງບໍ່ມີ",
          };
        }
      })
      .catch(() => {
        return {
          status: 501,
          msgen: "Can`t load value of province",
          msgla: "ບໍ່ສາມາດໂຫລດຂໍ້ມູນແຂວງໄດ້",
        };
      });
    return provice;
  }
  //select province
  async getProvince(Id) {
    const provice = await Province.findByPk(Id);
    if (provice) {
      return (this.msg = {
        status: 200,
        rs: provice,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The province Id is notfound",
      });
    }
  }
}

module.exports = Provinces;
