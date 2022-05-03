const { Province } = require("../Model");

class Provinces {
  //create
  async createProvince(value) {
    const provice = await Province.create(value)
      .then((result) => {
        return {
          status: 200,
          msg: "Create The Province is success",
          rs: result,
        };
      })
      .catch((err) => {
        return {
          status: 501,
          msg: "Can`t Create The province Because value incurrect",
          rs: err,
        };
      });
    return provice;
  }
  //update
  async updateProvince(value) {
    let msg;
    const provice = await Province.findByPk(value.pv_Id);
    if (provice) {
      await provice
        .update(value)
        .then((result) => {
          return (msg = {
            status: 200,
            msg: "Updatae The Province is success",
            rs: result,
          });
        })
        .catch((err) => {
          return (msg = {
            status: 501,
            msg: "Can`t Updatae at The Province",
            rs: err,
          });
        });
    } else {
      return (msg = {
        status: 404,
        msg: "The Province ID is notfound",
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
            msg: "Delete The Province is success",
          });
        })
        .catch((err) => {
          return (msg = {
            status: 501,
            msg: "Can`t Updatae at The Province",
            rs: err,
          });
        });
    } else {
      return (msg = {
        status: 404,
        msg: "The Province ID is notfound",
      });
    }
    return msg;
  }
  //all
  async allProvince() {
    const provice = await Province.findAll()
      .then((result) => {
        if (result) {
          return {
            status: 200,
            msg: "Display all The Province",
            consts: result.length,
            rs: result,
          };
        } else {
          return {
            status: 404,
            msg: "The Province Id is notfound",
          };
        }
      })
      .catch((err) => {
        return {
          status: 200,
          msg: "Can`t load value of province",
          rs: err,
        };
      });
    return provice;
  }
  //select province
  async getProvince(value) {
    const provice = await Province.findByPk(value.pv_Id)
      .then((result) => {
        if (result) {
          return {
            status: 200,
            msg: "get vaalue Product",
            rs: result,
          };
        } else {
          return {
            status: 404,
            msg: "the Province Id is notfound",
          };
        }
      })
      .catch((err) => {
        return {
          status: 501,
          msg: err,
        };
      });
    return provice;
  }
}

module.exports = Provinces;
