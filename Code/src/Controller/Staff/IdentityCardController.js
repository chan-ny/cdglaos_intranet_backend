const { IdentityCard } = require("../../Model");

class Identirycards {
  msg;
  //create
  async createIdentitycard(value) {
    await IdentityCard.create(value)
      .then((result) => {
        return (this.msg = {
          status: 200,
          msg: "Create IdentityCard is success",
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
  async modifyImage_Indentitycard(Id, pahtImage) {
    const identitycard = await IdentityCard.findByPk(Id);
    if (identitycard) {
      await identitycard
        .update({
          ind_image: pahtImage,
        })
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update IdentityCard Image is success",
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
        msg: "The IdentityCard Id is notfound",
      });
    }
    return this.msg;
  }
  //update
  async updateIdentiryCard(Id, value) {
    const identitycard = await IdentityCard.findByPk(Id);
    if (identitycard) {
      await identitycard
        .update(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Update Identitycard is success",
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
        msg: "The Identitycard Id is notfound",
      });
    }
  }

  //remove
  async removeIndentitycard(Id) {
    const identitycard = await IdentityCard.findByPk(Id);
    if (identitycard) {
      await identitycard
        .destroy()
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Remove Identitycard is success",
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
        msg: "The Identitycard Id is notfound",
        z,
      });
    }
  }
  //get
  async getIdentitycard(employee_Id) {
    const identitycard = await IdentityCard.findOne({
      where: {
        employee_Id: employee_Id,
      },
    });
    if (identitycard) {
      return (this.msg = {
        status: 200,
        rs: identitycard,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The IdentityCard Id is notfound",
      });
    }
  }
  //select
  async selectIdentityCard(Id) {
    const identitycard = await IdentityCard.findByPk(Id);
    if (identitycard) {
      return (this.msg = {
        status: 200,
        rs: identitycard,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The IdentityCard Id is notfound",
      });
    }
  }
}

module.exports = Identirycards;
