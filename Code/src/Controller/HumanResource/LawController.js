const { Law } = require("../../Model");

class Laws {
  msg;
  //create
  async createLaw(value) {
    await Law.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create Law is success",
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
  async updateLaw(Id, value) {
    const law = await Law.findByPk(Id);
    if (law) {
      await law
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update Law is success",
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
        msg: "The Law Id is notfound",
      });
    }
    return this.msg;
  }

  //remove
  async removeLaw(Id) {
    const law = await Law.findByPk(Id);
    if (law) {
      await law
        .destroy()
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Remove Law is success",
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
        msg: "The Law Id is notfound",
        z,
      });
    }
    return this.msg;
  }
  //get
  async getLaw(hr_Id) {
    const law = await Law.findAll({
      where: {
        hr_Id: {
          [Op.eq]: hr_Id,
        },
      },
    });
    if (law) {
      return (this.msg = {
        status: 200,
        rs: law,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Law Id is notfound",
      });
    }
  }
  //select
  async selectLaw(Id) {
    const law = await Law.findByPk(Id);
    if (law) {
      return (this.msg = {
        status: 200,
        rs: law,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Law Id is notfound",
      });
    }
  }
}

module.exports = Laws;
