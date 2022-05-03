const Controller = require("../Controller/index");
const gender = new Controller.GendersContriller();

module.exports = {
  async createGender(req, res) {
    await gender.CreateGender(req.body).then((result) => {
      if (result == "200") {
        res.status(200).send({
          msg: "Create Gender is success",
          rs: result.dataValues,
        });
      } else {
        res.status(501).send({
          msg: "Can`t save Gender becaause value is Duplicate",
        });
      }
    });
  },
  async updateGender(req, res) {
    await gender.UpdateGender(req.body).then((result) => {
      if (result == "404") {
        res.status(404).send({
          msg: "Gender Id is Notfound",
        });
      } else if (result == "200") {
        res.status(200).send({
          msg: "Update Gender is success",
        });
      } else {
        res.status(501).send({
          msg: "Can`t Update Gender becaause ID is notfound ",
        });
      }
    });
  },
  async disableGender(req, res) {
    await gender.DisableGender({ gd_Id: req.params.Id }).then((result) => {
      if (result == "404") {
        res.status(404).send({
          msg: "Gender Id is Notfound",
        });
      } else if (result == "200") {
        res.status(200).send({
          msg: "Disable Gender is success",
        });
      } else {
        res.status(501).send({
          msg: "Can`t Disable Gender becaause ID is notfound ",
        });
      }
    });
  },
  async getGender(req, res) {
    new Controller.GendersContriller().GetGender().then((result) => {
      if (result == "500") {
        res.status(500).send({
          msg: "Can`t loaded value of Gender now",
        });
      } else {
        res.status(200).send({
          msg: "Display value of Gender",
          consts: result.length,
          rs: result,
        });
      }
    });
  },
};
