const { Assets } = require("../../Model");

class Asset {
  msg;
  //create
  async createAssets(value) {
    await Assets.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create Assets is success",
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
  async modifyAssets(Id, pathImage) {
    const assets = await Assets.findByPk(Id);
    if (assets.length != 0) {
      await assets
        .update({
          aImage: pathImage,
        })
        .then(() => {
          return (this.msg = {
            status: 200,
            rs: assets,
          });
        });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Assets Id is notfound",
      });
    }
    return this.msg;
  }

  // update
  async updateAssets(Id, value) {
    const assets = await Assets.findByPk(Id);
    if (assets.length != 0) {
      await assets.update(value).then(() => {
        return (this.msg = {
          status: 200,
          msg: "Update Assets is success",
          rs: assets,
        });
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Assets Id is notfound",
      });
    }
    return this.msg;
  }
  //get
  async getAssets(hr_Id) {
    await Assets.findAll({
      where: {
        hr_Id: {
          [Op.eq]: hr_Id,
        },
      },
    })
      .then((result) => {
        if (result.length != 0) {
          return (this.msg = {
            status: 200,
            counts: result.length,
            rs: result,
          });
        } else {
          return (this.msg = {
            status: 200,
            msg: "Assets is Empty",
          });
        }
      })
      .catch((err) => {
        return (this.msg = {
          status: 500,
          msg: err,
        });
      });
    return this.msg;
  }
  //select
  async selectAssets(Id) {
    await Asset.findByPk(Id)
      .then((result) => {
        if (result.length != 0) {
          return (this.msg = {
            status: 200,
            rs: result,
          });
        } else {
          return (this.msg = {
            status: 200,
            msg: "Assets is Empty",
          });
        }
      })
      .catch((err) => {
        return (this.msg = {
          status: 500,
          msg: err,
        });
      });
    return this.msg;
  }
}

module.exports = Asset;
