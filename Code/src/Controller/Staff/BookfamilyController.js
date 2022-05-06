const { Bookfimary } = require("../../Model");

class Bookfamilies {
  msg;
  //create
  async createFamily(value) {
    await Bookfimary.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create Bookfamily is success",
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
  //modify image
  async modifyImage_family(Id, pahtImage) {
    const bookfamily = await Bookfimary.findByPk(Id);
    if (bookfamily) {
      await bookfamily
        .update({
          bf_image: pahtImage,
        })
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update Bookfamily Image is success",
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
        msg: "The Bookfamily Id is notfound",
      });
    }
    return this.msg;
  }
  // update
  async updateFamily(Id, value) {
    const bookfamily = await Bookfimary.findByPk(Id);
    if (bookfamily) {
      await bookfamily
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update Bookfamily is success",
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
        msg: "The Bookfamily Id is notfound",
      });
    }
    return this.msg;
  }
  //remove
  async removeBoofamily(Id) {
    const bookfamily = await Bookfimary.findByPk(Id);
    if (bookfamily) {
      await bookfamily
        .destroy()
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Remove bookfamily is success",
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
        msg: "The Bookfamily Id is notfound",
      });
    }
  }
  //get
  async getBookfimaly(employee_Id) {
    const bookfamily = await Bookfimary.findOne({
      where: {
        employee_Id: employee_Id,
      },
    });
    if (bookfamily) {
      return (this.msg = {
        status: 200,
        rs: bookfamily,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Bookfamily Id is notfound",
      });
    }
  }
  //select
  async selectBookfimaly(Id) {
    const bookfamily = await Bookfimary.findByPk(Id);
    if (bookfamily) {
      return (this.msg = {
        status: 200,
        rs: bookfamily,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Bookfamily Id is notfound",
      });
    }
  }
}

module.exports = Bookfamilies;
