const { Gender } = require("../Model");
const { getPaginationData, getPagination } = require("../Helper/Pagination");

class Genders {
  msg;
  //create
  async CreateGender(value) {
    await Gender.create(value)
      .then(() => {
        return (this.msg = {
          status: 200,
          msgen: "Create Gender is success",
          msgla: "ບັນທຶກຂໍ້ມູນເພດສຳເລັດແລ້ວ",
        });
      })
      .catch(() => {
        return (this.msg = {
          status: 501,
          msgen: "Can`t Save Gender",
          msgen: "ບໍ່ສາມາດບັນທຶກຂໍ້ມູນເພດ",
        });
      });
    return this.msg;
  }
  // update
  async UpdateGender(Id, value) {
    const gender = await Gender.findByPk(Id);
    if (gender) {
      await gender
        .update(value)
        .then(() => {
          return (this.msg = {
            status: 200,
            msgen: "Update Gender is success",
            msgla: "ແກ້ໄຂຂໍ້ມູນເພດ",
          });
        })
        .catch(() => {
          return (this.msg = {
            status: 501,
            msgen: "Can`t Update Gender",
            msgla: "ບໍ່ສາມດແກ້ໄຂຂໍ້ມູນເພດ",
          });
        });
    } else {
      return (this.msg = {
        status: 404,
        msgen: "The Gender Id is notfound",
        msgla: "ຂໍ້ມູນເພດບໍ່ມີ",
      });
    }
    return this.msg;
  }
  //disble
  async DisableGender(Id, value) {
    const gender = await Gender.findByPk(Id);
    if (gender) {
      await gender
        .update({
          gd_status: value.status,
        })
        .then(() => {
          return (this.msg = {
            status: 200,
            msgen: "Disable Gender is success",
            msgla: "ເປີດ/ປີດການໃຊ້ງານ",
          });
        })
        .catch((err) => {
          return (this.msg = {
            status: 501,
            msgen: "Can`t gender disable",
            msgla: "ບໍ່ສາມາດປີດການໃຊ້ງານ",
          });
        });
    } else {
      return (this.msg = {
        status: 404,
        msgen: "The Gender Id is notfound",
        msgla: "ຂໍ້ມູນເພດບໍ່ມີ",
      });
    }
    return this.msg;
  }
  //getGender
  async GetGender(Id) {
    const gender = await Gender.findByPk(Id);
    if (gender) {
      return (this.msg = {
        status: 200,
        rs: gender,
      });
    } else {
      return (this.msg = {
        status: 404,
        msgen: "The Gender Id is notfound",
        msgla: "ຂໍ້ມູນເພດບໍ່ມີ",
      });
    }
  }
  //delete
  async genderDelete(Id) {
    const gender = await Gender.findByPk(Id);
    if (gender) {
      try {
        await gender.destroy();
        return (this.msg = {
          status: 200,
          msgen: "Delete Gender is success",
          msgla: "ລົບຂໍ້ມູນເພດສຳເລັດ",
        });
      } catch (error) {
        return (this.msg = {
          status: 501,
          msgen: "Can`t Delete Gender",
          msgla: "ບໍ່ສາມາດລືບຂໍ້ມູນເພດ",
        });
      }
    } else {
      return (this.msg = {
        status: 404,
        msgen: "The Gender Id is notfound",
        msgla: "ຂໍ້ມູນເພດບໍ່ມີ",
      });
    }
  }
  // all
  async genderAll(page, size) {
    const mCount = await Gender.findAll();
    const { limit, offset } = getPagination(page, size);
    await Gender.findAll({
      limit: limit,
      offset: offset,
    })
      .then((result) => {
        const response = getPaginationData(result, page, limit);
        return (this.msg = {
          status: 200,
          counts: mCount.length,
          rs: response,
        });
      })
      .catch(() => {
        return (this.msg = {
          status: 404,
          msgen: "Gender is notfound",
          msgla: "ບໍ່ມີຂໍ້ມູນເພດ",
        });
      });
    return this.msg;
  }
}

module.exports = Genders;
