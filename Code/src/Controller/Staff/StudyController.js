const { Op } = require("sequelize");
const { Study } = require("../../Model");

class Studies {
  msg;
  //create
  async createStudy(value) {
    await Study.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create Study is success",
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
  //modify image
  async modifyImage_Study(Id, pahtImage) {
    const study = await Study.findByPk(Id);
    if (study) {
      await study
        .update({
          std_Image: pahtImage,
        })
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update Study Image is success",
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
        msg: "The Study Id is notfound",
      });
    }
    return this.msg;
  }
  //update
  async updateStudy(Id, value) {
    const study = await Study.findByPk(Id);
    if (study) {
      await study
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update Study is success",
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
        msg: "The Study Id is notfound",
      });
    }
    return this.msg;
  }

  //remove
  async removeStudy(Id) {
    const study = await Study.findByPk(Id);
    if (study) {
      await study
        .destroy()
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Remove Study is success",
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
        msg: "The Study Id is notfound",
        z,
      });
    }
    return this.msg;
  }
  //get
  async getStudy(employee_Id) {
    const study = await Study.findAll({
      where: {
        employee_Id: {
          [Op.eq]: employee_Id,
        },
      },
    });
    if (study.length != 0) {
      return (this.msg = {
        status: 200,
        counts: study.length,
        rs: study,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Study Id is notfound",
      });
    }
  }
  //select
  async selectStudy(Id) {
    const study = await Study.findByPk(Id);
    if (study.length != 0) {
      return (this.msg = {
        status: 200,
        rs: study,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Study Id is notfound",
      });
    }
  }
}

module.exports = Studies;
