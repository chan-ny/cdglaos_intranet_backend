const { Gender } = require("../Model");

class Genders {
  msg;
  //create
  async CreateGender(value) {
    await Gender.create(value)
      .then(() => {
        return (this.msg = {
          status: 200,
          msg: "Create Gender is success",
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
  // update
  async UpdateGender(value) {
    const gender = await Gender.findByPk(value.gd_Id);
    if (gender) {
      await gender
        .update(value)
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Update Gender is success",
          });
        })
        .catch((err) => {
          return (this.msg = {
            status: 501,
            msg: err,
          });
        });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Gender Id is notfound",
      });
    }
    return this.msg;
  }
  //disble
  async DisableGender(value) {
    const gender = await Gender.findByPk(value.gd_Id);
    if (gender) {
      await gender
        .update({
          gd_status: "inactive",
        })
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Disable Gender is success",
          });
        })
        .catch((err) => {
          return (this.msg = {
            status: 501,
            msg: err,
          });
        });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Gender Id is notfound",
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
        rs: "The Gender Id is notfuond",
      });
    }
  }
  // all
  async genderAll() {
    await Gender.findAll()
      .then((result) => {
        return (this.msg = {
          status: 200,
          counts: result.length,
          rs: result,
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
