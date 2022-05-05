const { Position } = require("../../Model");

class Positions {
  msg;
  //create
  async createPosition(value) {
    await Position.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create Position is success",
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
  //up
  async updatePosition(Id, value) {
    const position = await Position.findByPk(Id);
    if (position) {
      await position
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update Position is success",
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
        msg: "The Position Id is notfound",
      });
    }
    return this.msg;
  }
  // remove
  async removePosition(Id) {
    const position = await Position.findByPk(Id);
    if (position) {
      await position
        .destroy()
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Remove Position is success",
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
        msg: "The Position Id is notfound",
      });
    }
    return this.msg;
  }
  //all
  async allPosition() {
    await Position.findAll()
      .then((result) => {
        return (this.msg = {
          status: 200,
          counts: result.length,
          rs: result,
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
  //get
  async getPosition(Id) {
    const position = await Position.findByPk(Id);
    if (position) {
      return (this.msg = {
        status: 200,
        msg: "Find Position is success",
        rs: position,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Position Id is notfound",
      });
    }
  }
}
module.exports = Positions;
