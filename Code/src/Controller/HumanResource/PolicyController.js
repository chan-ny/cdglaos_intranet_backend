const { Policy } = require("../../Model");

class Policies {
  msg;
  //create
  async createPolicy(value) {
    await Policy.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create Policy is success",
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
  async updatePolicy(Id, value) {
    const policy = await Policy.findByPk(Id);
    if (policy) {
      await policy
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update Policy is success",
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
        msg: "The Policy Id is notfound",
      });
    }
    return this.msg;
  }

  //remove
  async removePolicy(Id) {
    const policy = await Policy.findByPk(Id);
    if (policy) {
      await policy
        .destroy()
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Remove Policy is success",
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
        msg: "The Policy Id is notfound",
        z,
      });
    }
    return this.msg;
  }
  //get
  async getPolicy(hr_Id) {
    const policy = await Policy.findAll({
      where: {
        hr_Id: {
          [Op.eq]: hr_Id,
        },
      },
    });
    if (policy) {
      return (this.msg = {
        status: 200,
        rs: law,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Policy Id is notfound",
      });
    }
  }
  //select
  async selectPolicy(Id) {
    const policy = await Policy.findByPk(Id);
    if (policy) {
      return (this.msg = {
        status: 200,
        rs: policy,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Policy Id is notfound",
      });
    }
  }
}

module.exports = Policies;
