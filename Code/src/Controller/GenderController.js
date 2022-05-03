const { Gender } = require("../Model");

class Genders {
  //create
  async CreateGender(value) {
    let messaage;
    await Gender.create(value)
      .then(() => {
        messaage = "200";
      })
      .catch(() => {
        messaage = "501";
      });
    return messaage;
  }
  // update
  async UpdateGender(value) {
    let messaage;
    const gender = await Gender.findByPk(value.gd_Id);
    if (gender) {
      await gender
        .update(value)
        .then(() => {
          messaage = "200";
        })
        .catch(() => {
          messaage = "501";
        });
    } else {
      messaage = "404";
    }
    return messaage;
  }
  //disble
  async DisableGender(value) {
    let messaage;
    const gender = await Gender.findByPk(value.gd_Id);
    if (gender) {
      await gender
        .update({
          gd_status: "inactive",
        })
        .then(() => {
          messaage = "200";
        })
        .catch(() => {
          messaage = "501";
        });
    } else {
      messaage = "404";
    }
    return messaage;
  }
  //getGender
  async GetGender() {
    let messaage;
    await Gender.findAll().then((result) => {
      if (result) {
        messaage = result;
      } else {
        messaage = "500";
      }
    });
    return messaage;
  }
}

module.exports = Genders;
